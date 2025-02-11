import { defineType } from "sanity";
import { ColourInput } from "../components";
import { validateColour } from "../lib/ColourUtils";

export default defineType({
	name: "colour",
	type: "string",
	// TODO description
	validation: (Rule) => Rule.custom((value) => {
		if (!value) { return true; };
		return validateColour(value);
	}).warning(),
	initialValue: "#fff",
	components: {
		input: ColourInput,
	},
});