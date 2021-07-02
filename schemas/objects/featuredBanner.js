export default {
  title: "Featured Banner",
  name: "featuredBanner",
  type: "object",
  options: {
    hotspot: true,
  },
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
      title: "Text Alignment",
      name: "textAlignment",
      type: "string",
      initialValue: "left",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },
    },
    {
      title: "Header",
      name: "header",
      type: "string",
    },
    {
      title: "Top Header",
      name: "topHeader",
      type: "string",
    },
    {
      title: "Sub Header",
      name: "subHeader",
      type: "string",
    },
    {
      title: "Is a card?",
      name: "isCard",
      type: "boolean",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
    },
    {
      title: "Call to action",
      name: "cta",
      type: "cta",
    },
    {
      title: "Tag",
      name: "tag",
      type: "tag",
    },
  ],
  preview: {
    select: {
      imageUrl: "image.asset.url",
      title: "header",
    },
  },
};
