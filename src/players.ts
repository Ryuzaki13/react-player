import HtmlPlayer from "./HtmlPlayer.js";
import { canPlay } from "./patterns.js";
import type { VideoElementProps } from "./types.js";

export type PlayerEntry = {
  key: string;
  name: string;
  canPlay: (src: string) => boolean;
  canEnablePIP?: () => boolean;
  player?:
    | React.ComponentType<VideoElementProps>
    | React.LazyExoticComponent<React.ComponentType<VideoElementProps>>;
};

const Players: PlayerEntry[] = [
  {
    key: "html",
    name: "html",
    canPlay: canPlay.html,
    canEnablePIP: () => true,
    player: HtmlPlayer,
  },
];

export default Players;
