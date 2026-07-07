/**
 * A simple animated gradient shader (GLSL). Consumed by `ShaderPlane`.
 * `.glsl`/`.vert`/`.frag` files are ESLint-ignored; inline strings keep the
 * shader colocated and bundler-agnostic.
 */

export const gradientVertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const gradientFragmentShader = /* glsl */ `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  void main() {
    float wave = 0.5 + 0.5 * sin(vUv.x * 3.14159 + uTime * 0.4)
                      * cos(vUv.y * 3.14159 - uTime * 0.3);
    vec3 color = mix(uColorA, uColorB, wave);
    gl_FragColor = vec4(color, 1.0);
  }
`;
