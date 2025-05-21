import { ArrayTable } from './src/index.mjs';
export { ArrayTable } from './src/index.mjs';
import ArrayTableColumn from './src/column.mjs';
import { withInstall } from 'element-plus/es/utils/index';

const ElArrayTable = withInstall(ArrayTable);
const ElArrayTableColumn = withInstall(ArrayTableColumn);

export { ElArrayTable, ElArrayTableColumn, ElArrayTable as default };
//# sourceMappingURL=index.mjs.map
