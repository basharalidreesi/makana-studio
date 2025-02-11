import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
	name: "pageBuilder",
	type: "array",
	// TODO description
	of: [ // TODO bilingual content
		defineArrayMember({
			name: "heading",
			type: "object",
			title: "Heading",
			fields: [
				defineField({
					name: "temp",
					type: "string",
					initialValue: "temp",
				}),
			],
			preview: {
				prepare() {
					return {
						title: "Heading",
					};
				},
			},
		}),
		defineArrayMember({
			name: "bodyText",
			type: "object",
			title: "Body Text",
			fields: [
				defineField({
					name: "temp",
					type: "string",
					initialValue: "temp",
				}),
			],
			preview: {
				prepare() {
					return {
						title: "Body Text",
					};
				},
			},
		}),
		defineArrayMember({
			name: "imageBlock",
			type: "image",
			title: "Image",
			fields: [
				defineField({
					name: "temp",
					type: "string",
					initialValue: "temp",
				}),
			],
			preview: {
				prepare() {
					return {
						title: "Image",
					};
				},
			},
		}),
		defineArrayMember({
			name: "videoBlock",
			type: "object",
			title: "Video",
			fields: [
				defineField({
					name: "temp",
					type: "string",
					initialValue: "temp",
				}),
			],
			preview: {
				prepare() {
					return {
						title: "Video",
					};
				},
			},
		}),
		defineArrayMember({
			name: "ctaBlock",
			type: "object",
			title: "Call to Action",
			fields: [
				defineField({
					name: "temp",
					type: "string",
					initialValue: "temp",
				}),
			],
			preview: {
				prepare() {
					return {
						title: "Call to Action",
					};
				},
			},
		}),
		defineArrayMember({
			name: "formBlock",
			type: "object",
			title: "Form",
			fields: [
				defineField({
					name: "temp",
					type: "string",
					initialValue: "temp",
				}),
			],
			preview: {
				prepare() {
					return {
						title: "Form",
					};
				},
			},
		}),
		defineArrayMember({
			name: "counterMapBlock",
			type: "object",
			title: "Counter-map",
			fields: [
				defineField({
					name: "temp",
					type: "string",
					initialValue: "temp",
				}),
			],
			preview: {
				prepare() {
					return {
						title: "Counter-map",
					};
				},
			},
		}),
	],
});