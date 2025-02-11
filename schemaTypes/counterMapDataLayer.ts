import { defineArrayMember, defineField, defineType } from "sanity";
import { CounterMapDataLayerMedia } from "../components";
import { MONO_COUNTER_MAP_ID, ENABLE_MULTIPLE_MAPS } from "../lib/CounterMapUtils";
import { COUNTER_MAP_DATA_LAYER_ICON } from "../lib/IconUtils";

export default defineType({
	name: "counterMapDataLayer",
	type: "document",
	title: "Counter-map Data Group",
	icon: COUNTER_MAP_DATA_LAYER_ICON,
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Layer Name",
			// TODO description
		}),
		defineField({
			name: "parentMap",
			type: "reference",
			title: "Parent Map",
			// TODO description
			to: [
				{
					type: "counterMap",
				},
			],
			options: {
				disableNew: true,
			},
			initialValue: ENABLE_MULTIPLE_MAPS
				? undefined
				: {
					_ref: MONO_COUNTER_MAP_ID,
				},
			readOnly: ENABLE_MULTIPLE_MAPS ? false : true,
			hidden: ENABLE_MULTIPLE_MAPS ? false : true,
		}),
		defineField({
			name: "colour",
			type: "colour",
			title: "Layer Colour",
			// TODO description
		}),
		defineField({
			name: "data",
			type: "array",
			title: "Data Points",
			// TODO description
			of: [
				defineArrayMember({
					type: "counterMapDataPoint",
				}),
			],
		}),
	],
	preview: {
		select: {
			name: "name",
			colour: "colour",
			data: "data",
		},
		prepare(selection) {
			const {
				name,
				colour,
				data = [],
			} = selection;
			return {
				title: name,
				subtitle: "Data Group",
				media: CounterMapDataLayerMedia(colour, data.length),
			};
		},
	},
});