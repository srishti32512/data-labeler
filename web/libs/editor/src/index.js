import "./core/feature-flags";
import "./assets/styles/global.scss";
import { LabelStudio } from "./LabelStudio";

// original global (keep for compatibility)
window.LabelStudio = DataLabeler;

// NEW: alias so developers can use window.DataLabeler too
window.DataLabeler = DataLabeler;

export default LabelStudio;
// NEW: also export under the new name
export { LabelStudio, LabelStudio as DataLabeler };
