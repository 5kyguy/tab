import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Link, Navigate, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { GITHUB } from "../brand";
import { Mermaid } from "../components/Mermaid";
import { TabMark, Wordmark } from "../components/Wordmark";
import {
  docs,
  getDoc,
  sections,
  slugify,
  tocFromMarkdown,
  type TocItem,
} from "../docs/catalog";

export function Docs() {
  const { slug = "introduction" } = useParams();
  if (!docs.some((d) => d.slug === slug)) {
    return <Navigate to="/docs/introduction" replace />;
  }
  const doc = getDoc(slug);
  const toc = tocFromMarkdown(doc.body);

  return (
    <div className="docs">
      <DocsSidebar current={slug} />
      <div className="docs-main">
        <div className="docs-content">
          <article className="docs-body">
            <Markdown remarkPlugins={[remarkGfm]} components={md}>
              {doc.body}
            </Markdown>
          </article>
          <DocsToc items={toc} />
        </div>
      </div>
    </div>
  );
}

function DocsSidebar({ current }: { current: string }) {
  return (
    <aside className="docs-side">
      <div className="docs-side-brand">
        <Link to="/" className="docs-brand" aria-label="Tab. home">
          <TabMark tone="stamp" />
          <Wordmark size="docs" />
        </Link>
        <p className="docs-kicker">Solana agent runtime</p>
      </div>
      <nav className="docs-side-nav" aria-label="Docs">
        {sections.map((section) => (
          <div key={section.id} className="docs-group">
            <p className="docs-group-title">{section.title}</p>
            <ul>
              {docs
                .filter((d) => d.section === section.id)
                .map((d) => (
                  <li key={d.slug}>
                    <Link
                      to={`/docs/${d.slug}`}
                      className={d.slug === current ? "is-active" : undefined}
                    >
                      {d.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="docs-side-foot">
        <a href={GITHUB} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </aside>
  );
}

function DocsToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 1] },
    );

    for (const el of headings) observer.observe(el);
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="docs-toc" aria-label="On this page">
      <p className="docs-toc-title">On this page</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={item.id === active ? "is-active" : undefined}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function headingId(children: ReactNode): string {
  const text = flattenText(children);
  return slugify(text);
}

function flattenText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(flattenText).join("");
  if (typeof node === "object" && "props" in node) {
    return flattenText(
      (node as { props: { children?: ReactNode } }).props.children,
    );
  }
  return "";
}

const md = {
  h2: ({ children }: { children?: ReactNode }) => {
    const id = headingId(children);
    return <h2 id={id}>{children}</h2>;
  },
  a: ({ href, children }: { href?: string; children?: ReactNode }) => {
    if (href?.startsWith("/")) {
      return <Link to={href}>{children}</Link>;
    }
    if (href?.startsWith("./")) {
      const slug = href.replace("./", "").replace(/\.md$/, "");
      return <Link to={`/docs/${slug}`}>{children}</Link>;
    }
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  },
  pre: ({ children }: { children?: ReactNode }) => {
    return <>{children}</>;
  },
  code: ({
    className,
    children,
  }: {
    className?: string;
    children?: ReactNode;
  }) => {
    const text = String(children).replace(/\n$/, "");
    if (className === "language-mermaid") {
      return <Mermaid chart={text} />;
    }
    if (className) {
      return (
        <pre>
          <code className={className}>{children}</code>
        </pre>
      );
    }
    return <code>{children}</code>;
  },
};
