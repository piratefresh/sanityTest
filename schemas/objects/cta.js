export default {
  title: "Call to action",
  name: "cta",
  type: "object",
  fieldsets: [
    {
      title: "Link",
      name: "link",
      description: "Only the first value of these will be used",
    },
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Path",
      name: "route",
      fieldset: "link",
      description: "Example: /blog",
      type: "string",
    },
    {
      title: "Kind",
      name: "kind",
      type: "string",
      options: {
        layout: "radio",
        list: ["button", "link"],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      landingPage: "landingPageRoute.slug.current",
      route: "route",
      link: "link",
    },
    prepare({ title, landingPage, route, link }) {
      let subtitle = "Not set";
      if (landingPage) {
        subtitle = `Route: /${landingPage}`;
      }
      if (route) {
        subtitle = `Route: ${route}`;
      }
      if (link) {
        subtitle = `External: ${link}`;
      }
      return {
        title,
        subtitle,
      };
    },
  },
};