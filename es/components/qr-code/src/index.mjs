import { defineComponent, computed, ref, onMounted, watch, h, mergeProps } from 'vue';
import { useNamespace } from 'element-plus';
import { useQRCode } from '@vueuse/integrations/useQRCode';
import QRCode from 'qrcode';
import { qrCodeProps, qrCodeEmits, getDefaultIconConfig } from './qr-code.mjs';
import { isDef } from '../../../utils/type.mjs';
import { DIV_TAG } from '../../../constants/tags.mjs';

const QRCodeComp = defineComponent({
  name: "QRCodeComp",
  inheritAttrs: false,
  props: qrCodeProps,
  setup(props) {
    const qrcode = useQRCode(props.text, props.options);
    const hasIcon = computed(() => !!props.iconSrc);
    const canvasRef = ref();
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
      await QRCode.toCanvas(canvas, props.text, options);
      const icon = await loadImage(props.iconSrc);
      const ctx = canvas.getContext("2d");
      const iconConfig = Object.assign(
        getDefaultIconConfig(),
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
    onMounted(() => {
      drawCanvas();
    });
    return () => {
      const { text } = props;
      const renderImage = () => {
        return text ? [h("img", { src: qrcode.value, alt: text })] : "";
      };
      const renderCanvas = () => {
        return text ? h("canvas", { ref: canvasRef }) : "";
      };
      return hasIcon.value ? renderCanvas() : renderImage();
    };
  }
});
var QrCode = defineComponent({
  name: "ElQrCode",
  inheritAttrs: false,
  props: qrCodeProps,
  emits: qrCodeEmits,
  setup(props, { attrs, slots, expose }) {
    const ns = useNamespace("qr-code");
    const containerRef = ref();
    const options = computed(() => {
      const color = {
        dark: "#000000ff",
        light: "#ffffffff"
      };
      if (isDef(props.color)) {
        color.dark = props.color;
      }
      if (isDef(props.backgroundColor)) {
        color.light = props.backgroundColor;
      }
      return {
        width: Number(props.size),
        margin: Number(props.margin),
        color,
        ...props.options
      };
    });
    const key = ref(1);
    watch(
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
      return h(
        DIV_TAG,
        {
          ...mergeProps(
            {
              class: ns.b()
            },
            attrs
          ),
          ref: containerRef
        },
        [
          h(
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

export { QrCode as default };
//# sourceMappingURL=index.mjs.map
