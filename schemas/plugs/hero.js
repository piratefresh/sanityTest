export default {
  type: "object",
  name: "hero",
  title: "Hero",
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
      imageUrl: "asset.url",
      disabled: "disabled",
    },
    prepare({ title, disabled }) {
      return {
        title: `Hero: ${disabled ? "DISABLED" : title}`,
      };
    },
  },
};
