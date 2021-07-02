// export default function resolveProductionUrl(document) {
//   return `http://localhost:3000/product/${document.slug.current}`;
// }
const previewSecret = "MY_SECRET"; // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = "http://localhost:3000";

export default function resolveProductionUrl(document) {
  // Only show the preview option for documents for which a preview makes sense.

  switch (document._type) {
    case "product":
      if (!document.slug || !document.slug.current) {
        return baseUrl;
      }
      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
    case "indexPage":
      return `${projectUrl}`;
    case "siteSettings":
      return projectUrl;
    case "page":
      if (document._id === "frontpage" || document._id === "drafts.frontpage") {
        return projectUrl;
      }
      return null;
    default:
      return null;
  }

  // if (document._type === "indexPage") {
  //   return `${projectUrl}`;
  // } else {
  //   return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
  // }
}

//  switch (document._type) {
//     case 'route':
//       if (!document.slug || !document.slug.current) {
//         return baseUrl
//       }
//       return `${baseUrl}/${document.slug.current}`
//     case 'post':
//       return `${baseUrl}/blog/${document.slug.current}`
//     case 'siteSettings':
//       return baseUrl
//     case 'page':
//       if (document._id === 'frontpage' || document._id === 'drafts.frontpage') {
//         return baseUrl
//       }
//       return null
//     default:
//       return null
//   }
