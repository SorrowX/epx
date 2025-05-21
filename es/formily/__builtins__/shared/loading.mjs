import { ElLoading } from 'element-plus';

const loading = async (loadingText = "Loading...", processor) => {
  let loadingInstance = null;
  const loading2 = setTimeout(() => {
    loadingInstance = ElLoading.service({
      text: loadingText,
      background: "transparent"
    });
  }, 100);
  try {
    return await processor();
  } finally {
    loadingInstance == null ? void 0 : loadingInstance.close();
    clearTimeout(loading2);
  }
};

export { loading };
//# sourceMappingURL=loading.mjs.map
