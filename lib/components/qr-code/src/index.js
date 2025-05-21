'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var useQRCode = require('@vueuse/integrations/useQRCode');
var QRCode = require('qrcode');
var qrCode = require('./qr-code.js');
var type = require('../../../utils/type.js');
var tags = require('../../../constants/tags.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var QRCode__default = /*#__PURE__*/_interopDefaultLegacy(QRCode);

const QRCodeComp = vue.defineComponent({
  name: "QRCodeComp",
  inheritAttrs: false,
  props: qrCode.qrCodeProps,
  setup(props) {
    const qrcode = useQRCode.useQRCode(props.text, props.options);
    const hasIcon = vue.computed(() => !!props.iconSrc);
    const canvasRef = vue.ref();
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.crossOrigin = "anonymous";
        img.onload = () => {
          return resolve(img);
        };
        img.onerror = () => {
          return reject(img);
        };
      });
    };
    const drawCanvas = async () => {
      const canvas = canvasRef.value;
      if (!canvas)
        return;
      const options = props.options;
      await QRCode__default["default"].toCanvas(canvas, props.text, options);
      const icon = await loadImage(props.iconSrc);
      const ctx = canvas.getContext("2d");
      const iconConfig = Object.assign(
        qrCode.getDefaultIconConfig(),
        props.iconConfig
      );
      const { backgroundColor, radius, size, padding } = iconConfig;
      const paddingSize = padding * 2;
      const centerX = (canvas.width - size) / 2;
      const centerY = (canvas.height - size) / 2;
      ctx.fillStyle = backgroundColor;
      ctx.beginPath();
      ctx.roundRect(centerX, centerY, size, size, radius);
      ctx.fill();
      const ratio = icon.width / icon.height;
      const scaledWidth = ratio >= 1 ? size : size * ratio;
      const scaledHeight = ratio <= 1 ? size : size / ratio;
      const left = centerX + (size - scaledWidth) / 2;
      const top = centerY + (size - scaledHeight) / 2;
      ctx.drawImage(
        icon,
        left + padding,
        top + padding,
        scaledWidth - paddingSize,
        scaledHeight - paddingSize
      );
    };
    vue.onMounted(() => {
      drawCanvas();
    });
    return () => {
      const { text } = props;
      const renderImage = () => {
        return text ? [vue.h("img", { src: qrcode.value, alt: text })] : "";
      };
      const renderCanvas = () => {
        return text ? vue.h("canvas", { ref: canvasRef }) : "";
      };
      return hasIcon.value ? renderCanvas() : renderImage();
    };
  }
});
var QrCode = vue.defineComponent({
  name: "ElQrCode",
  inheritAttrs: false,
  props: qrCode.qrCodeProps,
  emits: qrCode.qrCodeEmits,
  setup(props, { attrs, slots, expose }) {
    const ns = elementPlus.useNamespace("qr-code");
    const containerRef = vue.ref();
    const options = vue.computed(() => {
      const color = {
        dark: "#000000ff",
        light: "#ffffffff"
      };
      if (type.isDef(props.color)) {
        color.dark = props.color;
      }
      if (type.isDef(props.backgroundColor)) {
        color.light = props.backgroundColor;
      }
      return {
        width: Number(props.size),
        margin: Number(props.margin),
        color,
        ...props.options
      };
    });
    const key = vue.ref(1);
    vue.watch(
      () => [props.text, options.value],
      () => {
        key.value += 1;
      }
    );
    const downloadQRCode = (name) => {
      const hasIcon = !!props.iconSrc;
      const dom = containerRef.value.querySelector(hasIcon ? "canvas" : "img");
      if (dom) {
        const url = hasIcon ? dom.toDataURL() : dom.src;
        const a = document.createElement("a");
        a.download = name != null ? name : "QRCode.png";
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    };
    expose({
      downloadQRCode
    });
    return () => {
      return vue.h(
        tags.DIV_TAG,
        {
          ...vue.mergeProps(
            {
              class: ns.b()
            },
            attrs
          ),
          ref: containerRef
        },
        [
          vue.h(
            QRCodeComp,
            {
              text: props.text,
              options: options.value,
              iconSrc: props.iconSrc,
              iconConfig: props.iconConfig,
              key: key.value
            },
            slots
          )
        ]
      );
    };
  }
});

exports["default"] = QrCode;
//# sourceMappingURL=index.js.map
