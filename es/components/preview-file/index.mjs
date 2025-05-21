import PreviewFile from './src/preview-file.mjs';
export { previewFileEmits, previewFileProps } from './src/preview-file2.mjs';
export { AUDIO_TYPE, EXCEL_TYPE, IMAGE_TYPE, MARKDOWN_TYPE, PDF_TYPE, PPT_TYPE, PRESET_FILE_ICONS, UNKNOWN_TYPE, VIDEO_TYPE, WORD_TYPE, ZIP_TYPE, getIconState, matchExt, parseFileName, parseSize } from './src/helper.mjs';
import { withInstall } from 'element-plus/es/utils/index';

const ElPreviewFile = withInstall(PreviewFile);

export { ElPreviewFile, ElPreviewFile as default };
//# sourceMappingURL=index.mjs.map
