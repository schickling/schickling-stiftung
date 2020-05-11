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
	["CollectionItemFilterInput"]: {
	key:string,
	value:string
};
	["CollectionItemProperties"]: AliasType<{		["...on CollectionItemProperties_WERKE_BILDER"] : ValueTypes["CollectionItemProperties_WERKE_BILDER"]
		__typename?: true
}>;
	["CollectionItemProperties_WERKE_BILDER"]: AliasType<{
image?: [{	width?:number},true],
	werkverzeichnis?:true,
	size?:true,
	visible?:true,
	technique?:true,
	date?:true,
	format?:true,
	name?:true
		__typename?: true
}>;
	["CollectionView"]: AliasType<{
	name?:true,
items?: [{	filter?:ValueTypes["CollectionItemFilterInput"][]},ValueTypes["CollectionItem"]]
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
	["CollectionItemFilterInput"]: {
	key:string,
	value:string
},
	["CollectionItemProperties"]: PartialObjects["CollectionItemProperties_WERKE_BILDER"],
	["CollectionItemProperties_WERKE_BILDER"]: {
		__typename?: "CollectionItemProperties_WERKE_BILDER";
			image?:string,
			werkverzeichnis?:PartialObjects["JSON"],
			size?:PartialObjects["JSON"],
			visible?:PartialObjects["JSON"],
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

export type CollectionItemFilterInput = {
		key:string,
	value:string
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
	visible?:JSON,
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

export const AllTypesProps: Record<string,any> = {
	Collection:{
		collectionView:{
			collectionViewName:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	CollectionItemFilterInput:{
		key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		value:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CollectionItemProperties_WERKE_BILDER:{
		image:{
			width:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	CollectionView:{
		items:{
			filter:{
				type:"CollectionItemFilterInput",
				array:true,
				arrayRequired:false,
				required:true
			}
		}
	},
	JSON: "String",
	Query:{
		collection:{
			collectionName:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Collection:{
		name:"String",
		schemaJSON:"JSON",
		collectionViews:"CollectionView",
		collectionView:"CollectionView"
	},
	CollectionItem:{
		id:"ID",
		title:"String",
		properties:"CollectionItemProperties",
		blocks:"JSON",
		textContent:"String"
	},
	CollectionItemProperties_WERKE_BILDER:{
		image:"String",
		werkverzeichnis:"JSON",
		size:"JSON",
		visible:"JSON",
		technique:"JSON",
		date:"JSON",
		format:"JSON",
		name:"JSON"
	},
	CollectionView:{
		name:"String",
		items:"CollectionItem"
	},
	Query:{
		collection:"Collection"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
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



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `"${value.replace(/"/g, '\\\"')}"`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? '!' : ''
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${typeResolved}${isRequired}`;
  }
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) => traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*ZEUS_VAR\w*\b[!]?/g;
  let result;
  const AllVariables = [];
  while ((result = regex.exec(query))) {
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};

const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  
const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables);

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction;
    let queryString = query;
    let fetchOptions = options[1] || {};
    try {
        fetchFunction = require('node-fetch');
    } catch (error) {
        throw new Error("Please install 'node-fetch' to use zeus in nodejs environment");
    }
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      try {
          queryString = require('querystring').stringify(query);
      } catch (error) {
          throw new Error("Something gone wrong 'querystring' is a part of nodejs environment");
      }
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data);
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o)
};
export const Cast = {
  query: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  Query
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>()
};
  

export const Gql = Chain('http://schickling.ngrok.io')