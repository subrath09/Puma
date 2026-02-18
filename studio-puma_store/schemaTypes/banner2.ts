import { defineType, defineField } from "sanity";

export const banner2Type = defineType({
  name: "banner2",
  title: "Banner2",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Banner2 Title",
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
      title: "Banner2 Image",
      type: "image",
    }),
  ],
});
