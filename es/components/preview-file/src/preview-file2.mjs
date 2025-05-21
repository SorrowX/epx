import { buildProps, definePropType, mutable } from 'element-plus/es/utils/index';

const previewFileProps = buildProps({
  fileList: {
    type: definePropType(Array),
    default: () => mutable([])
  }
});
const previewFileEmits = {
  click: (item) => !!item
};

export { previewFileEmits, previewFileProps };
//# sourceMappingURL=preview-file2.mjs.map
