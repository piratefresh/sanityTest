export default {
  name: "indexPage",
  title: "Index Page Settings",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  type: "document",
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
    {
      name: "modules",
      type: "array",
      title: "Modules",
      description: "Add, edit, and reorder sections",
      of: [
        { type: "promobar" },
        { type: "twobytwo" },
        { type: "trendingvendors" },
        { type: "featuredBanner" },
        { type: "infoblocks" },
      ],
    },
    {
      name: "featuredBannerSlider",
      title: "Featured Banner Slider",
      type: "array",
      of: [{ type: "featuredBanner" }],
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
