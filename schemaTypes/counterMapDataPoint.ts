import { defineArrayMember, defineField, defineType } from "sanity";
import { COUNTER_MAP_DATA_POINT_ICON } from "../lib/IconUtils";
import { CounterMapDataPointInput } from "../components";

export default defineType({
	name: "counterMapDataPoint",
	type: "object",
	title: "Counter-map Data Point",
	icon: COUNTER_MAP_DATA_POINT_ICON,
	fields: [
		defineField({
			name: "dataType",
			type: "reference",
			title: "Marker",
			// TODO description
			to: [
				{
					type: "counterMapDataType",
				},
			],
			options: {
				disableNew: true,
			},
		}),
		defineField({
			name: "coordinates",
			type: "object",
			title: "Coordinates",
			fields: [
				defineField({
					name: "x",
					type: "number",
					title: "X",
				}),
				defineField({
					name: "y",
					type: "number",
					title: "Y",
				}),
			],
			options: {
				columns: 2,
			},
			components: {
				input: CounterMapDataPointInput,
			},
		}),
		defineField({
			name: "initatives",
			type: "array",
			title: "Initiatives",
			// TODO description
			of: [
				defineArrayMember({
					type: "reference",
					to: [
						{
							type: "counterMapInitiative",
						},
					],
					options: {
						disableNew: true,
					},
				}),
			],
		}),
	],
	preview: {
		select: {
			dataTypeName: "dataType.name",
			dataTypeIcon: "dataType.icon",
			initative0Name: "initatives.0.name",
			initative1Name: "initatives.1.name",
			initative2Name: "initatives.2.name",
			initative3Name: "initatives.3.name",
		},
		prepare(selection) {
			const {
				dataTypeName,
				dataTypeIcon,
				initative0Name,
				initative1Name,
				initative2Name,
				initative3Name,
			} = selection;
			return {
				title: [initative0Name, initative1Name, initative2Name, initative3Name ? "..." : null]?.filter(Boolean)?.join(" · "),
				subtitle: dataTypeName,
				media: dataTypeIcon,
			};
		},
	},
});