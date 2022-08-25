import { AnyMongoAbility } from './Ability';
import { AnyAbility, AbilityOptionsOf } from './PureAbility';
import { RawRuleOf, Generics } from './RuleIndex';
import { ExtractSubjectType as E, AbilityTuple, SubjectType, TaggedInterface, Normalize, AnyObject, AnyClass } from './types';
import { ProduceGeneric } from './hkt';
declare class RuleBuilder<T extends AnyAbility> {
    _rule: RawRuleOf<T>;
    constructor(rule: RawRuleOf<T>);
    because(reason: string): this;
}
declare type InstanceOf<T extends AnyAbility, S extends SubjectType> = S extends AnyClass<infer R> ? R : S extends string ? Exclude<Normalize<Generics<T>['abilities']>[1], SubjectType> extends TaggedInterface<string> ? Extract<Normalize<Generics<T>['abilities']>[1], TaggedInterface<S>> : AnyObject : never;
declare type ConditionsOf<T extends AnyAbility, I extends {}> = ProduceGeneric<Generics<T>['conditions'], I>;
declare type ActionFrom<T extends AbilityTuple, S extends SubjectType> = T extends any ? S extends T[1] ? T[0] : never : never;
declare type ActionOf<T extends AnyAbility, S extends SubjectType> = ActionFrom<Generics<T>['abilities'], S>;
declare type SubjectTypeOf<T extends AnyAbility> = E<Normalize<Generics<T>['abilities']>[1]>;
declare type SimpleCanParams<T extends AnyAbility> = Parameters<(action: Generics<T>['abilities'] | Generics<T>['abilities'][]) => 0>;
declare type BuilderCanParameters<S extends SubjectType, I extends InstanceOf<T, S>, T extends AnyAbility> = Generics<T>['abilities'] extends AbilityTuple ? Parameters<(action: ActionOf<T, S> | ActionOf<T, S>[], subject: S | S[], conditions?: ConditionsOf<T, I>) => 0> : SimpleCanParams<T>;
declare type BuilderCanParametersWithFields<S extends SubjectType, I extends InstanceOf<T, S>, F extends string, T extends AnyAbility> = Generics<T>['abilities'] extends AbilityTuple ? Parameters<(action: ActionOf<T, S> | ActionOf<T, S>[], subject: S | S[], fields?: F | F[], conditions?: ConditionsOf<T, I>) => 0> : SimpleCanParams<T>;
declare type Keys<T> = string & keyof T;
export declare class AbilityBuilder<T extends AnyAbility> {
    rules: RawRuleOf<T>[];
    private _AbilityType;
    constructor(AbilityType: AnyClass<T>);
    can<I extends InstanceOf<T, S>, S extends SubjectTypeOf<T> = SubjectTypeOf<T>>(...args: BuilderCanParameters<S, I, T>): RuleBuilder<T>;
    can<I extends InstanceOf<T, S>, F extends string = Keys<I>, S extends SubjectTypeOf<T> = SubjectTypeOf<T>>(...args: BuilderCanParametersWithFields<S, I, F | Keys<I>, T>): RuleBuilder<T>;
    cannot<I extends InstanceOf<T, S>, S extends SubjectTypeOf<T> = SubjectTypeOf<T>>(...args: BuilderCanParameters<S, I, T>): RuleBuilder<T>;
    cannot<I extends InstanceOf<T, S>, F extends string = Keys<I>, S extends SubjectTypeOf<T> = SubjectTypeOf<T>>(...args: BuilderCanParametersWithFields<S, I, F | Keys<I>, T>): RuleBuilder<T>;
    build(options?: AbilityOptionsOf<T>): T;
}
declare type DSL<T extends AnyAbility, R> = (can: AbilityBuilder<T>['can'], cannot: AbilityBuilder<T>['cannot']) => R;
export declare function defineAbility<T extends AnyMongoAbility>(define: DSL<T, Promise<void>>, options?: AbilityOptionsOf<T>): Promise<T>;
export declare function defineAbility<T extends AnyMongoAbility>(define: DSL<T, void>, options?: AbilityOptionsOf<T>): T;
export {};
