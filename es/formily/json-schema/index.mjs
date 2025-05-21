import { defineComponent, ref, computed, h } from 'vue';
import { ElSpace } from 'element-plus';
import { createForm } from '@formily/core';
import { useForm, createSchemaField } from '@formily/vue';
import { Form } from '../form/index.mjs';
import { FormLayout } from '../form-layout/index.mjs';
import { FormItem } from '../form-item/index.mjs';
import { FormGrid } from '../form-grid/index.mjs';
import { Submit } from '../submit/index.mjs';
import { Reset } from '../reset/index.mjs';
import { Input } from '../input/index.mjs';
import { InputNumber } from '../input-number/index.mjs';
import { Select } from '../select/index.mjs';
import { DatePicker } from '../date-picker/index.mjs';
import { TimePicker } from '../time-picker/index.mjs';
import { Radio } from '../radio/index.mjs';
import { Checkbox } from '../checkbox/index.mjs';
import { Switch } from '../switch/index.mjs';
import { Cascader } from '../cascader/index.mjs';
import { TreeSelect } from '../tree-select/index.mjs';
import { SelectV2 } from '../select-v2/index.mjs';
import { Slider } from '../slider/index.mjs';
import { Mention } from '../mention/index.mjs';
import Actions from './actions.mjs';

const defaultComponents = {
  Form,
  FormItem,
  FormGrid,
  FormLayout,
  Submit,
  Reset,
  Input,
  InputNumber,
  Select,
  DatePicker,
  TimePicker,
  Radio,
  Checkbox,
  Switch,
  Cascader,
  Actions,
  TreeSelect,
  SelectV2,
  Slider,
  Mention,
  Space: ElSpace
};
const staticKlass = "json-schema__form";
const JsonSchema = defineComponent({
  name: "JsonSchema",
  inheritAttrs: false,
  props: {
    iFormProps: {
      type: Object,
      default: () => ({})
    },
    components: {
      type: Object
    },
    scope: {
      type: Object
    },
    schema: {
      type: Object
    },
    forceCreateForm: {
      type: Boolean,
      default: false
    },
    iSchemaFieldVueFactoryOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { attrs, expose }) {
    const formRef = useForm();
    const containerRef = ref();
    const hasTopForm = computed(() => !props.forceCreateForm && !!formRef.value);
    const fields = computed(() => {
      var _a;
      const { components, scope, iSchemaFieldVueFactoryOptions } = props;
      return createSchemaField({
        components: {
          ...defaultComponents,
          ...components,
          ...iSchemaFieldVueFactoryOptions == null ? void 0 : iSchemaFieldVueFactoryOptions.components
        },
        scope: scope ? scope : (_a = iSchemaFieldVueFactoryOptions == null ? void 0 : iSchemaFieldVueFactoryOptions.scope) != null ? _a : {}
      });
    });
    const handleScrollIntoView = () => {
      var _a, _b, _c;
      const container = containerRef.value;
      if (container) {
        const elements = container.querySelectorAll(".fep-form-item-error-help");
        if (elements && elements.length) {
          const formItemEle = (_b = (_a = elements[0]) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.parentElement;
          (_c = formItemEle == null ? void 0 : formItemEle.scrollIntoView) == null ? void 0 : _c.call(formItemEle, {
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
          });
        }
      }
    };
    const submit = (originSubmit) => {
      return (onSubmit, scrollIntoView) => {
        var _a;
        return (_a = originSubmit(onSubmit)) == null ? void 0 : _a.catch((e) => {
          if (scrollIntoView)
            handleScrollIntoView();
          throw e;
        });
      };
    };
    const form = computed(() => {
      return hasTopForm.value ? formRef.value : createForm(props.iFormProps);
    });
    if (form.value) {
      const originSubmit = form.value.submit;
      form.value.submit = submit(originSubmit);
    }
    expose({ formInstance: form.value });
    return () => {
      const { schema } = props;
      const { SchemaField } = fields.value;
      return h(
        "div",
        {
          class: staticKlass,
          ref: containerRef
        },
        [
          h(
            Form,
            {
              colon: false,
              component: "div",
              ...attrs,
              form: form.value
            },
            {
              default: () => h(SchemaField, { schema })
            }
          )
        ]
      );
    };
  }
});

export { JsonSchema, JsonSchema as default };
//# sourceMappingURL=index.mjs.map
