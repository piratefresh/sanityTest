export default {
  name: "pageBuilderColumns",
  title: "Columns",
  type: "object",
  fields: [
    {
      name: "columns",
      title: "Columns",
      type: "array",
      of: [{ name: "column", title: "Column", type: "column" }],
    },
  ],
};
