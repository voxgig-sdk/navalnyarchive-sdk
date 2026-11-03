import { DailyPostEntity } from './entity/DailyPostEntity';
export type * from './NavalnyarchiveTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { NavalnyarchiveEntityBase } from './NavalnyarchiveEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class NavalnyarchiveSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    DailyPost(entopts?: Record<string, any>): DailyPostEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): NavalnyarchiveSDK;
    tester(testopts?: any, sdkopts?: any): NavalnyarchiveSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof NavalnyarchiveSDK;
export { stdutil, config, BaseFeature, NavalnyarchiveEntityBase, NavalnyarchiveSDK, SDK, };
export type { DirectResult };
