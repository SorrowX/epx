import Editor from './src/editor2.mjs';
import EditorToolbar from './src/toolbar/index.mjs';
export { editorEmits, editorProps } from './src/editor.mjs';
export { filterOption, getTextContent } from './src/helper.mjs';
import { withInstall } from 'element-plus/es/utils/index';

const ElEditor = withInstall(Editor);
const ElEditorToolbar = withInstall(EditorToolbar);

export { ElEditor, ElEditorToolbar, ElEditor as default };
//# sourceMappingURL=index.mjs.map
