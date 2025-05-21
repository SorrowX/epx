import * as index from '../../icons-vue/index.mjs';

const {
  ImageFile,
  MarkdownFile,
  PdfFile,
  PptFile,
  WordFile,
  ZipFile,
  VideoFile,
  AudioFile,
  ExcelFile,
  UnknownFile
} = index;
const DEFAULT_ICON_COLOR = "#8c8c8c";
const DEFAULT_ICON_SIZE = 32;
const IMG_EXTS = ["png", "jpg", "jpeg", "gif", "bmp", "webp", "svg"];
const EXCEL_TYPE = "excel";
const IMAGE_TYPE = "image";
const MARKDOWN_TYPE = "markdown";
const PDF_TYPE = "pdf";
const PPT_TYPE = "ppt";
const WORD_TYPE = "word";
const ZIP_TYPE = "zip";
const VIDEO_TYPE = "video";
const AUDIO_TYPE = "audio";
const UNKNOWN_TYPE = "unknown";
const PRESET_FILE_ICONS = [
  {
    type: EXCEL_TYPE,
    icon: ExcelFile,
    iconSize: DEFAULT_ICON_SIZE,
    iconColor: "#22b35e",
    ext: ["xlsx", "xls"]
  },
  {
    type: IMAGE_TYPE,
    icon: ImageFile,
    iconSize: DEFAULT_ICON_SIZE,
    iconColor: DEFAULT_ICON_COLOR,
    ext: IMG_EXTS
  },
  {
    type: MARKDOWN_TYPE,
    icon: MarkdownFile,
    iconSize: DEFAULT_ICON_SIZE,
    iconColor: "#393f4d",
    ext: ["md", "mdx"]
  },
  {
    type: PDF_TYPE,
    icon: PdfFile,
    iconSize: DEFAULT_ICON_SIZE,
    iconColor: "#ff4d4f",
    ext: ["pdf"]
  },
  {
    type: PPT_TYPE,
    icon: PptFile,
    iconSize: DEFAULT_ICON_SIZE,
    iconColor: "#ff6e31",
    ext: ["ppt", "pptx"]
  },
  {
    type: WORD_TYPE,
    icon: WordFile,
    iconSize: DEFAULT_ICON_SIZE,
    iconColor: "#1677ff",
    ext: ["doc", "docx"]
  },
  {
    type: ZIP_TYPE,
    icon: ZipFile,
    iconSize: DEFAULT_ICON_SIZE,
    iconColor: "#fab714",
    ext: ["zip", "rar", "7z", "tar", "gz"]
  },
  {
    type: VIDEO_TYPE,
    icon: VideoFile,
    iconSize: 28,
    iconColor: "#ff4d4f",
    ext: ["mp4", "avi", "mov", "wmv", "flv", "mkv"]
  },
  {
    type: AUDIO_TYPE,
    icon: AudioFile,
    iconSize: 28,
    iconColor: "#ffdc04",
    ext: ["mp3", "wav", "flac", "ape", "aac", "ogg"]
  }
];
const parseSize = (size = 0) => {
  let retSize = size;
  const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
  let unitIndex = 0;
  while (retSize >= 1024 && unitIndex < units.length - 1) {
    retSize /= 1024;
    unitIndex++;
  }
  return `${retSize.toFixed(0)} ${units[unitIndex]}`;
};
const parseFileName = (str = "") => {
  const match = str.match(/^(.*)\.[^.]+$/);
  return {
    fileName: match ? match[1] : str,
    fileNameSuffix: match ? str.slice(match[1].length) : ""
  };
};
const matchExt = (suffix, ext) => {
  return ext.some((e) => suffix.toLowerCase() === `.${e}`);
};
const getIconState = (fileNameSuffix) => {
  var _a, _b, _c, _d;
  const presetIconState = PRESET_FILE_ICONS.find(
    (icon) => matchExt(fileNameSuffix, icon.ext)
  );
  return {
    type: (_a = presetIconState == null ? void 0 : presetIconState.type) != null ? _a : UNKNOWN_TYPE,
    icon: (_b = presetIconState == null ? void 0 : presetIconState.icon) != null ? _b : UnknownFile,
    iconColor: (_c = presetIconState == null ? void 0 : presetIconState.iconColor) != null ? _c : DEFAULT_ICON_COLOR,
    iconSize: (_d = presetIconState == null ? void 0 : presetIconState.iconSize) != null ? _d : DEFAULT_ICON_SIZE
  };
};

export { AUDIO_TYPE, EXCEL_TYPE, IMAGE_TYPE, MARKDOWN_TYPE, PDF_TYPE, PPT_TYPE, PRESET_FILE_ICONS, UNKNOWN_TYPE, VIDEO_TYPE, WORD_TYPE, ZIP_TYPE, getIconState, matchExt, parseFileName, parseSize };
//# sourceMappingURL=helper.mjs.map
