import { defineField, defineType, useFormValue } from "sanity";
import { COUNTER_MAP_BASE_ICON } from "../lib/IconUtils";
import { ENABLE_MULTIPLE_MAPS } from "../lib/CounterMapUtils";

export default defineType({
	name: "counterMap",
	type: "document",
	title: "Counter-map Base",
	icon: COUNTER_MAP_BASE_ICON,
	__experimental_omnisearch_visibility: ENABLE_MULTIPLE_MAPS ? false : true,
	fields: [
		defineField({
			name: "id",
			type: "string",
			title: "Map ID",
			// TODO description
			readOnly: true,
			hidden: true,
			components: {
				input: (props) => {
					const documentId = (useFormValue(["_id"]) as string || undefined) || undefined;
					return props.renderDefault({
						...props,
						elementProps: {
							...props.elementProps,
							value: documentId,
						},
					});
				},
			},
		}),
		defineField({
			name: "title",
			type: "string",
			title: "Map Title",
			// TODO description
		}),
		// TODO metadata
		defineField({
			name: "baseMap",
			type: "image",
			title: "Map Graphic",
			// TODO description
			options: {
				accept: ".svg",
				storeOriginalFilename: false,
			},
		}),
	],
});