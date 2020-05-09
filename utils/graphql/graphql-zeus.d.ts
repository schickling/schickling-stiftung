/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["Collection"]: AliasType<{
	name?:true,
	schemaJSON?:true,
	collectionViews?:ValueTypes["CollectionView"],
collectionView?: [{	collectionViewName:string},ValueTypes["CollectionView"]]
		__typename?: true
}>;
	["CollectionItem"]: AliasType<{
	id?:true,
	title?:true,
	properties?:ValueTypes["CollectionItemProperties"],
	blocks?:true,
	textContent?:true
		__typename?: true
}>;
	["CollectionItemProperties"]: AliasType<{		["...on CollectionItemProperties_WERKE_BILDER"] : ValueTypes["CollectionItemProperties_WERKE_BILDER"]
		__typename?: true
}>;
	["CollectionItemProperties_WERKE_BILDER"]: AliasType<{
	image?:true,
	werkverzeichnis?:true,
	size?:true,
	technique?:true,
	date?:true,
	format?:true,
	name?:true
		__typename?: true
}>;
	["CollectionView"]: AliasType<{
	name?:true,
	items?:ValueTypes["CollectionItem"]
		__typename?: true
}>;
	["JSON"]:unknown;
	["Query"]: AliasType<{
collection?: [{	collectionName:string},ValueTypes["Collection"]]
		__typename?: true
}>
  }

export type PartialObjects = {
    ["Collection"]: {
		__typename?: "Collection";
			name?:string,
			schemaJSON?:PartialObjects["JSON"],
			collectionViews?:PartialObjects["CollectionView"][],
			collectionView?:PartialObjects["CollectionView"]
	},
	["CollectionItem"]: {
		__typename?: "CollectionItem";
			id?:string,
			title?:string,
			properties?:PartialObjects["CollectionItemProperties"],
			blocks?:PartialObjects["JSON"],
			textContent?:string[]
	},
	["CollectionItemProperties"]: PartialObjects["CollectionItemProperties_WERKE_BILDER"],
	["CollectionItemProperties_WERKE_BILDER"]: {
		__typename?: "CollectionItemProperties_WERKE_BILDER";
			image?:string,
			werkverzeichnis?:PartialObjects["JSON"],
			size?:PartialObjects["JSON"],
			technique?:PartialObjects["JSON"],
			date?:PartialObjects["JSON"],
			format?:PartialObjects["JSON"],
			name?:PartialObjects["JSON"]
	},
	["CollectionView"]: {
		__typename?: "CollectionView";
			name?:string,
			items?:PartialObjects["CollectionItem"][]
	},
	["JSON"]:any,
	["Query"]: {
		__typename?: "Query";
			collection?:PartialObjects["Collection"]
	}
  }

export type Collection = {
	__typename?: "Collection",
	name:string,
	schemaJSON:JSON,
	collectionViews:CollectionView[],
	collectionView:CollectionView
}

export type CollectionItem = {
	__typename?: "CollectionItem",
	id:string,
	title:string,
	properties:CollectionItemProperties,
	blocks:JSON,
	textContent:string[]
}

export type CollectionItemProperties = {
	__union:CollectionItemProperties_WERKE_BILDER;
	__resolve:{
		['...on CollectionItemProperties_WERKE_BILDER']: CollectionItemProperties_WERKE_BILDER;
	}
}

export type CollectionItemProperties_WERKE_BILDER = {
	__typename?: "CollectionItemProperties_WERKE_BILDER",
	image?:string,
	werkverzeichnis?:JSON,
	size?:JSON,
	technique?:JSON,
	date?:JSON,
	format?:JSON,
	name?:JSON
}

export type CollectionView = {
	__typename?: "CollectionView",
	name:string,
	items:CollectionItem[]
}

export type JSON = any

export type Query = {
	__typename?: "Query",
	collection:Collection
}


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => any;


export declare function Thunder(
  fn: FetchFunction
):{
  query: OperationToGraphQL<ValueTypes["Query"],Query>
}

export declare function Chain(
  ...options: fetchOptions
):{
  query: OperationToGraphQL<ValueTypes["Query"],Query>
}

export declare const Zeus: {
  query: (o: ValueTypes["Query"]) => string
}

export declare const Cast: {
  query: CastToGraphQL<
  ValueTypes["Query"],
  Query
>
}

export declare const Selectors: {
  query: SelectionFunction<ValueTypes["Query"]>
}


export declare const Gql: ReturnType<typeof Chain>
