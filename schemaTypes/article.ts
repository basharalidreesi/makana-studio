import { defineField, defineType } from "sanity";
import { ARTICLE_ICON } from "../lib/IconUtils";

export default defineType({
	name: "article",
	type: "document",
	title: "Article",
	icon: ARTICLE_ICON,
	fields: [
		defineField({
			name: "headline",
			type: "string",
			title: "Article Headline",
			// TODO description
		}),
		// TODO metadata
		defineField({
			name: "content",
			type: "pageBuilder",
			title: "Content",
		}),
	],
});