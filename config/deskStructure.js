import React from "react";
import S from "@sanity/desk-tool/structure-builder";

const url = "http://localhost:3000/";
const previewSecret = "MY_SECRET"; // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = "http://localhost:3000";

const WebPreview = ({ document }) => {
  const { displayed } = document;

  const targetURL = `${projectUrl}/api/preview?secret=${previewSecret}&slug=${displayed.slug.current}`;
  //   const targetURL = url + displayed.slug.current + `/?preview=true`;

  return <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />;
};

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === "product") {
    return S.document().views([
      S.view.form(),
      S.view.component(WebPreview).title("Web Preview"),
    ]);
  }
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view.component(WebPreview).title("Web Preview"),
    ]);
  }
};

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Metadata")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),
              S.listItem()
                .title("Promobar")
                .child(
                  S.document().schemaType("promobar").documentId("promobar")
                ),
              S.listItem()
                .title("Site Colors")
                .child(S.document().schemaType("colors").documentId("colors")),
              S.listItem()
                .title("Main Navigation")
                .child(
                  S.document().schemaType("navigation").documentId("navigation")
                ),
            ])
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings", "colors", "navigation"].includes(listItem.getId())
      ),
    ]);
