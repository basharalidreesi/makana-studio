import article from "./article";
import colour from "./colour";
import counterMap from "./counterMap";
import counterMapDataLayer from "./counterMapDataLayer";
import counterMapDataPoint from "./counterMapDataPoint";
import counterMapDataType from "./counterMapDataType";
import counterMapInitiative from "./counterMapInitiative";
import event from "./event";
import pageBuilder from "./pageBuilder";
import project from "./project";
import publication from "./publication";

export const schemaTypes = [
	// singletons
	counterMap,
	
	// documents
	article,
	counterMapDataLayer,
	counterMapDataType,
	counterMapInitiative,
	event,
	project,
	publication,

	// objects
	colour,
	counterMapDataPoint,

	// modules
	pageBuilder,
];