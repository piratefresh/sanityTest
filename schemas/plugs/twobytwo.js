export default {
  title: "Two By Two",
  name: "twobytwo",
  type: "object",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "modules",
      type: "array",
      title: "Modules",
      description: "Add, edit, and reorder promo banners",
      of: [{ type: "promobanner" }],
    },
  ],
};
