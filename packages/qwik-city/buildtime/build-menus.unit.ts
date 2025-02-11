import { equal, ok } from 'uvu/assert';
import { testAppSuite } from './utils/test-suite';

const test = testAppSuite('Build Menu');

test('menus found', ({ menus }) => {
  equal(menus.length, 1);
});

test('docs menu', ({ menus }) => {
  const docsMenu = menus.find((r) => r.pathname === '/docs')!;
  ok(docsMenu, 'found docs menu');
  equal(docsMenu.pathname, '/docs');
});

test.run();
