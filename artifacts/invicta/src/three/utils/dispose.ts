import type { Material, Mesh, Object3D, Texture } from "three";

/**
 * Recursively dispose an Object3D's geometries, materials, and textures to free
 * GPU memory. Call on unmount for any manually-created three objects (R3F
 * disposes declarative ones automatically, but imperative/loaded assets need
 * this).
 */
export function disposeObject(object: Object3D): void {
  object.traverse((child) => {
    const mesh = child as Mesh;
    mesh.geometry?.dispose();

    const material = mesh.material as Material | Material[] | undefined;
    const materials = Array.isArray(material) ? material : material ? [material] : [];
    for (const mat of materials) {
      for (const value of Object.values(mat)) {
        if (value && (value as Texture).isTexture) (value as Texture).dispose();
      }
      mat.dispose();
    }
  });
}
