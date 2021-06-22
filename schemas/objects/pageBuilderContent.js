export default {
  name: "pageBuilderContent",
  type: "object",
  title: "Content",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "body", type: "bodyPortableText", title: "Body" },
    { name: "image", type: "mainImage", title: "Image" },
  ],
};
