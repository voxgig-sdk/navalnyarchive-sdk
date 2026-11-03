import { NavalnyarchiveEntityBase } from '../NavalnyarchiveEntityBase';
import type { NavalnyarchiveSDK } from '../NavalnyarchiveSDK';
import type { Control } from '../types';
import type { DailyPost, DailyPostLoadMatch } from '../NavalnyarchiveTypes';
declare class DailyPostEntity extends NavalnyarchiveEntityBase<DailyPost> {
    constructor(client: NavalnyarchiveSDK, entopts: any);
    make(this: DailyPostEntity): DailyPostEntity;
    load(this: any, reqmatch?: DailyPostLoadMatch, ctrl?: Control): Promise<DailyPostEntity>;
}
export { DailyPostEntity };
