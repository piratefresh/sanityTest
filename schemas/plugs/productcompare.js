export default {
  type: "object",
  name: "productcompare",
  title: "Product Compare",
  fields: [
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "product" },
        },
      ],
    },
    {
      name: "similarAttributes",
      title: "Similar Attributes",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "Product Compare",
    },
    prepare({ title, disabled }) {
      return {
        title: `Product Comparision: ${disabled ? "DISABLED" : title}`,
      };
    },
  },
};
