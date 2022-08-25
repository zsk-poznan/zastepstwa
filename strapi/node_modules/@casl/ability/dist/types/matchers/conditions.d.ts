import { createFactory, BuildMongoQuery, DefaultOperators } from '@ucast/mongo2js';
import { ConditionsMatcher, AnyObject } from '../types';
import { Container, GenericFactory } from '../hkt';
declare const defaultInstructions: {
    $eq: import("@ucast/mongo2js").FieldInstruction<unknown, import("@ucast/mongo2js").FieldParsingContext>;
    $ne: import("@ucast/mongo2js").FieldInstruction<unknown, import("@ucast/mongo2js").FieldParsingContext>;
    $lt: import("@ucast/mongo2js").FieldInstruction<string | number | Date, import("@ucast/mongo2js").FieldParsingContext>;
    $lte: import("@ucast/mongo2js").FieldInstruction<string | number | Date, import("@ucast/mongo2js").FieldParsingContext>;
    $gt: import("@ucast/mongo2js").FieldInstruction<string | number | Date, import("@ucast/mongo2js").FieldParsingContext>;
    $gte: import("@ucast/mongo2js").FieldInstruction<string | number | Date, import("@ucast/mongo2js").FieldParsingContext>;
    $in: import("@ucast/mongo2js").FieldInstruction<unknown[], import("@ucast/mongo2js").FieldParsingContext>;
    $nin: import("@ucast/mongo2js").FieldInstruction<unknown[], import("@ucast/mongo2js").FieldParsingContext>;
    $all: import("@ucast/mongo2js").FieldInstruction<unknown[], import("@ucast/mongo2js").FieldParsingContext>;
    $size: import("@ucast/mongo2js").FieldInstruction<number, import("@ucast/mongo2js").FieldParsingContext>;
    $regex: import("@ucast/mongo2js").FieldInstruction<string | RegExp, import("@ucast/mongo2js").RegExpFieldContext>;
    $options: import("@ucast/mongo2js").FieldInstruction<unknown, import("@ucast/mongo2js").FieldParsingContext>;
    $elemMatch: import("@ucast/mongo2js").FieldInstruction<import("@ucast/mongo2js").MongoQueryOperators<any> | ({
        [x: string]: any;
    } & import("@ucast/mongo2js").MongoQueryTopLevelOperators<any>), import("@ucast/mongo2js").ParsingContext<import("@ucast/mongo2js").FieldParsingContext & {
        query: {};
        hasOperators<T>(value: unknown): value is T;
    }>>;
    $exists: import("@ucast/mongo2js").FieldInstruction<boolean, import("@ucast/mongo2js").FieldParsingContext>;
};
interface MongoQueryFactory extends GenericFactory {
    produce: MongoQuery<this[0]>;
}
declare type MergeUnion<T extends {}, Keys extends keyof T = keyof T> = {
    [K in Keys]: T[K];
};
export declare type MongoQuery<T = AnyObject> = BuildMongoQuery<MergeUnion<T>, {
    toplevel: {};
    field: Pick<DefaultOperators<MergeUnion<T>>['field'], keyof typeof defaultInstructions>;
}> & Container<MongoQueryFactory>;
declare type MongoQueryMatcherFactory = (...args: Partial<Parameters<typeof createFactory>>) => ConditionsMatcher<MongoQuery>;
export declare const buildMongoQueryMatcher: MongoQueryMatcherFactory;
export declare const mongoQueryMatcher: import("@ucast/mongo2js").Filter;
export type { MongoQueryFieldOperators, MongoQueryTopLevelOperators, MongoQueryOperators, } from '@ucast/mongo2js';
