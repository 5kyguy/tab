export type DocMeta = {
  slug: string;
  title: string;
  section: string;
};

export const sections: { id: string; title: string }[] = [
  { id: "getting-started", title: "Getting Started" },
  { id: "core-concepts", title: "Core Concepts" },
];

export const docs: DocMeta[] = [
  { slug: "introduction", title: "Introduction", section: "getting-started" },
  { slug: "architecture", title: "Architecture", section: "getting-started" },
  { slug: "channels", title: "Spend Channels", section: "core-concepts" },
  { slug: "allowlisting", title: "Allowlisting", section: "core-concepts" },
  { slug: "session-keys", title: "Session Keys", section: "core-concepts" },
  { slug: "freeze", title: "Freeze", section: "core-concepts" },
];

const files = import.meta.glob("../../../../docs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function bodyFor(slug: string): string {
  const entry = Object.entries(files).find(([path]) =>
    path.endsWith(`/${slug}.md`),
  );
  return entry?.[1] ?? "# Not found\n\nThat page is not in the docs yet.";
}

export function getDoc(slug: string) {
  const meta = docs.find((d) => d.slug === slug) ?? docs[0];
  return { ...meta, body: bodyFor(meta.slug) };
}

export type TocItem = { id: string; text: string };

/** Pull ## headings for the on-page TOC (EigenCloud-style right nav). */
export function tocFromMarkdown(body: string): TocItem[] {
  const items: TocItem[] = [];
  for (const line of body.split("\n")) {
    const match = /^##\s+(.+)$/.exec(line);
    if (!match) continue;
    const text = match[1].replace(/\*\*/g, "").trim();
    items.push({ id: slugify(text), text });
  }
  return items;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
