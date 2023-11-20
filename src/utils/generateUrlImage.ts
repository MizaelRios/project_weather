export function generateImageUrl(UrlIcon: string) {
    const url = new URL(`https://${UrlIcon}`);
    return `${url}`;
  }
  