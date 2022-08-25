import { PureAbility, AbilityOptions } from './PureAbility';
import { RawRuleFrom } from './RawRule';
import { AbilityTuple } from './types';
import { MongoQuery } from './matchers/conditions';
import { Public } from './RuleIndex';
export declare class Ability<A extends AbilityTuple = AbilityTuple, C extends MongoQuery = MongoQuery> extends PureAbility<A, C> {
    constructor(rules?: RawRuleFrom<A, C>[], options?: AbilityOptions<A, C>);
}
export interface AnyMongoAbility extends Public<Ability<any, MongoQuery>> {
}
