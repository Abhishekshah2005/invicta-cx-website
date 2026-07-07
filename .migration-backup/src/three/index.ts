/**
 * 3D system public API. Structure:
 *   canvas/    – <Scene> Canvas wrapper
 *   scenes/    – composed scenes (added per flagship page)
 *   lights/    – reusable lighting rigs
 *   materials/ – shader materials & material presets
 *   camera/    – camera presets
 *   controls/  – camera interaction controls
 *   loaders/   – model/asset loaders
 *   shaders/   – GLSL sources
 *   effects/   – post-processing (added when needed)
 *   hooks/     – R3F/drei hook re-exports & custom hooks
 *   utils/     – three helpers (disposal, etc.)
 *
 * All 3D rendering is client-only; import these inside `"use client"` trees.
 */
export { Scene } from "./canvas/scene";
export { StudioLights } from "./lights/studio-lights";
export { CameraControls } from "./controls/camera-controls";
export { CAMERA_PRESETS, type CameraPreset } from "./camera";
export {
  ShaderPlane,
  glassMaterialProps,
  metalMaterialProps,
  matteMaterialProps,
} from "./materials";
export { Model, preloadModel } from "./loaders";
export { gradientVertexShader, gradientFragmentShader } from "./shaders/gradient";
export { disposeObject } from "./utils";
