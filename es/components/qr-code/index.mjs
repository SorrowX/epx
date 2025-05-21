import QrCode from './src/index.mjs';
export { getDefaultIconConfig, qrCodeEmits, qrCodeProps } from './src/qr-code.mjs';
import { withInstall } from 'element-plus/es/utils/index';

const ElQrCode = withInstall(QrCode);

export { ElQrCode, ElQrCode as default };
//# sourceMappingURL=index.mjs.map
