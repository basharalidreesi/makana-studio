import { defineField, defineType } from "sanity";
import { COUNTER_MAP_INITIATIVE_ICON } from "../lib/IconUtils";

export default defineType({
	name: "counterMapInitiative",
	type: "document",
	title: "Counter-map Initiative",
	icon: COUNTER_MAP_INITIATIVE_ICON,
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Initiative Name",
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