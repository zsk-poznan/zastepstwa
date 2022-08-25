import { AnyAbility } from './PureAbility';
import { Normalize } from './types';
import { Generics } from './RuleIndex';
export declare type GetErrorMessage = (error: ForbiddenError<AnyAbility>) => string;
export declare const getDefaultErrorMessage: GetErrorMessage;
declare const NativeError: new (message: string) => Error;
export declare class ForbiddenError<T extends AnyAbility> extends NativeError {
    readonly ability: T;
    action: Normalize<Generics<T>['abilities']>[0];
    subject: Generics<T>['abilities'][1];
    field?: string;
    subjectType: string;
    static _defaultErrorMessage: GetErrorMessage;
    static setDefaultMessage(messageOrFn: string | GetErrorMessage): void;
    static from<U extends AnyAbility>(ability: U): ForbiddenError<U>;
    private constructor();
    setMessage(message: string): this;
    throwUnlessCan(...args: Parameters<T['can']>): void;
}
export {};
