import { defineField, defineType } from "sanity";
import { PUBLICATION_ICON } from "../lib/IconUtils";

export default defineType({
	name: "publication",
	type: "document",
	title: "Publication",
	icon: PUBLICATION_ICON,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Publication Title",
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