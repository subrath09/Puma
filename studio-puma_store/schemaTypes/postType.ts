import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),

    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
    }),

    //  HERO IDENTIFIER FIELD
    defineField({
      name: "isHero",
      title: "Hero Section Post",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "image",
      type: "image",
    }),

    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }), 
  ],
});
