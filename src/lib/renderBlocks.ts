function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Convert **bold** segments to <b> after escaping. */
function formatInline(text: string): string {
  const escaped = escapeHtml(text);
  return escaped.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
}

/**
 * Render guide content blocks from JSON string[].
 * Supports: ## heading → h2, - item → li (grouped), otherwise → p.
 * Inline **bold** → <b>. No react-markdown.
 */
export function renderBlocks(blocks: string[]): string {
  const html: string[] = [];
  let listOpen = false;

  const closeList = () => {
    if (listOpen) {
      html.push("</ul>");
      listOpen = false;
    }
  };

  for (const raw of blocks) {
    const line = raw.trim();
    if (!line) {
      closeList();
      continue;
    }

    if (line.startsWith("## ")) {
      closeList();
      const title = formatInline(line.slice(3).trim());
      html.push(
        `<h2 class="mt-8 mb-3 text-xl font-semibold text-fg">${title}</h2>`
      );
      continue;
    }

    if (line.startsWith("- ")) {
      if (!listOpen) {
        html.push('<ul class="my-3 list-disc space-y-1 pl-5 text-muted">');
        listOpen = true;
      }
      html.push(`<li>${formatInline(line.slice(2).trim())}</li>`);
      continue;
    }

    closeList();
    html.push(
      `<p class="my-3 leading-relaxed text-muted">${formatInline(line)}</p>`
    );
  }

  closeList();
  return html.join("\n");
}
