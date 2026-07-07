"use client";

import { OrbitControls } from "@react-three/drei";

type CameraControlsProps = React.ComponentProps<typeof OrbitControls>;

/**
 * Damped orbit controls with marketing-friendly defaults (no pan/zoom, smooth
 * inertia). Override any prop for interactive showcases.
 */
export function CameraControls(props: CameraControlsProps) {
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      enableDamping
      dampingFactor={0.08}
      rotateSpeed={0.5}
      {...props}
    />
  );
}
