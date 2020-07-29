import {
  onCommand
} from 'jinge-design/src/core';
import {
  dialog
} from 'jinge-design/src/ui';

onCommand('import', async () => {
  await dialog({
    title: { zh_cn: '导入 Sketch 文件' },
    page: 'index.html',
    width: 300,
    height: 300
  });
});