import assert from 'node:assert/strict';
import test from 'node:test';
import config from '../astro.config.mjs';

// Use the installed Astro renderer and the production Markdown configuration.
// Digest verification compares full visible prose: do not turn CLI flags into
// typographic dashes or relax verification to accept changed parameters.
const processor = await config.markdown.processor.createRenderer({
  syntaxHighlight: false,
});

async function render(markdown) {
  return (await processor.render(markdown)).code;
}

test('plain prose preserves copyable double-dash CLI parameters', async () => {
  const html = await render('一位 Linux (WSL2) 用户报告，默认启动 codex app-server --managed-daemon，窗口关闭后仍驻留。');
  assert.ok(html.includes('codex app-server --managed-daemon'));
  assert.ok(!html.includes('–managed-daemon'));
});

test('plain prose preserves literal dashes, wildcards and ASCII punctuation', async () => {
  const html = await render('Literal a--b and a---b; convert_* and snake_case; "quoted" and ...');
  for (const literal of ['a--b', 'a---b', 'convert_*', 'snake_case', '...']) {
    assert.ok(html.includes(literal), `missing literal: ${literal}`);
  }
  assert.ok(!/[“”–—…]/u.test(html));
});

test('inline code remains literal', async () => {
  const html = await render('命令：`codex app-server --managed-daemon`，文件：`convert_*`。');
  assert.ok(html.includes('<code>codex app-server --managed-daemon</code>'));
  assert.ok(html.includes('<code>convert_*</code>'));
});
