import { NavalnyarchiveEntityBase } from '../NavalnyarchiveEntityBase';
import type { NavalnyarchiveSDK } from '../NavalnyarchiveSDK';
import type { Control } from '../types';
import type { DailyPost, DailyPostListMatch } from '../NavalnyarchiveTypes';
declare class DailyPostEntity extends NavalnyarchiveEntityBase<DailyPost> {
    constructor(client: NavalnyarchiveSDK, entopts: any);
    make(this: DailyPostEntity): DailyPostEntity;
    list(this: any, reqmatch?: DailyPostListMatch, ctrl?: Control): Promise<DailyPostEntity[]>;
}
export { DailyPostEntity };
