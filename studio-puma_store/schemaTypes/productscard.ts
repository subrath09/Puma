import { defineType, defineField } from "sanity";

export const productscardType = defineType({
  name: "productscard",
  title: "Products Card",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Card Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Card Image",
      type: "image",
    }),
  ],
});
