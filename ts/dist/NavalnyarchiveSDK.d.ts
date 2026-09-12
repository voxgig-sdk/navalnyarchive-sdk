import { DailyPostEntity } from './entity/DailyPostEntity';
export type * from './NavalnyarchiveTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { NavalnyarchiveEntityBase } from './NavalnyarchiveEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
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
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
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
