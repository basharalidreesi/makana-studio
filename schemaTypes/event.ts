import { defineField, defineType } from "sanity";
import { EVENT_ICON } from "../lib/IconUtils";

export default defineType({
	name: "event",
	type: "document",
	title: "Event",
	icon: EVENT_ICON,
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Event Name",
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