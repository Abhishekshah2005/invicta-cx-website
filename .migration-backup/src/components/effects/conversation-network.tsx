"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/utils/dom";

interface ConversationNetworkProps {
  /** Node count. Scales down automatically on small screens. */
  count?: number;
  /** Max px distance to draw a link between two nodes. */
  linkDistance?: number;
  /** CSS color for nodes and links. */
  color?: string;
  className?: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/**
 * A living network of conversations — points that drift and connect where near,
 * gently parallaxing to the cursor. Canvas 2D (lighter than WebGL for an
 * above-the-fold hero). Meaning: countless human conversations forming one
 * connected layer. Static under reduced motion; paused when off-screen.
 */
export function ConversationNetwork({
  count = 72,
  linkDistance = 150,
  color = "#B4121B",
  className,
}: ConversationNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    let width = 0;
    let height = 0;
    let dpr = 1;
    const nodes: Node[] = [];
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    const n = window.innerWidth < 768 ? Math.round(count * 0.55) : count;

    const seed = () => {
      nodes.length = 0;
      for (let i = 0; i < n; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.4 + 0.6,
        });
      }
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (nodes.length === 0) seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const px = (pointer.x - 0.5) * 24;
      const py = (pointer.y - 0.5) * 24;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!a) continue;
        // links
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          if (!b) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            const o = (1 - dist / linkDistance) * 0.28;
            ctx.strokeStyle = color;
            ctx.globalAlpha = o;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x + px, a.y + py);
            ctx.lineTo(b.x + px, b.y + py);
            ctx.stroke();
          }
        }
        // node
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(a.x + px, a.y + py, a.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const step = () => {
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }
      draw();
    };

    let raf = 0;
    let running = false;
    const loop = () => {
      step();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointer = (e: PointerEvent) => {
      pointer.tx = e.clientX / window.innerWidth;
      pointer.ty = e.clientY / window.innerHeight;
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("pointermove", onPointer, { passive: true });

    const io = new IntersectionObserver(([entry]) => (entry?.isIntersecting ? start() : stop()), {
      threshold: 0,
    });
    io.observe(canvas);

    if (reduced) draw();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, [count, linkDistance, color]);

  return <canvas ref={canvasRef} aria-hidden className={cn("size-full", className)} />;
}
