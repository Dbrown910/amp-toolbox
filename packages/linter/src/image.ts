import { imageSize } from "image-size";
import fetch, { RequestInit } from "node-fetch";

async function probe(url: string | undefined, options: RequestInit) {
  if (url === undefined) url = "";
  const response = await fetch(url, options);
  const buffer = await response.buffer();
  const image = imageSize(buffer);
  return image;
}

export { probe };
