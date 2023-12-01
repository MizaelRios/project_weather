import { heroImages } from "@/constants";

export function returnImageHero(condition?: string, icon?: string) {
  const heroImageKey = heroImages.find(item => item.image.includes(condition ?? "") && item.isDay === checkDay(icon) || null);
  return heroImageKey ? heroImageKey.src : "";
};

export function checkDay(icon?: string): boolean {
  return icon?.includes("/day/") ?? false;
};
