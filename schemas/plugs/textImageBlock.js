export default {
  type: "object",
  name: "textImageBlock",
  title: "Text Image Block",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "mainImage",
      type: "mainImage",
    },
    {
      name: "cta",
      type: "cta",
    },
    {
      name: "textAlignment",
      title: "Text Alignment",
      type: "string",
      initialValue: "left",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
      imageUrl: "asset",
    },
    prepare({ title }) {
      return {
        title: `Text Image Block: ${title ? title : "Information Block"}`,
      };
    },
  },
};
