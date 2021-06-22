export default {
  name: "siteSettings",
  title: "Site Settings",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "settings",
      type: "array",
      title: "Various Settings",
      description: "Add, edit, and reorder sections",
      of: [{ type: "promobar" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[0]",
    },
  },
};
