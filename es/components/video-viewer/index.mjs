import VideoViewer from './src/video-viewer2.mjs';
export { videoViewerEmits, videoViewerProps } from './src/video-viewer.mjs';
import { withInstall } from 'element-plus/es/utils/index';

const ElVideoViewer = withInstall(VideoViewer);

export { ElVideoViewer, ElVideoViewer as default };
//# sourceMappingURL=index.mjs.map
