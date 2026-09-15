import en from "./en";
import id from "./id";
import { profile, projectAssets } from "./shared";
import type { Lang, Project } from "./types";

export type { Lang, Project } from "./types";
export { profile, projectAssets };

export const DEFAULT_LANG: Lang = "en";
export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "id", label: "ID" },
];

const locales = { en, id };

export function toLang(value: string | undefined): Lang {
  return value === "id" ? "id" : DEFAULT_LANG;
}

export function getContent(lang: Lang) {
  const content = locales[lang];

  const projects: Project[] = content.projects.map((text) => {
    const assets = projectAssets.find((a) => a.slug === text.slug);
    if (!assets) {
      throw new Error(`Project "${text.slug}" ada di ${lang}.ts tapi tidak ada di shared.ts`);
    }
    return { ...text, ...assets };
  });

  for (const asset of projectAssets) {
    if (!content.projects.some((p) => p.slug === asset.slug)) {
      throw new Error(`Project "${asset.slug}" ada di shared.ts tapi tidak ada di ${lang}.ts`);
    }
  }

  return { ...content, profile, projects };
}
