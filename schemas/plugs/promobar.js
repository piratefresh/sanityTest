export default {
  type: "object",
  name: "promobar",
  title: "Promobar",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
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
      name: "cta",
      title: "Link",
      type: "cta",
    },
    {
      title: "Background color",
      name: "color",
      type: "color",
    },
    {
      title: "Is Enabled?",
      name: "isEnabled",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      disabled: "disabled",
    },
    prepare({ title, disabled }) {
      return {
        title: `Promobar: ${disabled ? "DISABLED" : title}`,
      };
    },
  },
};
