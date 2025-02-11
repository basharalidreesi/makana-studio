import { ObjectInputProps, PatchEvent, set, useClient, useFormValue } from "sanity";
import { useEffect, useRef, useState } from "react";

export const CounterMapDataPointInput = (props: ObjectInputProps) => {
	const [baseMapUrl, setBaseMapUrl] = useState<string | null>(null);
	const client = useClient({ apiVersion: "2025-02-01" });
	const parentMap = useFormValue(["parentMap"]) as { _ref: string } | undefined;
	const parentMapId = parentMap?._ref;
	const containerRef = useRef<HTMLDivElement>(null);
	const handleMapClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
		if (!containerRef.current) { return; };
		const rect = containerRef.current.getBoundingClientRect();
		const x = (event.clientX - rect.left) / rect.width;
		const y = (event.clientY - rect.top) / rect.height;
		console.log("Clicked coordinates:", { x, y });
		props.onChange(PatchEvent.from(set({ x, y })));
	};
	useEffect(() => {
		if (parentMapId) {
			client.fetch(`*[_id == $id][0]{ "url": baseMap.asset->url }`, { id: parentMapId }).then((data) => setBaseMapUrl(data.url));
		};
	}, [parentMapId, client]);
	return baseMapUrl ? (
		<div>
			<div ref={containerRef} onClick={handleMapClick} style={{
				position: "relative",
				borderRadius: "0.1875rem",
				overflow: "hidden",
				boxShadow: "0 0 0 1px var(--card-border-color)",
				background: "#fff",
				cursor: "crosshair",
			}}>
				<img src={baseMapUrl} style={{
					display: "block",
					width: "100%",
					height: "auto",
					pointerEvents: "none",
				}} />
				{props.value && typeof props.value.x === "number" && typeof props.value.y === "number" && (
					<div style={{
						position: "absolute",
						left: `${(props.value.x as number) * 100}%`,
						top: `${(props.value.y as number) * 100}%`,
						transform: "translate(-50%, -50%)",
						pointerEvents: "none",
					}}>
						<svg width="24" height="24" viewBox="0 0 24 24" style={{ display: "block", }}>
							<circle cx="12" cy="12" r="8" fill="red" />
						</svg>
					</div>
				)}
			</div>
			{props.renderDefault(props)}
		</div>
	) : "Loading"; // TODO placeholder
};