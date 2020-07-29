import {
  getLocale, getTheme
} from 'jinge-design/core';
import {
  loadScript, loadStyle
} from 'jinge-design/util';

(async () => {
  await Promise.all([
    loadStyle('theme.' + getTheme() + '.css'),
    loadStyle('app.css'),
    loadScript('app.' + getLocale() + '.js'),
    loadScript('app.js')
  ]);
})().catch(ex => {
  document.body.innerHTML = ex.toString();
});
