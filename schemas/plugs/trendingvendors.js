export default {
  title: "Trending Vendors",
  name: "trendingvendors",
  type: "object",
  fields: [
    {
      title: "Vendors",
      name: "vendors",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "vendor" },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Trending vendors",
      };
    },
  },
};
