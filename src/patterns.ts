export const AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
export const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;

const canPlayFile = (url: string, test: (u: string) => boolean) => {
	if (Array.isArray(url)) {
		for (const item of url) {
			if (typeof item === "string" && canPlayFile(item, test)) {
				return true;
			}
			if (canPlayFile(item.src, test)) {
				return true;
			}
		}
		return false;
	}
	return test(url);
};

export const canPlay = {
	html: (url: string) => canPlayFile(url, (u: string) => AUDIO_EXTENSIONS.test(u) || VIDEO_EXTENSIONS.test(u))
};
