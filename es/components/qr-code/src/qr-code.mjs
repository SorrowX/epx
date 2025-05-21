import { buildProps, definePropType } from 'element-plus/es/utils/index';

const getDefaultIconConfig = () => {
  return {
    radius: 4,
    size: 40,
    backgroundColor: "#fff",
    padding: 4
  };
};
const qrCodeProps = buildProps({
  text: {
    type: definePropType(String),
    default: ""
  },
  options: {
    type: definePropType(Object),
    default: () => ({})
  },
  size: {
    type: definePropType([Number, String]),
    default: 120
  },
  margin: {
    type: definePropType([Number, String]),
    default: 2
  },
  color: {
    type: definePropType(String)
  },
  backgroundColor: {
    type: definePropType(String)
  },
  iconSrc: {
    type: definePropType(String)
  },
  iconConfig: {
    type: definePropType(Object),
    default: () => getDefaultIconConfig()
  }
});
const qrCodeEmits = {};

export { getDefaultIconConfig, qrCodeEmits, qrCodeProps };
//# sourceMappingURL=qr-code.mjs.map
