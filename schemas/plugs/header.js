// const crops = [
//   { title: "Original", value: 0 },
//   { title: "1 : 1 (square)", value: 1 },
//   { title: "5 : 7", value: 0.7142857143 },
//   { title: "4 : 6", value: 0.6666666667 },
//   { title: "16 : 9", value: 1.7777777778 },
// ];

export default {
  title: "Header",
  description: "A text header",
  name: "header",
  type: "document",
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ alt, asset, title }) {
      return {
        title: `Header: ${title}`,
      };
    },
  },
};
