import { inject } from 'vue';
import { formItemContextKey, formContextKey } from 'element-plus';

const useField = () => inject(formItemContextKey);
const useForm = () => inject(formContextKey);

export { useField, useForm };
//# sourceMappingURL=index.mjs.map
