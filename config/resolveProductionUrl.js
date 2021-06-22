// export default function resolveProductionUrl(document) {
//   return `http://localhost:3000/product/${document.slug.current}`;
// }
const previewSecret = "MY_SECRET"; // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = "http://localhost:3000";

export default function resolveProductionUrl(document) {
  // Only show the preview option for documents for which a preview makes sense.
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
