export default {
  title: "Promo Banner",
  name: "promobanner",
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
          { title: "left", value: "left" },
          { title: "right", value: "right" },
          { title: "center", value: "center" },
        ],
        layout: "dropdown",
      },
    },
    {
      title: "Header",
      name: "header",
      type: "string",
    },
    {
      title: "Sub Header",
      name: "subHeader",
      type: "string",
    },
    {
      title: "Use Shadow",
      name: "useShadow",
      description:
        "Set a gradient shadow behind the text, to enhance text visability",
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
      title: "Image Size",
      name: "imageSize",
      type: "string",
      initialValue: "medium",
      options: {
        list: [
          { title: "Full", value: "full" },
          { title: "large", value: "large" },
          { title: "medium", value: "medium" },
        ],
        layout: "dropdown",
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
  ],
};
