import type { ComponentType, DetailedHTMLProps, HTMLAttributes, MediaHTMLAttributes, ReactNode, SyntheticEvent } from "react";

interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
	height?: number | string | undefined;
	playsInline?: boolean | undefined;
	poster?: string | undefined;
	width?: number | string | undefined;
	disablePictureInPicture?: boolean | undefined;
	disableRemotePlayback?: boolean | undefined;
	onEnterPictureInPicture?: ((this: HTMLVideoElement, ev: Event) => void) | undefined;
	onLeavePictureInPicture?: ((this: HTMLVideoElement, ev: Event) => void) | undefined;
}

export interface VideoElementProps extends DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
	playbackRate?: number;
	volume?: number;
}

export interface ReactPlayerProps extends VideoElementProps {
	fallback?: ReactNode;
	onReady?: () => void;
	onStart?: (event: SyntheticEvent<HTMLVideoElement>) => void;
	pip?: boolean;
	playing?: boolean;
	wrapper?: string | ComponentType<HTMLAttributes<HTMLDivElement>>;
	canPlay?: (url: string) => boolean;
}

type ReactEventHandlers<T> = {
	[K in keyof T as K extends `on${string}` ? K : never]?: T[K];
};

export type VideoEventProps = ReactEventHandlers<VideoElementProps>;
