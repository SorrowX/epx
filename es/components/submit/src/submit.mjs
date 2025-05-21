import { buildProps, definePropType } from 'element-plus/es/utils/index';

const submitProps = buildProps({
  onClick: {
    type: definePropType(Function)
  },
  onSubmit: {
    type: definePropType(Function)
  },
  onSubmitSuccess: {
    type: definePropType(Function)
  },
  onSubmitFailed: {
    type: definePropType(Function)
  }
});
const submitEmits = {};

export { submitEmits, submitProps };
//# sourceMappingURL=submit.mjs.map
