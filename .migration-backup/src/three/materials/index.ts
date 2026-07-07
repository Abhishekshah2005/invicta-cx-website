export { ShaderPlane } from "./shader-plane";

/**
 * Reusable material property presets. Spread onto drei/three material elements,
 * e.g. `<meshPhysicalMaterial {...glassMaterialProps} />`.
 */
export const glassMaterialProps = {
  transmission: 1,
  thickness: 0.5,
  roughness: 0.08,
  ior: 1.5,
  chromaticAberration: 0.03,
} as const;

export const metalMaterialProps = {
  metalness: 1,
  roughness: 0.2,
} as const;

export const matteMaterialProps = {
  metalness: 0,
  roughness: 0.85,
} as const;
