// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import product from "./product";
import vendor from "./vendor";
import productVariant from "./productVariant";
import attribute from "./attribute";
import pageBuilder from "./objects/pageBuilder";
import pageBuilderContent from "./objects/pageBuilderContent";
import pageBuilderColumns from "./objects/pageBuilderColumns";
import column from "./objects/column";
import bodyPortableText from "./objects/bodyPortableText";
import mainImage from "./objects/mainImage";

import localeString from "./locale/String";
import localeText from "./locale/Text";
import localeBlockContent from "./locale/BlockContent";
import post from "./documents/post";
import hero from "./plugs/hero";
import cta from "./objects/cta";
import commonQuestions from "./plugs/commonQuestions";
import siteSettings from "./documents/siteSettings";
import promobar from "./plugs/promobar";
import indexPage from "./documents/indexPage";
import featuredBanner from "./objects/featuredBanner";
import tag from "./plugs/tag";
import twobytwo from "./plugs/twobytwo";
import promobanner from "./plugs/promobanner";
import trendingvendors from "./plugs/trendingvendors";
import figure from "./plugs/figure";
import infoblocks from "./plugs/infoblocks";
import productcompare from "./plugs/productcompare";
import textImageBlock from "./plugs/textImageBlock";
import header from "./plugs/header";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    vendor,
    category,
    attribute,
    post,
    siteSettings,
    indexPage,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
    pageBuilder,
    pageBuilderContent,
    pageBuilderColumns,
    column,
    bodyPortableText,
    mainImage,
    hero,
    cta,
    commonQuestions,
    promobar,
    featuredBanner,
    tag,
    twobytwo,
    promobanner,
    trendingvendors,
    figure,
    infoblocks,
    productcompare,
    textImageBlock,
    header,
  ]),
});
