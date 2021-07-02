export default {
  title: "Information Blocks",
  name: "infoblocks",
  type: "object",
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
      name: "columns",
      title: "Layout Columns",
      description: "How many columns does this layout have?",
      type: "string",
    },
    {
      name: "modules",
      type: "array",
      title: "Modules",
      description: "Add, edit, and reorder promo banners",
      of: [{ type: "hero" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Info Blocks",
      };
    },
  },
};
