'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var core = require('@formily/core');
var vue$1 = require('@formily/vue');
var index = require('../form/index.js');
var index$3 = require('../form-layout/index.js');
var index$1 = require('../form-item/index.js');
var index$2 = require('../form-grid/index.js');
var index$4 = require('../submit/index.js');
var index$5 = require('../reset/index.js');
var index$6 = require('../input/index.js');
var index$7 = require('../input-number/index.js');
var index$8 = require('../select/index.js');
var index$9 = require('../date-picker/index.js');
var index$a = require('../time-picker/index.js');
var index$b = require('../radio/index.js');
var index$c = require('../checkbox/index.js');
var index$d = require('../switch/index.js');
var index$e = require('../cascader/index.js');
var index$f = require('../tree-select/index.js');
var index$g = require('../select-v2/index.js');
var index$h = require('../slider/index.js');
var index$i = require('../mention/index.js');
var actions = require('./actions.js');

const defaultComponents = {
  Form: index.Form,
  FormItem: index$1.FormItem,
  FormGrid: index$2.FormGrid,
  FormLayout: index$3.FormLayout,
  Submit: index$4.Submit,
  Reset: index$5.Reset,
  Input: index$6.Input,
  InputNumber: index$7.InputNumber,
  Select: index$8.Select,
  DatePicker: index$9.DatePicker,
  TimePicker: index$a.TimePicker,
  Radio: index$b.Radio,
  Checkbox: index$c.Checkbox,
  Switch: index$d.Switch,
  Cascader: index$e.Cascader,
  Actions: actions["default"],
  TreeSelect: index$f.TreeSelect,
  SelectV2: index$g.SelectV2,
  Slider: index$h.Slider,
  Mention: index$i.Mention,
  Space: elementPlus.ElSpace
};
const staticKlass = "json-schema__form";
const JsonSchema = vue.defineComponent({
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
    const formRef = vue$1.useForm();
    const containerRef = vue.ref();
    const hasTopForm = vue.computed(() => !props.forceCreateForm && !!formRef.value);
    const fields = vue.computed(() => {
      var _a;
      const { components, scope, iSchemaFieldVueFactoryOptions } = props;
      return vue$1.createSchemaField({
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
    const form = vue.computed(() => {
      return hasTopForm.value ? formRef.value : core.createForm(props.iFormProps);
    });
    if (form.value) {
      const originSubmit = form.value.submit;
      form.value.submit = submit(originSubmit);
    }
    expose({ formInstance: form.value });
    return () => {
      const { schema } = props;
      const { SchemaField } = fields.value;
      return vue.h(
        "div",
        {
          class: staticKlass,
          ref: containerRef
        },
        [
          vue.h(
            index.Form,
            {
              colon: false,
              component: "div",
              ...attrs,
              form: form.value
            },
            {
              default: () => vue.h(SchemaField, { schema })
            }
          )
        ]
      );
    };
  }
});

exports.JsonSchema = JsonSchema;
exports["default"] = JsonSchema;
//# sourceMappingURL=index.js.map
