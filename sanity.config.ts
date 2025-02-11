import { defineConfig } from "sanity";
import { StructureBuilder, structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { MONO_COUNTER_MAP_ID, ENABLE_MULTIPLE_MAPS } from "./lib/CounterMapUtils";
import { COUNTER_MAP_BASE_ICON, COUNTER_MAP_FOLDER_ICON, PAGES_FOLDER_ICON } from "./lib/IconUtils";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set([ENABLE_MULTIPLE_MAPS ? null : "counterMap", "media.tag"]);
const singletonListItem = (S: StructureBuilder, title: string, id: string, type: string, ) => {
	return S.listItem().title(title).id(id).child(S.document().schemaType(type).documentId(id));
};

export default defineConfig({
	name: "default",
	title: "Makāna",
	projectId: "b845ek2k",
	dataset: "production",
	plugins: [
		structureTool({
			structure: (S) => {
				return S.list().title("Content").items([
					S.documentTypeListItem("project").title("Projects"),
					S.documentTypeListItem("publication").title("Publications"),
					S.documentTypeListItem("article").title("Article"),
					S.documentTypeListItem("event").title("Events"),
					S.divider(),
					S.listItem().title("Pages").icon(PAGES_FOLDER_ICON).child(S.list().title("Pages").items([])), // TODO subpages
					S.divider(),
					S.listItem().title("Counter-map").icon(COUNTER_MAP_FOLDER_ICON).child(S.list().title("Counter-map").items([
						ENABLE_MULTIPLE_MAPS
							? S.documentTypeListItem("counterMap").title("Base Maps")
							: singletonListItem(S, "Base Map", MONO_COUNTER_MAP_ID, "counterMap").icon(COUNTER_MAP_BASE_ICON),
						S.documentTypeListItem("counterMapDataType").title("Markers"),
						S.divider(),
						S.documentTypeListItem("counterMapDataLayer").title("Data"),
						S.divider(),
						S.documentTypeListItem("counterMapInitiative").title("Initiatives"),
					])),
				]);
			},
		}),
		visionTool(),
	],
	schema: {
		types: schemaTypes,
		templates: (templates) => {
			return templates.filter(({ schemaType }) => !singletonTypes.has(schemaType));
		},
	},
	document: {
		actions: (input, context) => {
			return singletonTypes.has(context.schemaType) ? input.filter(({ action }) => action && singletonActions.has(action)) : input;
		},
		comments: {
			enabled: false,
		},
	},
	// form: {
	// 	image: {
	// 		assetSources: previousAssetSources => {
	// 			return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource);
	// 		},
	// 	},
	// },
	scheduledPublishing: {
		enabled: false,
	},
});