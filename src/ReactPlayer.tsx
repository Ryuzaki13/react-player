import type { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { forwardRef, Suspense } from "react";

import { Player } from "./Player";
import { defaultProps } from "./props";

import { canPlay } from "./patterns";
import type { ReactPlayerProps } from "./types";

type ReactPlayerProps2 = ForwardRefExoticComponent<Omit<ReactPlayerProps, "ref"> & RefAttributes<HTMLVideoElement>>;

const ForwardChildren = ({ children }: { children?: ReactNode }) => children;

export const ReactPlayer: ReactPlayerProps2 = forwardRef((props, ref) => {
	const { src, slot, className, style, width, height, fallback, wrapper } = { ...defaultProps, ...props };

	if (!src || !canPlay(src)) {
		// TODO: skeleton component
		return null;
	}

	const Wrapper: ReactPlayerProps["wrapper"] = wrapper == null ? ForwardChildren : wrapper;

	const UniversalSuspense = fallback === false ? ForwardChildren : Suspense;

	return (
		<Wrapper slot={slot} className={className} style={{ width, height, ...style }}>
			<UniversalSuspense fallback={fallback}>
				<Player
					{...props}
					ref={ref}
					slot={wrapper ? undefined : slot}
					className={wrapper ? undefined : className}
					style={wrapper ? { display: "block", width: "100%", height: "100%" } : { display: "block", width, height, ...style }}
				/>
			</UniversalSuspense>
		</Wrapper>
	);
});

ReactPlayer.displayName = "ReactPlayer";
