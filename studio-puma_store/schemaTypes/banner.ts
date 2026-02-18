import { defineType, defineField } from "sanity";

export const bannerType = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Banner Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "primaryButton",
      title: "Primary Button",
      type: "string",
    }),
    defineField({
      name: "secondaryButton",
      title: "Secondary Button",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Banner Image",
      type: "image",
    }),
  ],
});
