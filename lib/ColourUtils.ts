export const normaliseColour = (value?: string) => {
	if (!value) { return undefined; };
	const s = new Option().style;
	s.color = value;
	if (["", "inherit", "initial", "transparent", "unset"].includes(s.color)) {
		return undefined;
	};
	return s.color;
};

export const validateColour = (value?: string) => {
	const normalisedColour = normaliseColour(value);
	if (!normalisedColour) { return "Not a valid colour"; };
	return true;
};

export const getContrastingForegroundColour = (value?: string) => {
	const normalisedColour = normaliseColour(value);
	const fallbackColour = "#000";
	// Guard against invalid colours
	if (!normalisedColour) {
		return fallbackColour;
	};
	// Begin colour computation
	let computedColour = normalisedColour;
	if (typeof window !== "undefined") {
		// Create a temporary element to let the browser parse the colour
		const tempElem = document.createElement("div");
		tempElem.style.display = "none";
		tempElem.style.color = normalisedColour;
		document.body.appendChild(tempElem);
		computedColour = window.getComputedStyle(tempElem).color;
		document.body.removeChild(tempElem);
	};
	// computedColor should now be in the format "rgb(r, g, b)" or "rgba(r, g, b, a)"
	const result = computedColour.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
	if (result) {
		const r = parseInt(result[1], 10);
		const g = parseInt(result[2], 10);
		const b = parseInt(result[3], 10);
		// Compute brightness using the YIQ formula
		const brightness = (r * 299 + g * 587 + b * 114) / 1000;
		// If brightness is high, return black; otherwise, white
		return brightness > 125 ? "#000" : "#fff";
	};
	return fallbackColour; // Fallback if parsing fails
};