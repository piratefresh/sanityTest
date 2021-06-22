export default {
  type: "object",
  name: "commonQuestions",
  title: "Common Question",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "body",
      title: "body",
      type: "blockContent",
    },
    {
      title: "Call to action",
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
        title: `Common Question: ${disabled ? "DISABLED" : title}`,
      };
    },
  },
};
