import { forwardRef } from "react";
import { AUDIO_EXTENSIONS } from "./patterns.js";
import type { VideoElementProps } from "./types.js";

export const HtmlPlayer = forwardRef<HTMLVideoElement, VideoElementProps>((props, ref) => {
	const Media = AUDIO_EXTENSIONS.test(`${props.src}`) ? "audio" : "video";

	return (
		<Media {...props} ref={ref}>
			{props.children}
		</Media>
	);
});
