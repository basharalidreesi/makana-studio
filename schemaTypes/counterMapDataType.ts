import { defineField, defineType } from "sanity";
import { COUNTER_MAP_DATA_TYPE_ICON } from "../lib/IconUtils";

export default defineType({
	name: "counterMapDataType",
	type: "document",
	title: "Counter-map Data Marker",
	icon: COUNTER_MAP_DATA_TYPE_ICON,
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Marker Name",
			// TODO description
		}),
		defineField({
			name: "icon",
			type: "image",
			title: "Marker Icon",
			// TODO description
			options: {
				accept: ".svg",
				storeOriginalFilename: false,
			},
		}),
	],
});