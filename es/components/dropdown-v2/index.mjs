import DropdownV2 from './src/index.mjs';
import DropdownV2Panel from './src/panel.mjs';
export { dropdownV2Emits, dropdownV2Props } from './src/dropdown-v2.mjs';
import { withInstall } from 'element-plus/es/utils/index';

const ElDropdownV2Panel = withInstall(DropdownV2Panel);
const ElDropdownV2 = withInstall(DropdownV2);

export { ElDropdownV2, ElDropdownV2Panel, ElDropdownV2 as default };
//# sourceMappingURL=index.mjs.map
