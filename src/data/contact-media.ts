export type ContactMediaItem =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "youtube";
      youtubeId: string;
      title: string;
      poster?: string;
    };

export const contactMediaItems: readonly ContactMediaItem[] = [
  {
    type: "image",
    src: "/launchpads1.jpg",
    alt: "Life moment outdoors",
  },
  {
    type: "image",
    src: "/monitorsysua.jpg",
    alt: "Working setup and screens",
  },
  {
    type: "youtube",
    youtubeId: "M7lc1UVf-VE",
    title: "Sample YouTube video",
  },
  {
    type: "image",
    src: "/me.jpg",
    alt: "Portrait photo",
  },
];

export function getYouTubeEmbedUrl(youtubeId: string) {
  return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
}

export function getYouTubePosterUrl(youtubeId: string) {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}
