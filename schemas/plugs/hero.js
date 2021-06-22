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
