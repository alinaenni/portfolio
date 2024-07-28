import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
    return `/images/${asset}`;
  }

const photos = [
  { asset: "glove.jpeg", width: 800, height: 800 },
  { asset: "mitts1.jpg", width: 800, height: 800 },
  { asset: "socks1.jpeg", width: 1000, height: 800 },
  { asset: "socks2.jpeg", width: 1100, height: 800 },
  { asset: "dragon.jpeg", width: 800, height: 800 },
].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetLink(asset, breakpoint),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }) as Photo,
);

export default photos;