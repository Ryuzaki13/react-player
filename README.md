<h1 align='center'>
  ReactPlayer
</h1>

<p align='center'>
  <a href='https://www.npmjs.com/package/@ryuzaki13/react-player'><img src='https://img.shields.io/npm/v/react-player.svg' alt='Latest npm version'></a>
</p>

<p align='center'>
  A React component for playing a variety of URLs, including file paths.
</p>

---

### Usage

```bash
npm install @ryuzaki13/react-player
```

### Props

| Prop                    | Description                                                                                                                                                                                                                                                                                  | Default     |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `src`                   | The url of a video or song to play                                                                                                                                                                                                                                                           | `undefined` |
| `playing`               | Set to `true` or `false` to play or pause the media                                                                                                                                                                                                                                          | `undefined` |
| `preload`               | Applies the `preload` attribute where supported                                                                                                                                                                                                                                              | `undefined` |
| `playsInline`           | Applies the `playsInline` attribute where supported                                                                                                                                                                                                                                          | `false`     |
| `disableRemotePlayback` | Applies the `disableRemotePlayback` attribute where supported                                                                                                                                                                                                                                | `false`     |
| `crossOrigin`           | Applies the `crossOrigin` attribute where supported                                                                                                                                                                                                                                          | `undefined` |
| `loop`                  | Set to `true` or `false` to loop the media                                                                                                                                                                                                                                                   | `false`     |
| `controls`              | Set to `true` or `false` to display native player controls.<br/>&nbsp; ◦ &nbsp;For Vimeo videos, hiding controls must be enabled by the video owner.                                                                                                                                         | `false`     |
| `volume`                | Set the volume of the player, between `0` and `1`<br/>&nbsp; ◦ &nbsp;`null` uses default volume on all players [`#357`](https://github.com/cookpete/react-player/issues/357)                                                                                                                 | `null`      |
| `muted`                 | Mutes the player                                                                                                                                                                                                                                                                             | `false`     |
| `playbackRate`          | Set the playback rate of the player<br />&nbsp; ◦ &nbsp;Only supported by YouTube, Wistia, and file paths                                                                                                                                                                                    | `1`         |
| `pip`                   | Set to `true` or `false` to enable or disable [picture-in-picture mode](https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture)<br/>&nbsp; ◦ &nbsp;Only available when playing file URLs in [certain browsers](https://caniuse.com/#feat=picture-in-picture) | `false`     |
| `width`                 | Set the width of the player                                                                                                                                                                                                                                                                  | `320px`     |
| `height`                | Set the height of the player                                                                                                                                                                                                                                                                 | `180px`     |
| `style`                 | Add [inline styles](https://facebook.github.io/react/tips/inline-styles.html) to the root element                                                                                                                                                                                            | `{}`        |
| `light`                 | Set to `true` to show just the video thumbnail, which loads the full player on click<br />&nbsp; ◦ &nbsp;Pass in an image URL to override the preview image                                                                                                                                  | `false`     |
| `fallback`              | Element or component to use as a fallback if you are using lazy loading                                                                                                                                                                                                                      | `null`      |
| `wrapper`               | Element or component to use as the container element                                                                                                                                                                                                                                         | `null`      |
| `playIcon`              | Element or component to use as the play icon in light mode                                                                                                                                                                                                                                   |
| `previewTabIndex`       | Set the tab index to be used on light mode                                                                                                                                                                                                                                                   | `0`         |

#### Callback props

Callback props take a function that gets fired on various player events:

| Prop                      | Description                                                                                                                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onReady`                 | Called when media is loaded and ready to play. If `playing` is set to `true`, media will play immediately                                                                                                        |
| `onStart`                 | Called when media starts playing                                                                                                                                                                                 |
| `onPlay`                  | Called when the `playing` prop is set to true                                                                                                                                                                    |
| `onPlaying`               | Called when media actually starts playing                                                                                                                                                                        |
| `onProgress`              | Called when media data is loaded                                                                                                                                                                                 |
| `onTimeUpdate`            | Called when the media's current time changes                                                                                                                                                                     |
| `onDurationChange`        | Callback containing duration of the media, in seconds                                                                                                                                                            |
| `onPause`                 | Called when media is paused                                                                                                                                                                                      |
| `onWaiting`               | Called when media is buffering and waiting for more data                                                                                                                                                         |
| `onSeeking`               | Called when media is seeking                                                                                                                                                                                     |
| `onSeeked`                | Called when media has finished seeking                                                                                                                                                                           |
| `onRateChange`            | Called when playback rate of the player changed<br />&nbsp; ◦ &nbsp;Only supported by YouTube, Vimeo ([if enabled](https://developer.vimeo.com/player/sdk/reference#playbackratechange)), Wistia, and file paths |
| `onEnded`                 | Called when media finishes playing<br />&nbsp; ◦ &nbsp;Does not fire when `loop` is set to `true`                                                                                                                |
| `onError`                 | Called when an error occurs whilst attempting to play media                                                                                                                                                      |
| `onEnterPictureInPicture` | Called when entering picture-in-picture mode                                                                                                                                                                     |
| `onLeavePictureInPicture` | Called when leaving picture-in-picture mode                                                                                                                                                                      |
