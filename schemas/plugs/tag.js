export default {
  type: "object",
  name: "tag",
  title: "Tag",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
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
      name: "type",
      title: "Tag Type",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      disabled: "disabled",
    },
    prepare({ title, disabled }) {
      return {
        title: `Tags: ${title ? "DISABLED" : title}`,
      };
    },
  },
};
