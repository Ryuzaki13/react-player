import type { SyntheticEvent } from "react";
import { forwardRef, useCallback, useEffect, useRef } from "react";
import { HtmlPlayer } from "./HtmlPlayer";
import type { ReactPlayerProps, VideoEventProps } from "./types";

function assignEventProp<T extends Record<string, unknown>, K extends keyof T>(target: Partial<T>, source: T, key: K) {
	target[key] = source[key];
}

export const Player = forwardRef<HTMLVideoElement, ReactPlayerProps>((props, ref) => {
	const { playing, pip } = props;

	const playerRef = useRef<HTMLVideoElement | null>(null);
	const startOnPlayRef = useRef(true);

	const setRef = useCallback(
		(node: HTMLVideoElement | null) => {
			playerRef.current = node;

			if (typeof ref === "function") {
				ref(node);
			} else if (ref) {
				ref.current = node;
			}
		},
		[ref]
	);

	useEffect(() => {
		if (!playerRef.current) return;

		// Use strict equality for `playing`, if it's nullish, don't do anything.
		if (playerRef.current.paused && playing === true) {
			playerRef.current.play();
		}
		if (!playerRef.current.paused && playing === false) {
			playerRef.current.pause();
		}

		playerRef.current.playbackRate = props.playbackRate ?? 1;
		playerRef.current.volume = props.volume ?? 1;
	});

	useEffect(() => {
		if (!playerRef.current || !globalThis.document) return;

		if (pip && !document.pictureInPictureElement) {
			try {
				playerRef.current.requestPictureInPicture?.();
			} catch (err) {}
		}

		if (!pip && document.pictureInPictureElement) {
			try {
				document.exitPictureInPicture?.();
			} catch (err) {}
		}
	}, [pip]);

	const handleLoadStart = (event: SyntheticEvent<HTMLVideoElement>) => {
		startOnPlayRef.current = true;
		props.onReady?.();
		props.onLoadStart?.(event);
	};

	const handlePlay = (event: SyntheticEvent<HTMLVideoElement>) => {
		if (startOnPlayRef.current) {
			startOnPlayRef.current = false;
			props.onStart?.(event);
		}
		props.onPlay?.(event);
	};

	const eventProps: Partial<VideoEventProps> = {};
	const reactPlayerEventHandlers = ["onReady", "onStart"];

	for (const key in props) {
		if (key.startsWith("on") && !reactPlayerEventHandlers.includes(key)) {
			assignEventProp(eventProps, props as VideoEventProps, key as keyof VideoEventProps);
		}
	}

	return (
		<HtmlPlayer
			{...eventProps}
			style={props.style}
			className={props.className}
			slot={props.slot}
			ref={setRef}
			src={props.src}
			crossOrigin={props.crossOrigin}
			preload={props.preload}
			controls={props.controls}
			muted={props.muted}
			autoPlay={props.autoPlay}
			loop={props.loop}
			playsInline={props.playsInline}
			disableRemotePlayback={props.disableRemotePlayback}
			onLoadStart={handleLoadStart}
			onPlay={handlePlay}>
			{props.children}
		</HtmlPlayer>
	);
});

Player.displayName = "Player";
