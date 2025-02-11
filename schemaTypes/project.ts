import { defineField, defineType } from "sanity";
import { PROJECT_ICON } from "../lib/IconUtils";

export default defineType({
	name: "project",
	type: "document",
	title: "Project",
	icon: PROJECT_ICON,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Project Title",
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