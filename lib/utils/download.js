'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var elementPlus = require('element-plus');
var useAxios = require('@vueuse/integrations/useAxios');

const download = (options) => {
  const { url, params, fileName, instance, ...other } = options;
  const { execute } = instance ? useAxios.useAxios(instance) : useAxios.useAxios();
  return execute(url, {
    method: "get",
    responseType: "blob",
    params,
    timeout: 1e3 * 60 * 5,
    ...other
  }).then((response) => {
    downloadBlobFile(response.data.value, fileName);
  });
};
function downloadBlobFile(blob, fileName) {
  if (blob && blob.size === 0) {
    elementPlus.ElMessage.error("Download Error!");
    return;
  }
  const url = window.URL.createObjectURL(
    blob instanceof Blob ? blob : new Blob([blob])
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  window.setTimeout(() => {
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  }, 0);
}

exports.download = download;
exports.downloadBlobFile = downloadBlobFile;
//# sourceMappingURL=download.js.map
