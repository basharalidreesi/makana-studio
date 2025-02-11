import { validateColour } from "../lib/ColourUtils";
import { Box, Text } from "@sanity/ui";

export const CounterMapDataLayerMedia = (colour: string, number: number) => {
	const isColourValid = validateColour(colour) === true;
	return (
		<div style={{
			background: isColourValid ? colour : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Crect width='2' height='2' fill='%23fff'/%3E%3Crect width='1' height='1' fill='%23ccc'/%3E%3Crect x='1' y='1' width='1' height='1' fill='%23ccc'/%3E%3C/svg%3E")`,
			backgroundSize: isColourValid ? undefined : "25% 25%",
			backgroundPosition: isColourValid ? undefined : "repeat",
			width: "100%",
			height: "100%",
			boxShadow: "inset 0 0 0 1px #fff",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		}}>
			<Box style={{
				height: "1lh",
				aspectRatio: "1/1",
				borderRadius: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: "#fff",
			}}>
				<Text size={0} style={{
					color: "#000",
				}}>
					{number}
				</Text>
			</Box>
		</div>
	);
};