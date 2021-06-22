export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Post Name",
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
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "body",
      title: "Body",
      type: "localeBlockContent",
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
