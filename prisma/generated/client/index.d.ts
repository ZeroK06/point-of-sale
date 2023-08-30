
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Ficha
 * 
 */
export type Ficha = $Result.DefaultSelection<Prisma.$FichaPayload>
/**
 * Model Servicio
 * 
 */
export type Servicio = $Result.DefaultSelection<Prisma.$ServicioPayload>
/**
 * Model additionalPayments
 * 
 */
export type additionalPayments = $Result.DefaultSelection<Prisma.$additionalPaymentsPayload>
/**
 * Model DetalleServicio
 * 
 */
export type DetalleServicio = $Result.DefaultSelection<Prisma.$DetalleServicioPayload>
/**
 * Model DetalleVenta
 * 
 */
export type DetalleVenta = $Result.DefaultSelection<Prisma.$DetalleVentaPayload>
/**
 * Model TicketServicio
 * 
 */
export type TicketServicio = $Result.DefaultSelection<Prisma.$TicketServicioPayload>
/**
 * Model TicketVenta
 * 
 */
export type TicketVenta = $Result.DefaultSelection<Prisma.$TicketVentaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs>;

  /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs>;

  /**
   * `prisma.ficha`: Exposes CRUD operations for the **Ficha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fichas
    * const fichas = await prisma.ficha.findMany()
    * ```
    */
  get ficha(): Prisma.FichaDelegate<ExtArgs>;

  /**
   * `prisma.servicio`: Exposes CRUD operations for the **Servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicio.findMany()
    * ```
    */
  get servicio(): Prisma.ServicioDelegate<ExtArgs>;

  /**
   * `prisma.additionalPayments`: Exposes CRUD operations for the **additionalPayments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdditionalPayments
    * const additionalPayments = await prisma.additionalPayments.findMany()
    * ```
    */
  get additionalPayments(): Prisma.additionalPaymentsDelegate<ExtArgs>;

  /**
   * `prisma.detalleServicio`: Exposes CRUD operations for the **DetalleServicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleServicios
    * const detalleServicios = await prisma.detalleServicio.findMany()
    * ```
    */
  get detalleServicio(): Prisma.DetalleServicioDelegate<ExtArgs>;

  /**
   * `prisma.detalleVenta`: Exposes CRUD operations for the **DetalleVenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleVentas
    * const detalleVentas = await prisma.detalleVenta.findMany()
    * ```
    */
  get detalleVenta(): Prisma.DetalleVentaDelegate<ExtArgs>;

  /**
   * `prisma.ticketServicio`: Exposes CRUD operations for the **TicketServicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketServicios
    * const ticketServicios = await prisma.ticketServicio.findMany()
    * ```
    */
  get ticketServicio(): Prisma.TicketServicioDelegate<ExtArgs>;

  /**
   * `prisma.ticketVenta`: Exposes CRUD operations for the **TicketVenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketVentas
    * const ticketVentas = await prisma.ticketVenta.findMany()
    * ```
    */
  get ticketVenta(): Prisma.TicketVentaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Categoria: 'Categoria',
    Producto: 'Producto',
    Empresa: 'Empresa',
    Ficha: 'Ficha',
    Servicio: 'Servicio',
    additionalPayments: 'additionalPayments',
    DetalleServicio: 'DetalleServicio',
    DetalleVenta: 'DetalleVenta',
    TicketServicio: 'TicketServicio',
    TicketVenta: 'TicketVenta'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'usuario' | 'categoria' | 'producto' | 'empresa' | 'ficha' | 'servicio' | 'additionalPayments' | 'detalleServicio' | 'detalleVenta' | 'ticketServicio' | 'ticketVenta'
      txIsolationLevel: never
    },
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UsuarioFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UsuarioAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoriaFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoriaAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductoFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductoAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EmpresaFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.EmpresaAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>,
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Ficha: {
        payload: Prisma.$FichaPayload<ExtArgs>
        fields: Prisma.FichaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FichaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FichaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FichaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FichaPayload>
          }
          findFirst: {
            args: Prisma.FichaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FichaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FichaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FichaPayload>
          }
          findMany: {
            args: Prisma.FichaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FichaPayload>[]
          }
          create: {
            args: Prisma.FichaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FichaPayload>
          }
          createMany: {
            args: Prisma.FichaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FichaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FichaPayload>
          }
          update: {
            args: Prisma.FichaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FichaPayload>
          }
          deleteMany: {
            args: Prisma.FichaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FichaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FichaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FichaPayload>
          }
          aggregate: {
            args: Prisma.FichaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFicha>
          }
          groupBy: {
            args: Prisma.FichaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FichaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FichaFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.FichaAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.FichaCountArgs<ExtArgs>,
            result: $Utils.Optional<FichaCountAggregateOutputType> | number
          }
        }
      }
      Servicio: {
        payload: Prisma.$ServicioPayload<ExtArgs>
        fields: Prisma.ServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findFirst: {
            args: Prisma.ServicioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findMany: {
            args: Prisma.ServicioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          create: {
            args: Prisma.ServicioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          createMany: {
            args: Prisma.ServicioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ServicioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          update: {
            args: Prisma.ServicioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          deleteMany: {
            args: Prisma.ServicioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ServicioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          aggregate: {
            args: Prisma.ServicioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateServicio>
          }
          groupBy: {
            args: Prisma.ServicioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ServicioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ServicioFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ServicioAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ServicioCountArgs<ExtArgs>,
            result: $Utils.Optional<ServicioCountAggregateOutputType> | number
          }
        }
      }
      additionalPayments: {
        payload: Prisma.$additionalPaymentsPayload<ExtArgs>
        fields: Prisma.additionalPaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.additionalPaymentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$additionalPaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.additionalPaymentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$additionalPaymentsPayload>
          }
          findFirst: {
            args: Prisma.additionalPaymentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$additionalPaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.additionalPaymentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$additionalPaymentsPayload>
          }
          findMany: {
            args: Prisma.additionalPaymentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$additionalPaymentsPayload>[]
          }
          create: {
            args: Prisma.additionalPaymentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$additionalPaymentsPayload>
          }
          createMany: {
            args: Prisma.additionalPaymentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.additionalPaymentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$additionalPaymentsPayload>
          }
          update: {
            args: Prisma.additionalPaymentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$additionalPaymentsPayload>
          }
          deleteMany: {
            args: Prisma.additionalPaymentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.additionalPaymentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.additionalPaymentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$additionalPaymentsPayload>
          }
          aggregate: {
            args: Prisma.AdditionalPaymentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdditionalPayments>
          }
          groupBy: {
            args: Prisma.additionalPaymentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdditionalPaymentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.additionalPaymentsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.additionalPaymentsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.additionalPaymentsCountArgs<ExtArgs>,
            result: $Utils.Optional<AdditionalPaymentsCountAggregateOutputType> | number
          }
        }
      }
      DetalleServicio: {
        payload: Prisma.$DetalleServicioPayload<ExtArgs>
        fields: Prisma.DetalleServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleServicioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleServicioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleServicioPayload>
          }
          findFirst: {
            args: Prisma.DetalleServicioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleServicioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleServicioPayload>
          }
          findMany: {
            args: Prisma.DetalleServicioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleServicioPayload>[]
          }
          create: {
            args: Prisma.DetalleServicioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleServicioPayload>
          }
          createMany: {
            args: Prisma.DetalleServicioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DetalleServicioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleServicioPayload>
          }
          update: {
            args: Prisma.DetalleServicioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleServicioPayload>
          }
          deleteMany: {
            args: Prisma.DetalleServicioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleServicioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DetalleServicioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleServicioPayload>
          }
          aggregate: {
            args: Prisma.DetalleServicioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDetalleServicio>
          }
          groupBy: {
            args: Prisma.DetalleServicioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DetalleServicioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DetalleServicioFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.DetalleServicioAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.DetalleServicioCountArgs<ExtArgs>,
            result: $Utils.Optional<DetalleServicioCountAggregateOutputType> | number
          }
        }
      }
      DetalleVenta: {
        payload: Prisma.$DetalleVentaPayload<ExtArgs>
        fields: Prisma.DetalleVentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleVentaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleVentaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          findFirst: {
            args: Prisma.DetalleVentaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleVentaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          findMany: {
            args: Prisma.DetalleVentaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>[]
          }
          create: {
            args: Prisma.DetalleVentaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          createMany: {
            args: Prisma.DetalleVentaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DetalleVentaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          update: {
            args: Prisma.DetalleVentaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          deleteMany: {
            args: Prisma.DetalleVentaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleVentaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DetalleVentaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetalleVentaPayload>
          }
          aggregate: {
            args: Prisma.DetalleVentaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDetalleVenta>
          }
          groupBy: {
            args: Prisma.DetalleVentaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DetalleVentaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DetalleVentaFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.DetalleVentaAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.DetalleVentaCountArgs<ExtArgs>,
            result: $Utils.Optional<DetalleVentaCountAggregateOutputType> | number
          }
        }
      }
      TicketServicio: {
        payload: Prisma.$TicketServicioPayload<ExtArgs>
        fields: Prisma.TicketServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketServicioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketServicioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketServicioPayload>
          }
          findFirst: {
            args: Prisma.TicketServicioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketServicioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketServicioPayload>
          }
          findMany: {
            args: Prisma.TicketServicioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketServicioPayload>[]
          }
          create: {
            args: Prisma.TicketServicioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketServicioPayload>
          }
          createMany: {
            args: Prisma.TicketServicioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TicketServicioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketServicioPayload>
          }
          update: {
            args: Prisma.TicketServicioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketServicioPayload>
          }
          deleteMany: {
            args: Prisma.TicketServicioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TicketServicioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TicketServicioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketServicioPayload>
          }
          aggregate: {
            args: Prisma.TicketServicioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTicketServicio>
          }
          groupBy: {
            args: Prisma.TicketServicioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TicketServicioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TicketServicioFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TicketServicioAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TicketServicioCountArgs<ExtArgs>,
            result: $Utils.Optional<TicketServicioCountAggregateOutputType> | number
          }
        }
      }
      TicketVenta: {
        payload: Prisma.$TicketVentaPayload<ExtArgs>
        fields: Prisma.TicketVentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketVentaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketVentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketVentaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketVentaPayload>
          }
          findFirst: {
            args: Prisma.TicketVentaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketVentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketVentaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketVentaPayload>
          }
          findMany: {
            args: Prisma.TicketVentaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketVentaPayload>[]
          }
          create: {
            args: Prisma.TicketVentaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketVentaPayload>
          }
          createMany: {
            args: Prisma.TicketVentaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TicketVentaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketVentaPayload>
          }
          update: {
            args: Prisma.TicketVentaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketVentaPayload>
          }
          deleteMany: {
            args: Prisma.TicketVentaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TicketVentaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TicketVentaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketVentaPayload>
          }
          aggregate: {
            args: Prisma.TicketVentaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTicketVenta>
          }
          groupBy: {
            args: Prisma.TicketVentaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TicketVentaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TicketVentaFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TicketVentaAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TicketVentaCountArgs<ExtArgs>,
            result: $Utils.Optional<TicketVentaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    TicketServicio: number
    DetalleVenta: number
    TicketVenta: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    TicketServicio?: boolean | UsuarioCountOutputTypeCountTicketServicioArgs
    DetalleVenta?: boolean | UsuarioCountOutputTypeCountDetalleVentaArgs
    TicketVenta?: boolean | UsuarioCountOutputTypeCountTicketVentaArgs
  }

  // Custom InputTypes

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTicketServicioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TicketServicioWhereInput
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDetalleVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DetalleVentaWhereInput
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTicketVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TicketVentaWhereInput
  }



  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    Producto: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Producto?: boolean | CategoriaCountOutputTypeCountProductoArgs
  }

  // Custom InputTypes

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }



  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    DetalleVenta: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    DetalleVenta?: boolean | ProductoCountOutputTypeCountDetalleVentaArgs
  }

  // Custom InputTypes

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountDetalleVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DetalleVentaWhereInput
  }



  /**
   * Count Type FichaCountOutputType
   */

  export type FichaCountOutputType = {
    TicketVenta: number
  }

  export type FichaCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    TicketVenta?: boolean | FichaCountOutputTypeCountTicketVentaArgs
  }

  // Custom InputTypes

  /**
   * FichaCountOutputType without action
   */
  export type FichaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaCountOutputType
     */
    select?: FichaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FichaCountOutputType without action
   */
  export type FichaCountOutputTypeCountTicketVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TicketVentaWhereInput
  }



  /**
   * Count Type ServicioCountOutputType
   */

  export type ServicioCountOutputType = {
    DetalleServicio: number
  }

  export type ServicioCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    DetalleServicio?: boolean | ServicioCountOutputTypeCountDetalleServicioArgs
  }

  // Custom InputTypes

  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioCountOutputType
     */
    select?: ServicioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeCountDetalleServicioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DetalleServicioWhereInput
  }



  /**
   * Count Type TicketServicioCountOutputType
   */

  export type TicketServicioCountOutputType = {
    additionalPayments: number
  }

  export type TicketServicioCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    additionalPayments?: boolean | TicketServicioCountOutputTypeCountAdditionalPaymentsArgs
  }

  // Custom InputTypes

  /**
   * TicketServicioCountOutputType without action
   */
  export type TicketServicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicioCountOutputType
     */
    select?: TicketServicioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TicketServicioCountOutputType without action
   */
  export type TicketServicioCountOutputTypeCountAdditionalPaymentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: additionalPaymentsWhereInput
  }



  /**
   * Count Type TicketVentaCountOutputType
   */

  export type TicketVentaCountOutputType = {
    DetalleVenta: number
  }

  export type TicketVentaCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    DetalleVenta?: boolean | TicketVentaCountOutputTypeCountDetalleVentaArgs
  }

  // Custom InputTypes

  /**
   * TicketVentaCountOutputType without action
   */
  export type TicketVentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVentaCountOutputType
     */
    select?: TicketVentaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TicketVentaCountOutputType without action
   */
  export type TicketVentaCountOutputTypeCountDetalleVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DetalleVentaWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dni: string | null
    fullName: string | null
    email: string | null
    username: string | null
    phoneNumer: string | null
    gender: string | null
    role: string | null
    password: string | null
    urlImage: string | null
    address: string | null
    isVigent: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dni: string | null
    fullName: string | null
    email: string | null
    username: string | null
    phoneNumer: string | null
    gender: string | null
    role: string | null
    password: string | null
    urlImage: string | null
    address: string | null
    isVigent: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    dni: number
    fullName: number
    email: number
    username: number
    phoneNumer: number
    gender: number
    role: number
    password: number
    urlImage: number
    address: number
    isVigent: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dni?: true
    fullName?: true
    email?: true
    username?: true
    phoneNumer?: true
    gender?: true
    role?: true
    password?: true
    urlImage?: true
    address?: true
    isVigent?: true
    createAt?: true
    updateAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dni?: true
    fullName?: true
    email?: true
    username?: true
    phoneNumer?: true
    gender?: true
    role?: true
    password?: true
    urlImage?: true
    address?: true
    isVigent?: true
    createAt?: true
    updateAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dni?: true
    fullName?: true
    email?: true
    username?: true
    phoneNumer?: true
    gender?: true
    role?: true
    password?: true
    urlImage?: true
    address?: true
    isVigent?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    dni: string
    fullName: string
    email: string
    username: string
    phoneNumer: string
    gender: string
    role: string
    password: string
    urlImage: string
    address: string
    isVigent: boolean
    createAt: Date
    updateAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dni?: boolean
    fullName?: boolean
    email?: boolean
    username?: boolean
    phoneNumer?: boolean
    gender?: boolean
    role?: boolean
    password?: boolean
    urlImage?: boolean
    address?: boolean
    isVigent?: boolean
    createAt?: boolean
    updateAt?: boolean
    TicketServicio?: boolean | Usuario$TicketServicioArgs<ExtArgs>
    DetalleVenta?: boolean | Usuario$DetalleVentaArgs<ExtArgs>
    TicketVenta?: boolean | Usuario$TicketVentaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dni?: boolean
    fullName?: boolean
    email?: boolean
    username?: boolean
    phoneNumer?: boolean
    gender?: boolean
    role?: boolean
    password?: boolean
    urlImage?: boolean
    address?: boolean
    isVigent?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    TicketServicio?: boolean | Usuario$TicketServicioArgs<ExtArgs>
    DetalleVenta?: boolean | Usuario$DetalleVentaArgs<ExtArgs>
    TicketVenta?: boolean | Usuario$TicketVentaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsuarioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      TicketServicio: Prisma.$TicketServicioPayload<ExtArgs>[]
      DetalleVenta: Prisma.$DetalleVentaPayload<ExtArgs>[]
      TicketVenta: Prisma.$TicketVentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      firstName: string
      lastName: string
      dni: string
      fullName: string
      email: string
      username: string
      phoneNumer: string
      gender: string
      role: string
      password: string
      urlImage: string
      address: string
      isVigent: boolean
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }


  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuario = await prisma.usuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsuarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * @param {UsuarioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const usuario = await prisma.usuario.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UsuarioFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Usuario.
     * @param {UsuarioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const usuario = await prisma.usuario.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UsuarioAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    TicketServicio<T extends Usuario$TicketServicioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$TicketServicioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'findMany'> | Null>;

    DetalleVenta<T extends Usuario$DetalleVentaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$DetalleVentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'findMany'> | Null>;

    TicketVenta<T extends Usuario$TicketVentaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$TicketVentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly firstName: FieldRef<"Usuario", 'String'>
    readonly lastName: FieldRef<"Usuario", 'String'>
    readonly dni: FieldRef<"Usuario", 'String'>
    readonly fullName: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly phoneNumer: FieldRef<"Usuario", 'String'>
    readonly gender: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly urlImage: FieldRef<"Usuario", 'String'>
    readonly address: FieldRef<"Usuario", 'String'>
    readonly isVigent: FieldRef<"Usuario", 'Boolean'>
    readonly createAt: FieldRef<"Usuario", 'DateTime'>
    readonly updateAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }


  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }


  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }


  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario findRaw
   */
  export type UsuarioFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Usuario aggregateRaw
   */
  export type UsuarioAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Usuario.TicketServicio
   */
  export type Usuario$TicketServicioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicio
     */
    select?: TicketServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketServicioInclude<ExtArgs> | null
    where?: TicketServicioWhereInput
    orderBy?: TicketServicioOrderByWithRelationInput | TicketServicioOrderByWithRelationInput[]
    cursor?: TicketServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketServicioScalarFieldEnum | TicketServicioScalarFieldEnum[]
  }


  /**
   * Usuario.DetalleVenta
   */
  export type Usuario$DetalleVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    where?: DetalleVentaWhereInput
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    cursor?: DetalleVentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleVentaScalarFieldEnum | DetalleVentaScalarFieldEnum[]
  }


  /**
   * Usuario.TicketVenta
   */
  export type Usuario$TicketVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
    where?: TicketVentaWhereInput
    orderBy?: TicketVentaOrderByWithRelationInput | TicketVentaOrderByWithRelationInput[]
    cursor?: TicketVentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketVentaScalarFieldEnum | TicketVentaScalarFieldEnum[]
  }


  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
  }



  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    name: string | null
    isVigent: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isVigent: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    name: number
    isVigent: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    id?: true
    name?: true
    isVigent?: true
    createAt?: true
    updateAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    name?: true
    isVigent?: true
    createAt?: true
    updateAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    name?: true
    isVigent?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    name: string
    isVigent: boolean
    createAt: Date
    updateAt: Date
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isVigent?: boolean
    createAt?: boolean
    updateAt?: boolean
    Producto?: boolean | Categoria$ProductoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    name?: boolean
    isVigent?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type CategoriaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Producto?: boolean | Categoria$ProductoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoriaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      Producto: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      isVigent: boolean
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }


  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CategoriaFindManyArgs, 'select' | 'include'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoriaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Categoria that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoriaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoriaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
    **/
    create<T extends CategoriaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categorias.
     *     @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     *     @example
     *     // Create many Categorias
     *     const categoria = await prisma.categoria.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoriaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
    **/
    delete<T extends CategoriaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoriaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoriaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoriaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
    **/
    upsert<T extends CategoriaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>
    ): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Categorias that matches the filter.
     * @param {CategoriaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const categoria = await prisma.categoria.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CategoriaFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Categoria.
     * @param {CategoriaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const categoria = await prisma.categoria.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CategoriaAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Producto<T extends Categoria$ProductoArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$ProductoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Categoria model
   */ 
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly name: FieldRef<"Categoria", 'String'>
    readonly isVigent: FieldRef<"Categoria", 'Boolean'>
    readonly createAt: FieldRef<"Categoria", 'DateTime'>
    readonly updateAt: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }


  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }


  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }


  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }


  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }


  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }


  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
  }


  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }


  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
  }


  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }


  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }


  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
  }


  /**
   * Categoria findRaw
   */
  export type CategoriaFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Categoria aggregateRaw
   */
  export type CategoriaAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Categoria.Producto
   */
  export type Categoria$ProductoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }


  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriaInclude<ExtArgs> | null
  }



  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductoSumAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: string | null
    name: string | null
    shortName: string | null
    description: string | null
    price: number | null
    stock: number | null
    model: string | null
    isVigent: boolean | null
    brand: string | null
    urlImage: string | null
    categoriaId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    shortName: string | null
    description: string | null
    price: number | null
    stock: number | null
    model: string | null
    isVigent: boolean | null
    brand: string | null
    urlImage: string | null
    categoriaId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    name: number
    shortName: number
    description: number
    price: number
    stock: number
    model: number
    isVigent: number
    brand: number
    urlImage: number
    categoriaId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductoSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    description?: true
    price?: true
    stock?: true
    model?: true
    isVigent?: true
    brand?: true
    urlImage?: true
    categoriaId?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    description?: true
    price?: true
    stock?: true
    model?: true
    isVigent?: true
    brand?: true
    urlImage?: true
    categoriaId?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    description?: true
    price?: true
    stock?: true
    model?: true
    isVigent?: true
    brand?: true
    urlImage?: true
    categoriaId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: string
    name: string
    shortName: string
    description: string
    price: number
    stock: number
    model: string
    isVigent: boolean
    brand: string
    urlImage: string
    categoriaId: string
    createAt: Date
    updateAt: Date
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    model?: boolean
    isVigent?: boolean
    brand?: boolean
    urlImage?: boolean
    categoriaId?: boolean
    createAt?: boolean
    updateAt?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    DetalleVenta?: boolean | Producto$DetalleVentaArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    name?: boolean
    shortName?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    model?: boolean
    isVigent?: boolean
    brand?: boolean
    urlImage?: boolean
    categoriaId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ProductoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    DetalleVenta?: boolean | Producto$DetalleVentaArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      DetalleVenta: Prisma.$DetalleVentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      shortName: string
      description: string
      price: number
      stock: number
      model: string
      isVigent: boolean
      brand: string
      urlImage: string
      categoriaId: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }


  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProductoFindManyArgs, 'select' | 'include'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Producto that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>
    ): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
    **/
    create<T extends ProductoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>
    ): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Productos.
     *     @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     *     @example
     *     // Create many Productos
     *     const producto = await prisma.producto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
    **/
    delete<T extends ProductoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>
    ): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>
    ): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
    **/
    upsert<T extends ProductoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>
    ): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Productos that matches the filter.
     * @param {ProductoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const producto = await prisma.producto.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductoFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Producto.
     * @param {ProductoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const producto = await prisma.producto.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductoAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    DetalleVenta<T extends Producto$DetalleVentaArgs<ExtArgs> = {}>(args?: Subset<T, Producto$DetalleVentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Producto model
   */ 
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'String'>
    readonly name: FieldRef<"Producto", 'String'>
    readonly shortName: FieldRef<"Producto", 'String'>
    readonly description: FieldRef<"Producto", 'String'>
    readonly price: FieldRef<"Producto", 'Float'>
    readonly stock: FieldRef<"Producto", 'Int'>
    readonly model: FieldRef<"Producto", 'String'>
    readonly isVigent: FieldRef<"Producto", 'Boolean'>
    readonly brand: FieldRef<"Producto", 'String'>
    readonly urlImage: FieldRef<"Producto", 'String'>
    readonly categoriaId: FieldRef<"Producto", 'String'>
    readonly createAt: FieldRef<"Producto", 'DateTime'>
    readonly updateAt: FieldRef<"Producto", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }


  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }


  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }


  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }


  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }


  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }


  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
  }


  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }


  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
  }


  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }


  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }


  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
  }


  /**
   * Producto findRaw
   */
  export type ProductoFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Producto aggregateRaw
   */
  export type ProductoAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Producto.DetalleVenta
   */
  export type Producto$DetalleVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    where?: DetalleVentaWhereInput
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    cursor?: DetalleVentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleVentaScalarFieldEnum | DetalleVentaScalarFieldEnum[]
  }


  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductoInclude<ExtArgs> | null
  }



  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: string | null
    razon: string | null
    address: string | null
    ruc: string | null
    phoneNumber: string | null
    type: string | null
    province: string | null
    departament: string | null
    country: string | null
    email: string | null
    description: string | null
    urlImage: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: string | null
    razon: string | null
    address: string | null
    ruc: string | null
    phoneNumber: string | null
    type: string | null
    province: string | null
    departament: string | null
    country: string | null
    email: string | null
    description: string | null
    urlImage: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    razon: number
    address: number
    ruc: number
    phoneNumber: number
    type: number
    province: number
    departament: number
    country: number
    email: number
    description: number
    urlImage: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type EmpresaMinAggregateInputType = {
    id?: true
    razon?: true
    address?: true
    ruc?: true
    phoneNumber?: true
    type?: true
    province?: true
    departament?: true
    country?: true
    email?: true
    description?: true
    urlImage?: true
    createAt?: true
    updateAt?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    razon?: true
    address?: true
    ruc?: true
    phoneNumber?: true
    type?: true
    province?: true
    departament?: true
    country?: true
    email?: true
    description?: true
    urlImage?: true
    createAt?: true
    updateAt?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    razon?: true
    address?: true
    ruc?: true
    phoneNumber?: true
    type?: true
    province?: true
    departament?: true
    country?: true
    email?: true
    description?: true
    urlImage?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: string
    razon: string
    address: string
    ruc: string
    phoneNumber: string
    type: string
    province: string
    departament: string
    country: string
    email: string
    description: string
    urlImage: string
    createAt: Date
    updateAt: Date
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razon?: boolean
    address?: boolean
    ruc?: boolean
    phoneNumber?: boolean
    type?: boolean
    province?: boolean
    departament?: boolean
    country?: boolean
    email?: boolean
    description?: boolean
    urlImage?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectScalar = {
    id?: boolean
    razon?: boolean
    address?: boolean
    ruc?: boolean
    phoneNumber?: boolean
    type?: boolean
    province?: boolean
    departament?: boolean
    country?: boolean
    email?: boolean
    description?: boolean
    urlImage?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type $EmpresaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      razon: string
      address: string
      ruc: string
      phoneNumber: string
      type: string
      province: string
      departament: string
      country: string
      email: string
      description: string
      urlImage: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }


  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EmpresaFindManyArgs, 'select' | 'include'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmpresaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>
    ): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Empresa that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmpresaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>
    ): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmpresaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
    **/
    create<T extends EmpresaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>
    ): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Empresas.
     *     @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     *     @example
     *     // Create many Empresas
     *     const empresa = await prisma.empresa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmpresaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
    **/
    delete<T extends EmpresaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>
    ): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmpresaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>
    ): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmpresaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmpresaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
    **/
    upsert<T extends EmpresaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>
    ): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Empresas that matches the filter.
     * @param {EmpresaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const empresa = await prisma.empresa.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: EmpresaFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Empresa.
     * @param {EmpresaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const empresa = await prisma.empresa.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: EmpresaAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Empresa model
   */ 
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'String'>
    readonly razon: FieldRef<"Empresa", 'String'>
    readonly address: FieldRef<"Empresa", 'String'>
    readonly ruc: FieldRef<"Empresa", 'String'>
    readonly phoneNumber: FieldRef<"Empresa", 'String'>
    readonly type: FieldRef<"Empresa", 'String'>
    readonly province: FieldRef<"Empresa", 'String'>
    readonly departament: FieldRef<"Empresa", 'String'>
    readonly country: FieldRef<"Empresa", 'String'>
    readonly email: FieldRef<"Empresa", 'String'>
    readonly description: FieldRef<"Empresa", 'String'>
    readonly urlImage: FieldRef<"Empresa", 'String'>
    readonly createAt: FieldRef<"Empresa", 'DateTime'>
    readonly updateAt: FieldRef<"Empresa", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }


  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }


  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }


  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }


  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }


  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }


  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
  }


  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }


  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
  }


  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }


  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }


  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
  }


  /**
   * Empresa findRaw
   */
  export type EmpresaFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Empresa aggregateRaw
   */
  export type EmpresaAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
  }



  /**
   * Model Ficha
   */

  export type AggregateFicha = {
    _count: FichaCountAggregateOutputType | null
    _min: FichaMinAggregateOutputType | null
    _max: FichaMaxAggregateOutputType | null
  }

  export type FichaMinAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    case: string | null
    procesador: string | null
    memory: string | null
    almacenamiento: string | null
    grafica: string | null
    memoryGrafica: string | null
    pantalla: string | null
    sistema: string | null
    description: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type FichaMaxAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    case: string | null
    procesador: string | null
    memory: string | null
    almacenamiento: string | null
    grafica: string | null
    memoryGrafica: string | null
    pantalla: string | null
    sistema: string | null
    description: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type FichaCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    case: number
    procesador: number
    memory: number
    almacenamiento: number
    grafica: number
    memoryGrafica: number
    pantalla: number
    sistema: number
    description: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type FichaMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    case?: true
    procesador?: true
    memory?: true
    almacenamiento?: true
    grafica?: true
    memoryGrafica?: true
    pantalla?: true
    sistema?: true
    description?: true
    createAt?: true
    updateAt?: true
  }

  export type FichaMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    case?: true
    procesador?: true
    memory?: true
    almacenamiento?: true
    grafica?: true
    memoryGrafica?: true
    pantalla?: true
    sistema?: true
    description?: true
    createAt?: true
    updateAt?: true
  }

  export type FichaCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    case?: true
    procesador?: true
    memory?: true
    almacenamiento?: true
    grafica?: true
    memoryGrafica?: true
    pantalla?: true
    sistema?: true
    description?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type FichaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ficha to aggregate.
     */
    where?: FichaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichas to fetch.
     */
    orderBy?: FichaOrderByWithRelationInput | FichaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FichaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fichas
    **/
    _count?: true | FichaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FichaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FichaMaxAggregateInputType
  }

  export type GetFichaAggregateType<T extends FichaAggregateArgs> = {
        [P in keyof T & keyof AggregateFicha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFicha[P]>
      : GetScalarType<T[P], AggregateFicha[P]>
  }




  export type FichaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FichaWhereInput
    orderBy?: FichaOrderByWithAggregationInput | FichaOrderByWithAggregationInput[]
    by: FichaScalarFieldEnum[] | FichaScalarFieldEnum
    having?: FichaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FichaCountAggregateInputType | true
    _min?: FichaMinAggregateInputType
    _max?: FichaMaxAggregateInputType
  }

  export type FichaGroupByOutputType = {
    id: string
    brand: string
    model: string
    case: string
    procesador: string
    memory: string
    almacenamiento: string
    grafica: string
    memoryGrafica: string
    pantalla: string
    sistema: string
    description: string
    createAt: Date
    updateAt: Date
    _count: FichaCountAggregateOutputType | null
    _min: FichaMinAggregateOutputType | null
    _max: FichaMaxAggregateOutputType | null
  }

  type GetFichaGroupByPayload<T extends FichaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FichaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FichaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FichaGroupByOutputType[P]>
            : GetScalarType<T[P], FichaGroupByOutputType[P]>
        }
      >
    >


  export type FichaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    case?: boolean
    procesador?: boolean
    memory?: boolean
    almacenamiento?: boolean
    grafica?: boolean
    memoryGrafica?: boolean
    pantalla?: boolean
    sistema?: boolean
    description?: boolean
    createAt?: boolean
    updateAt?: boolean
    DetalleServicio?: boolean | Ficha$DetalleServicioArgs<ExtArgs>
    TicketVenta?: boolean | Ficha$TicketVentaArgs<ExtArgs>
    _count?: boolean | FichaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ficha"]>

  export type FichaSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    case?: boolean
    procesador?: boolean
    memory?: boolean
    almacenamiento?: boolean
    grafica?: boolean
    memoryGrafica?: boolean
    pantalla?: boolean
    sistema?: boolean
    description?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type FichaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    DetalleServicio?: boolean | Ficha$DetalleServicioArgs<ExtArgs>
    TicketVenta?: boolean | Ficha$TicketVentaArgs<ExtArgs>
    _count?: boolean | FichaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FichaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Ficha"
    objects: {
      DetalleServicio: Prisma.$DetalleServicioPayload<ExtArgs> | null
      TicketVenta: Prisma.$TicketVentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      brand: string
      model: string
      case: string
      procesador: string
      memory: string
      almacenamiento: string
      grafica: string
      memoryGrafica: string
      pantalla: string
      sistema: string
      description: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["ficha"]>
    composites: {}
  }


  type FichaGetPayload<S extends boolean | null | undefined | FichaDefaultArgs> = $Result.GetResult<Prisma.$FichaPayload, S>

  type FichaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FichaFindManyArgs, 'select' | 'include'> & {
      select?: FichaCountAggregateInputType | true
    }

  export interface FichaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ficha'], meta: { name: 'Ficha' } }
    /**
     * Find zero or one Ficha that matches the filter.
     * @param {FichaFindUniqueArgs} args - Arguments to find a Ficha
     * @example
     * // Get one Ficha
     * const ficha = await prisma.ficha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FichaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FichaFindUniqueArgs<ExtArgs>>
    ): Prisma__FichaClient<$Result.GetResult<Prisma.$FichaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ficha that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FichaFindUniqueOrThrowArgs} args - Arguments to find a Ficha
     * @example
     * // Get one Ficha
     * const ficha = await prisma.ficha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FichaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FichaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FichaClient<$Result.GetResult<Prisma.$FichaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ficha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaFindFirstArgs} args - Arguments to find a Ficha
     * @example
     * // Get one Ficha
     * const ficha = await prisma.ficha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FichaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FichaFindFirstArgs<ExtArgs>>
    ): Prisma__FichaClient<$Result.GetResult<Prisma.$FichaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ficha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaFindFirstOrThrowArgs} args - Arguments to find a Ficha
     * @example
     * // Get one Ficha
     * const ficha = await prisma.ficha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FichaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FichaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FichaClient<$Result.GetResult<Prisma.$FichaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fichas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fichas
     * const fichas = await prisma.ficha.findMany()
     * 
     * // Get first 10 Fichas
     * const fichas = await prisma.ficha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fichaWithIdOnly = await prisma.ficha.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FichaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FichaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ficha.
     * @param {FichaCreateArgs} args - Arguments to create a Ficha.
     * @example
     * // Create one Ficha
     * const Ficha = await prisma.ficha.create({
     *   data: {
     *     // ... data to create a Ficha
     *   }
     * })
     * 
    **/
    create<T extends FichaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FichaCreateArgs<ExtArgs>>
    ): Prisma__FichaClient<$Result.GetResult<Prisma.$FichaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fichas.
     *     @param {FichaCreateManyArgs} args - Arguments to create many Fichas.
     *     @example
     *     // Create many Fichas
     *     const ficha = await prisma.ficha.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FichaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FichaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ficha.
     * @param {FichaDeleteArgs} args - Arguments to delete one Ficha.
     * @example
     * // Delete one Ficha
     * const Ficha = await prisma.ficha.delete({
     *   where: {
     *     // ... filter to delete one Ficha
     *   }
     * })
     * 
    **/
    delete<T extends FichaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FichaDeleteArgs<ExtArgs>>
    ): Prisma__FichaClient<$Result.GetResult<Prisma.$FichaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ficha.
     * @param {FichaUpdateArgs} args - Arguments to update one Ficha.
     * @example
     * // Update one Ficha
     * const ficha = await prisma.ficha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FichaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FichaUpdateArgs<ExtArgs>>
    ): Prisma__FichaClient<$Result.GetResult<Prisma.$FichaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fichas.
     * @param {FichaDeleteManyArgs} args - Arguments to filter Fichas to delete.
     * @example
     * // Delete a few Fichas
     * const { count } = await prisma.ficha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FichaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FichaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fichas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fichas
     * const ficha = await prisma.ficha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FichaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FichaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ficha.
     * @param {FichaUpsertArgs} args - Arguments to update or create a Ficha.
     * @example
     * // Update or create a Ficha
     * const ficha = await prisma.ficha.upsert({
     *   create: {
     *     // ... data to create a Ficha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ficha we want to update
     *   }
     * })
    **/
    upsert<T extends FichaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FichaUpsertArgs<ExtArgs>>
    ): Prisma__FichaClient<$Result.GetResult<Prisma.$FichaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Fichas that matches the filter.
     * @param {FichaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ficha = await prisma.ficha.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FichaFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Ficha.
     * @param {FichaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ficha = await prisma.ficha.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FichaAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Fichas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaCountArgs} args - Arguments to filter Fichas to count.
     * @example
     * // Count the number of Fichas
     * const count = await prisma.ficha.count({
     *   where: {
     *     // ... the filter for the Fichas we want to count
     *   }
     * })
    **/
    count<T extends FichaCountArgs>(
      args?: Subset<T, FichaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FichaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ficha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FichaAggregateArgs>(args: Subset<T, FichaAggregateArgs>): Prisma.PrismaPromise<GetFichaAggregateType<T>>

    /**
     * Group by Ficha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FichaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FichaGroupByArgs['orderBy'] }
        : { orderBy?: FichaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FichaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFichaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ficha model
   */
  readonly fields: FichaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ficha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FichaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    DetalleServicio<T extends Ficha$DetalleServicioArgs<ExtArgs> = {}>(args?: Subset<T, Ficha$DetalleServicioArgs<ExtArgs>>): Prisma__DetalleServicioClient<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    TicketVenta<T extends Ficha$TicketVentaArgs<ExtArgs> = {}>(args?: Subset<T, Ficha$TicketVentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ficha model
   */ 
  interface FichaFieldRefs {
    readonly id: FieldRef<"Ficha", 'String'>
    readonly brand: FieldRef<"Ficha", 'String'>
    readonly model: FieldRef<"Ficha", 'String'>
    readonly case: FieldRef<"Ficha", 'String'>
    readonly procesador: FieldRef<"Ficha", 'String'>
    readonly memory: FieldRef<"Ficha", 'String'>
    readonly almacenamiento: FieldRef<"Ficha", 'String'>
    readonly grafica: FieldRef<"Ficha", 'String'>
    readonly memoryGrafica: FieldRef<"Ficha", 'String'>
    readonly pantalla: FieldRef<"Ficha", 'String'>
    readonly sistema: FieldRef<"Ficha", 'String'>
    readonly description: FieldRef<"Ficha", 'String'>
    readonly createAt: FieldRef<"Ficha", 'DateTime'>
    readonly updateAt: FieldRef<"Ficha", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Ficha findUnique
   */
  export type FichaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ficha
     */
    select?: FichaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FichaInclude<ExtArgs> | null
    /**
     * Filter, which Ficha to fetch.
     */
    where: FichaWhereUniqueInput
  }


  /**
   * Ficha findUniqueOrThrow
   */
  export type FichaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ficha
     */
    select?: FichaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FichaInclude<ExtArgs> | null
    /**
     * Filter, which Ficha to fetch.
     */
    where: FichaWhereUniqueInput
  }


  /**
   * Ficha findFirst
   */
  export type FichaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ficha
     */
    select?: FichaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FichaInclude<ExtArgs> | null
    /**
     * Filter, which Ficha to fetch.
     */
    where?: FichaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichas to fetch.
     */
    orderBy?: FichaOrderByWithRelationInput | FichaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fichas.
     */
    cursor?: FichaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fichas.
     */
    distinct?: FichaScalarFieldEnum | FichaScalarFieldEnum[]
  }


  /**
   * Ficha findFirstOrThrow
   */
  export type FichaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ficha
     */
    select?: FichaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FichaInclude<ExtArgs> | null
    /**
     * Filter, which Ficha to fetch.
     */
    where?: FichaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichas to fetch.
     */
    orderBy?: FichaOrderByWithRelationInput | FichaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fichas.
     */
    cursor?: FichaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fichas.
     */
    distinct?: FichaScalarFieldEnum | FichaScalarFieldEnum[]
  }


  /**
   * Ficha findMany
   */
  export type FichaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ficha
     */
    select?: FichaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FichaInclude<ExtArgs> | null
    /**
     * Filter, which Fichas to fetch.
     */
    where?: FichaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichas to fetch.
     */
    orderBy?: FichaOrderByWithRelationInput | FichaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fichas.
     */
    cursor?: FichaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichas.
     */
    skip?: number
    distinct?: FichaScalarFieldEnum | FichaScalarFieldEnum[]
  }


  /**
   * Ficha create
   */
  export type FichaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ficha
     */
    select?: FichaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FichaInclude<ExtArgs> | null
    /**
     * The data needed to create a Ficha.
     */
    data?: XOR<FichaCreateInput, FichaUncheckedCreateInput>
  }


  /**
   * Ficha createMany
   */
  export type FichaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fichas.
     */
    data: FichaCreateManyInput | FichaCreateManyInput[]
  }


  /**
   * Ficha update
   */
  export type FichaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ficha
     */
    select?: FichaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FichaInclude<ExtArgs> | null
    /**
     * The data needed to update a Ficha.
     */
    data: XOR<FichaUpdateInput, FichaUncheckedUpdateInput>
    /**
     * Choose, which Ficha to update.
     */
    where: FichaWhereUniqueInput
  }


  /**
   * Ficha updateMany
   */
  export type FichaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fichas.
     */
    data: XOR<FichaUpdateManyMutationInput, FichaUncheckedUpdateManyInput>
    /**
     * Filter which Fichas to update
     */
    where?: FichaWhereInput
  }


  /**
   * Ficha upsert
   */
  export type FichaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ficha
     */
    select?: FichaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FichaInclude<ExtArgs> | null
    /**
     * The filter to search for the Ficha to update in case it exists.
     */
    where: FichaWhereUniqueInput
    /**
     * In case the Ficha found by the `where` argument doesn't exist, create a new Ficha with this data.
     */
    create: XOR<FichaCreateInput, FichaUncheckedCreateInput>
    /**
     * In case the Ficha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FichaUpdateInput, FichaUncheckedUpdateInput>
  }


  /**
   * Ficha delete
   */
  export type FichaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ficha
     */
    select?: FichaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FichaInclude<ExtArgs> | null
    /**
     * Filter which Ficha to delete.
     */
    where: FichaWhereUniqueInput
  }


  /**
   * Ficha deleteMany
   */
  export type FichaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fichas to delete
     */
    where?: FichaWhereInput
  }


  /**
   * Ficha findRaw
   */
  export type FichaFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Ficha aggregateRaw
   */
  export type FichaAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Ficha.DetalleServicio
   */
  export type Ficha$DetalleServicioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    where?: DetalleServicioWhereInput
  }


  /**
   * Ficha.TicketVenta
   */
  export type Ficha$TicketVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
    where?: TicketVentaWhereInput
    orderBy?: TicketVentaOrderByWithRelationInput | TicketVentaOrderByWithRelationInput[]
    cursor?: TicketVentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketVentaScalarFieldEnum | TicketVentaScalarFieldEnum[]
  }


  /**
   * Ficha without action
   */
  export type FichaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ficha
     */
    select?: FichaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FichaInclude<ExtArgs> | null
  }



  /**
   * Model Servicio
   */

  export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  export type ServicioAvgAggregateOutputType = {
    price: number | null
    duration: number | null
  }

  export type ServicioSumAggregateOutputType = {
    price: number | null
    duration: number | null
  }

  export type ServicioMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    duration: number | null
    urlImage: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ServicioMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    duration: number | null
    urlImage: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ServicioCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    duration: number
    urlImage: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ServicioAvgAggregateInputType = {
    price?: true
    duration?: true
  }

  export type ServicioSumAggregateInputType = {
    price?: true
    duration?: true
  }

  export type ServicioMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    duration?: true
    urlImage?: true
    createAt?: true
    updateAt?: true
  }

  export type ServicioMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    duration?: true
    urlImage?: true
    createAt?: true
    updateAt?: true
  }

  export type ServicioCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    duration?: true
    urlImage?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ServicioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicio to aggregate.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicios
    **/
    _count?: true | ServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioMaxAggregateInputType
  }

  export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio[P]>
      : GetScalarType<T[P], AggregateServicio[P]>
  }




  export type ServicioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithAggregationInput | ServicioOrderByWithAggregationInput[]
    by: ServicioScalarFieldEnum[] | ServicioScalarFieldEnum
    having?: ServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioCountAggregateInputType | true
    _avg?: ServicioAvgAggregateInputType
    _sum?: ServicioSumAggregateInputType
    _min?: ServicioMinAggregateInputType
    _max?: ServicioMaxAggregateInputType
  }

  export type ServicioGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    duration: number
    urlImage: string
    createAt: Date
    updateAt: Date
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioGroupByOutputType[P]>
        }
      >
    >


  export type ServicioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    urlImage?: boolean
    createAt?: boolean
    updateAt?: boolean
    DetalleServicio?: boolean | Servicio$DetalleServicioArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    urlImage?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ServicioInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    DetalleServicio?: boolean | Servicio$DetalleServicioArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ServicioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Servicio"
    objects: {
      DetalleServicio: Prisma.$DetalleServicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      description: string
      price: number
      duration: number
      urlImage: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["servicio"]>
    composites: {}
  }


  type ServicioGetPayload<S extends boolean | null | undefined | ServicioDefaultArgs> = $Result.GetResult<Prisma.$ServicioPayload, S>

  type ServicioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ServicioFindManyArgs, 'select' | 'include'> & {
      select?: ServicioCountAggregateInputType | true
    }

  export interface ServicioDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servicio'], meta: { name: 'Servicio' } }
    /**
     * Find zero or one Servicio that matches the filter.
     * @param {ServicioFindUniqueArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServicioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ServicioFindUniqueArgs<ExtArgs>>
    ): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Servicio that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServicioFindUniqueOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServicioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServicioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicioFindFirstArgs<ExtArgs>>
    ): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Servicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServicioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicio.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioWithIdOnly = await prisma.servicio.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServicioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Servicio.
     * @param {ServicioCreateArgs} args - Arguments to create a Servicio.
     * @example
     * // Create one Servicio
     * const Servicio = await prisma.servicio.create({
     *   data: {
     *     // ... data to create a Servicio
     *   }
     * })
     * 
    **/
    create<T extends ServicioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ServicioCreateArgs<ExtArgs>>
    ): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Servicios.
     *     @param {ServicioCreateManyArgs} args - Arguments to create many Servicios.
     *     @example
     *     // Create many Servicios
     *     const servicio = await prisma.servicio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServicioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servicio.
     * @param {ServicioDeleteArgs} args - Arguments to delete one Servicio.
     * @example
     * // Delete one Servicio
     * const Servicio = await prisma.servicio.delete({
     *   where: {
     *     // ... filter to delete one Servicio
     *   }
     * })
     * 
    **/
    delete<T extends ServicioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ServicioDeleteArgs<ExtArgs>>
    ): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Servicio.
     * @param {ServicioUpdateArgs} args - Arguments to update one Servicio.
     * @example
     * // Update one Servicio
     * const servicio = await prisma.servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServicioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ServicioUpdateArgs<ExtArgs>>
    ): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Servicios.
     * @param {ServicioDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServicioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServicioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ServicioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servicio.
     * @param {ServicioUpsertArgs} args - Arguments to update or create a Servicio.
     * @example
     * // Update or create a Servicio
     * const servicio = await prisma.servicio.upsert({
     *   create: {
     *     // ... data to create a Servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio we want to update
     *   }
     * })
    **/
    upsert<T extends ServicioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ServicioUpsertArgs<ExtArgs>>
    ): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Servicios that matches the filter.
     * @param {ServicioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const servicio = await prisma.servicio.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ServicioFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Servicio.
     * @param {ServicioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const servicio = await prisma.servicio.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ServicioAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicio.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends ServicioCountArgs>(
      args?: Subset<T, ServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicioAggregateArgs>(args: Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>

    /**
     * Group by Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioGroupByArgs['orderBy'] }
        : { orderBy?: ServicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servicio model
   */
  readonly fields: ServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    DetalleServicio<T extends Servicio$DetalleServicioArgs<ExtArgs> = {}>(args?: Subset<T, Servicio$DetalleServicioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Servicio model
   */ 
  interface ServicioFieldRefs {
    readonly id: FieldRef<"Servicio", 'String'>
    readonly name: FieldRef<"Servicio", 'String'>
    readonly description: FieldRef<"Servicio", 'String'>
    readonly price: FieldRef<"Servicio", 'Float'>
    readonly duration: FieldRef<"Servicio", 'Float'>
    readonly urlImage: FieldRef<"Servicio", 'String'>
    readonly createAt: FieldRef<"Servicio", 'DateTime'>
    readonly updateAt: FieldRef<"Servicio", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Servicio findUnique
   */
  export type ServicioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }


  /**
   * Servicio findUniqueOrThrow
   */
  export type ServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }


  /**
   * Servicio findFirst
   */
  export type ServicioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }


  /**
   * Servicio findFirstOrThrow
   */
  export type ServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }


  /**
   * Servicio findMany
   */
  export type ServicioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicios to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }


  /**
   * Servicio create
   */
  export type ServicioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Servicio.
     */
    data: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
  }


  /**
   * Servicio createMany
   */
  export type ServicioCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
  }


  /**
   * Servicio update
   */
  export type ServicioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Servicio.
     */
    data: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
    /**
     * Choose, which Servicio to update.
     */
    where: ServicioWhereUniqueInput
  }


  /**
   * Servicio updateMany
   */
  export type ServicioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
  }


  /**
   * Servicio upsert
   */
  export type ServicioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Servicio to update in case it exists.
     */
    where: ServicioWhereUniqueInput
    /**
     * In case the Servicio found by the `where` argument doesn't exist, create a new Servicio with this data.
     */
    create: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
    /**
     * In case the Servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
  }


  /**
   * Servicio delete
   */
  export type ServicioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter which Servicio to delete.
     */
    where: ServicioWhereUniqueInput
  }


  /**
   * Servicio deleteMany
   */
  export type ServicioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicios to delete
     */
    where?: ServicioWhereInput
  }


  /**
   * Servicio findRaw
   */
  export type ServicioFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Servicio aggregateRaw
   */
  export type ServicioAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Servicio.DetalleServicio
   */
  export type Servicio$DetalleServicioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    where?: DetalleServicioWhereInput
    orderBy?: DetalleServicioOrderByWithRelationInput | DetalleServicioOrderByWithRelationInput[]
    cursor?: DetalleServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleServicioScalarFieldEnum | DetalleServicioScalarFieldEnum[]
  }


  /**
   * Servicio without action
   */
  export type ServicioDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServicioInclude<ExtArgs> | null
  }



  /**
   * Model additionalPayments
   */

  export type AggregateAdditionalPayments = {
    _count: AdditionalPaymentsCountAggregateOutputType | null
    _avg: AdditionalPaymentsAvgAggregateOutputType | null
    _sum: AdditionalPaymentsSumAggregateOutputType | null
    _min: AdditionalPaymentsMinAggregateOutputType | null
    _max: AdditionalPaymentsMaxAggregateOutputType | null
  }

  export type AdditionalPaymentsAvgAggregateOutputType = {
    mount: number | null
  }

  export type AdditionalPaymentsSumAggregateOutputType = {
    mount: number | null
  }

  export type AdditionalPaymentsMinAggregateOutputType = {
    id: string | null
    name: string | null
    mount: number | null
    ticketServicioId: string | null
  }

  export type AdditionalPaymentsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mount: number | null
    ticketServicioId: string | null
  }

  export type AdditionalPaymentsCountAggregateOutputType = {
    id: number
    name: number
    mount: number
    ticketServicioId: number
    _all: number
  }


  export type AdditionalPaymentsAvgAggregateInputType = {
    mount?: true
  }

  export type AdditionalPaymentsSumAggregateInputType = {
    mount?: true
  }

  export type AdditionalPaymentsMinAggregateInputType = {
    id?: true
    name?: true
    mount?: true
    ticketServicioId?: true
  }

  export type AdditionalPaymentsMaxAggregateInputType = {
    id?: true
    name?: true
    mount?: true
    ticketServicioId?: true
  }

  export type AdditionalPaymentsCountAggregateInputType = {
    id?: true
    name?: true
    mount?: true
    ticketServicioId?: true
    _all?: true
  }

  export type AdditionalPaymentsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which additionalPayments to aggregate.
     */
    where?: additionalPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of additionalPayments to fetch.
     */
    orderBy?: additionalPaymentsOrderByWithRelationInput | additionalPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: additionalPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` additionalPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` additionalPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned additionalPayments
    **/
    _count?: true | AdditionalPaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdditionalPaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdditionalPaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdditionalPaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdditionalPaymentsMaxAggregateInputType
  }

  export type GetAdditionalPaymentsAggregateType<T extends AdditionalPaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdditionalPayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdditionalPayments[P]>
      : GetScalarType<T[P], AggregateAdditionalPayments[P]>
  }




  export type additionalPaymentsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: additionalPaymentsWhereInput
    orderBy?: additionalPaymentsOrderByWithAggregationInput | additionalPaymentsOrderByWithAggregationInput[]
    by: AdditionalPaymentsScalarFieldEnum[] | AdditionalPaymentsScalarFieldEnum
    having?: additionalPaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdditionalPaymentsCountAggregateInputType | true
    _avg?: AdditionalPaymentsAvgAggregateInputType
    _sum?: AdditionalPaymentsSumAggregateInputType
    _min?: AdditionalPaymentsMinAggregateInputType
    _max?: AdditionalPaymentsMaxAggregateInputType
  }

  export type AdditionalPaymentsGroupByOutputType = {
    id: string
    name: string
    mount: number
    ticketServicioId: string
    _count: AdditionalPaymentsCountAggregateOutputType | null
    _avg: AdditionalPaymentsAvgAggregateOutputType | null
    _sum: AdditionalPaymentsSumAggregateOutputType | null
    _min: AdditionalPaymentsMinAggregateOutputType | null
    _max: AdditionalPaymentsMaxAggregateOutputType | null
  }

  type GetAdditionalPaymentsGroupByPayload<T extends additionalPaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdditionalPaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdditionalPaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdditionalPaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], AdditionalPaymentsGroupByOutputType[P]>
        }
      >
    >


  export type additionalPaymentsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mount?: boolean
    ticketServicioId?: boolean
    ticket?: boolean | TicketServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["additionalPayments"]>

  export type additionalPaymentsSelectScalar = {
    id?: boolean
    name?: boolean
    mount?: boolean
    ticketServicioId?: boolean
  }

  export type additionalPaymentsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketServicioDefaultArgs<ExtArgs>
  }


  export type $additionalPaymentsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "additionalPayments"
    objects: {
      ticket: Prisma.$TicketServicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      mount: number
      ticketServicioId: string
    }, ExtArgs["result"]["additionalPayments"]>
    composites: {}
  }


  type additionalPaymentsGetPayload<S extends boolean | null | undefined | additionalPaymentsDefaultArgs> = $Result.GetResult<Prisma.$additionalPaymentsPayload, S>

  type additionalPaymentsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<additionalPaymentsFindManyArgs, 'select' | 'include'> & {
      select?: AdditionalPaymentsCountAggregateInputType | true
    }

  export interface additionalPaymentsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['additionalPayments'], meta: { name: 'additionalPayments' } }
    /**
     * Find zero or one AdditionalPayments that matches the filter.
     * @param {additionalPaymentsFindUniqueArgs} args - Arguments to find a AdditionalPayments
     * @example
     * // Get one AdditionalPayments
     * const additionalPayments = await prisma.additionalPayments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends additionalPaymentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, additionalPaymentsFindUniqueArgs<ExtArgs>>
    ): Prisma__additionalPaymentsClient<$Result.GetResult<Prisma.$additionalPaymentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AdditionalPayments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {additionalPaymentsFindUniqueOrThrowArgs} args - Arguments to find a AdditionalPayments
     * @example
     * // Get one AdditionalPayments
     * const additionalPayments = await prisma.additionalPayments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends additionalPaymentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, additionalPaymentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__additionalPaymentsClient<$Result.GetResult<Prisma.$additionalPaymentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AdditionalPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {additionalPaymentsFindFirstArgs} args - Arguments to find a AdditionalPayments
     * @example
     * // Get one AdditionalPayments
     * const additionalPayments = await prisma.additionalPayments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends additionalPaymentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, additionalPaymentsFindFirstArgs<ExtArgs>>
    ): Prisma__additionalPaymentsClient<$Result.GetResult<Prisma.$additionalPaymentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AdditionalPayments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {additionalPaymentsFindFirstOrThrowArgs} args - Arguments to find a AdditionalPayments
     * @example
     * // Get one AdditionalPayments
     * const additionalPayments = await prisma.additionalPayments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends additionalPaymentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, additionalPaymentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__additionalPaymentsClient<$Result.GetResult<Prisma.$additionalPaymentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AdditionalPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {additionalPaymentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdditionalPayments
     * const additionalPayments = await prisma.additionalPayments.findMany()
     * 
     * // Get first 10 AdditionalPayments
     * const additionalPayments = await prisma.additionalPayments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const additionalPaymentsWithIdOnly = await prisma.additionalPayments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends additionalPaymentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, additionalPaymentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$additionalPaymentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AdditionalPayments.
     * @param {additionalPaymentsCreateArgs} args - Arguments to create a AdditionalPayments.
     * @example
     * // Create one AdditionalPayments
     * const AdditionalPayments = await prisma.additionalPayments.create({
     *   data: {
     *     // ... data to create a AdditionalPayments
     *   }
     * })
     * 
    **/
    create<T extends additionalPaymentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, additionalPaymentsCreateArgs<ExtArgs>>
    ): Prisma__additionalPaymentsClient<$Result.GetResult<Prisma.$additionalPaymentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AdditionalPayments.
     *     @param {additionalPaymentsCreateManyArgs} args - Arguments to create many AdditionalPayments.
     *     @example
     *     // Create many AdditionalPayments
     *     const additionalPayments = await prisma.additionalPayments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends additionalPaymentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, additionalPaymentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdditionalPayments.
     * @param {additionalPaymentsDeleteArgs} args - Arguments to delete one AdditionalPayments.
     * @example
     * // Delete one AdditionalPayments
     * const AdditionalPayments = await prisma.additionalPayments.delete({
     *   where: {
     *     // ... filter to delete one AdditionalPayments
     *   }
     * })
     * 
    **/
    delete<T extends additionalPaymentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, additionalPaymentsDeleteArgs<ExtArgs>>
    ): Prisma__additionalPaymentsClient<$Result.GetResult<Prisma.$additionalPaymentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AdditionalPayments.
     * @param {additionalPaymentsUpdateArgs} args - Arguments to update one AdditionalPayments.
     * @example
     * // Update one AdditionalPayments
     * const additionalPayments = await prisma.additionalPayments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends additionalPaymentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, additionalPaymentsUpdateArgs<ExtArgs>>
    ): Prisma__additionalPaymentsClient<$Result.GetResult<Prisma.$additionalPaymentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AdditionalPayments.
     * @param {additionalPaymentsDeleteManyArgs} args - Arguments to filter AdditionalPayments to delete.
     * @example
     * // Delete a few AdditionalPayments
     * const { count } = await prisma.additionalPayments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends additionalPaymentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, additionalPaymentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdditionalPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {additionalPaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdditionalPayments
     * const additionalPayments = await prisma.additionalPayments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends additionalPaymentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, additionalPaymentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdditionalPayments.
     * @param {additionalPaymentsUpsertArgs} args - Arguments to update or create a AdditionalPayments.
     * @example
     * // Update or create a AdditionalPayments
     * const additionalPayments = await prisma.additionalPayments.upsert({
     *   create: {
     *     // ... data to create a AdditionalPayments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdditionalPayments we want to update
     *   }
     * })
    **/
    upsert<T extends additionalPaymentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, additionalPaymentsUpsertArgs<ExtArgs>>
    ): Prisma__additionalPaymentsClient<$Result.GetResult<Prisma.$additionalPaymentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more AdditionalPayments that matches the filter.
     * @param {additionalPaymentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const additionalPayments = await prisma.additionalPayments.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: additionalPaymentsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AdditionalPayments.
     * @param {additionalPaymentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const additionalPayments = await prisma.additionalPayments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: additionalPaymentsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of AdditionalPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {additionalPaymentsCountArgs} args - Arguments to filter AdditionalPayments to count.
     * @example
     * // Count the number of AdditionalPayments
     * const count = await prisma.additionalPayments.count({
     *   where: {
     *     // ... the filter for the AdditionalPayments we want to count
     *   }
     * })
    **/
    count<T extends additionalPaymentsCountArgs>(
      args?: Subset<T, additionalPaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdditionalPaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdditionalPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalPaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdditionalPaymentsAggregateArgs>(args: Subset<T, AdditionalPaymentsAggregateArgs>): Prisma.PrismaPromise<GetAdditionalPaymentsAggregateType<T>>

    /**
     * Group by AdditionalPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {additionalPaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends additionalPaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: additionalPaymentsGroupByArgs['orderBy'] }
        : { orderBy?: additionalPaymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, additionalPaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdditionalPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the additionalPayments model
   */
  readonly fields: additionalPaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for additionalPayments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__additionalPaymentsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ticket<T extends TicketServicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketServicioDefaultArgs<ExtArgs>>): Prisma__TicketServicioClient<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the additionalPayments model
   */ 
  interface additionalPaymentsFieldRefs {
    readonly id: FieldRef<"additionalPayments", 'String'>
    readonly name: FieldRef<"additionalPayments", 'String'>
    readonly mount: FieldRef<"additionalPayments", 'Float'>
    readonly ticketServicioId: FieldRef<"additionalPayments", 'String'>
  }
    

  // Custom InputTypes

  /**
   * additionalPayments findUnique
   */
  export type additionalPaymentsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the additionalPayments
     */
    select?: additionalPaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: additionalPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which additionalPayments to fetch.
     */
    where: additionalPaymentsWhereUniqueInput
  }


  /**
   * additionalPayments findUniqueOrThrow
   */
  export type additionalPaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the additionalPayments
     */
    select?: additionalPaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: additionalPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which additionalPayments to fetch.
     */
    where: additionalPaymentsWhereUniqueInput
  }


  /**
   * additionalPayments findFirst
   */
  export type additionalPaymentsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the additionalPayments
     */
    select?: additionalPaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: additionalPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which additionalPayments to fetch.
     */
    where?: additionalPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of additionalPayments to fetch.
     */
    orderBy?: additionalPaymentsOrderByWithRelationInput | additionalPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for additionalPayments.
     */
    cursor?: additionalPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` additionalPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` additionalPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of additionalPayments.
     */
    distinct?: AdditionalPaymentsScalarFieldEnum | AdditionalPaymentsScalarFieldEnum[]
  }


  /**
   * additionalPayments findFirstOrThrow
   */
  export type additionalPaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the additionalPayments
     */
    select?: additionalPaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: additionalPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which additionalPayments to fetch.
     */
    where?: additionalPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of additionalPayments to fetch.
     */
    orderBy?: additionalPaymentsOrderByWithRelationInput | additionalPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for additionalPayments.
     */
    cursor?: additionalPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` additionalPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` additionalPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of additionalPayments.
     */
    distinct?: AdditionalPaymentsScalarFieldEnum | AdditionalPaymentsScalarFieldEnum[]
  }


  /**
   * additionalPayments findMany
   */
  export type additionalPaymentsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the additionalPayments
     */
    select?: additionalPaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: additionalPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which additionalPayments to fetch.
     */
    where?: additionalPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of additionalPayments to fetch.
     */
    orderBy?: additionalPaymentsOrderByWithRelationInput | additionalPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing additionalPayments.
     */
    cursor?: additionalPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` additionalPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` additionalPayments.
     */
    skip?: number
    distinct?: AdditionalPaymentsScalarFieldEnum | AdditionalPaymentsScalarFieldEnum[]
  }


  /**
   * additionalPayments create
   */
  export type additionalPaymentsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the additionalPayments
     */
    select?: additionalPaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: additionalPaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a additionalPayments.
     */
    data: XOR<additionalPaymentsCreateInput, additionalPaymentsUncheckedCreateInput>
  }


  /**
   * additionalPayments createMany
   */
  export type additionalPaymentsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many additionalPayments.
     */
    data: additionalPaymentsCreateManyInput | additionalPaymentsCreateManyInput[]
  }


  /**
   * additionalPayments update
   */
  export type additionalPaymentsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the additionalPayments
     */
    select?: additionalPaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: additionalPaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a additionalPayments.
     */
    data: XOR<additionalPaymentsUpdateInput, additionalPaymentsUncheckedUpdateInput>
    /**
     * Choose, which additionalPayments to update.
     */
    where: additionalPaymentsWhereUniqueInput
  }


  /**
   * additionalPayments updateMany
   */
  export type additionalPaymentsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update additionalPayments.
     */
    data: XOR<additionalPaymentsUpdateManyMutationInput, additionalPaymentsUncheckedUpdateManyInput>
    /**
     * Filter which additionalPayments to update
     */
    where?: additionalPaymentsWhereInput
  }


  /**
   * additionalPayments upsert
   */
  export type additionalPaymentsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the additionalPayments
     */
    select?: additionalPaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: additionalPaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the additionalPayments to update in case it exists.
     */
    where: additionalPaymentsWhereUniqueInput
    /**
     * In case the additionalPayments found by the `where` argument doesn't exist, create a new additionalPayments with this data.
     */
    create: XOR<additionalPaymentsCreateInput, additionalPaymentsUncheckedCreateInput>
    /**
     * In case the additionalPayments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<additionalPaymentsUpdateInput, additionalPaymentsUncheckedUpdateInput>
  }


  /**
   * additionalPayments delete
   */
  export type additionalPaymentsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the additionalPayments
     */
    select?: additionalPaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: additionalPaymentsInclude<ExtArgs> | null
    /**
     * Filter which additionalPayments to delete.
     */
    where: additionalPaymentsWhereUniqueInput
  }


  /**
   * additionalPayments deleteMany
   */
  export type additionalPaymentsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which additionalPayments to delete
     */
    where?: additionalPaymentsWhereInput
  }


  /**
   * additionalPayments findRaw
   */
  export type additionalPaymentsFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * additionalPayments aggregateRaw
   */
  export type additionalPaymentsAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * additionalPayments without action
   */
  export type additionalPaymentsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the additionalPayments
     */
    select?: additionalPaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: additionalPaymentsInclude<ExtArgs> | null
  }



  /**
   * Model DetalleServicio
   */

  export type AggregateDetalleServicio = {
    _count: DetalleServicioCountAggregateOutputType | null
    _min: DetalleServicioMinAggregateOutputType | null
    _max: DetalleServicioMaxAggregateOutputType | null
  }

  export type DetalleServicioMinAggregateOutputType = {
    id: string | null
    fichaId: string | null
    servicioId: string | null
    ticketServicioId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DetalleServicioMaxAggregateOutputType = {
    id: string | null
    fichaId: string | null
    servicioId: string | null
    ticketServicioId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DetalleServicioCountAggregateOutputType = {
    id: number
    fichaId: number
    servicioId: number
    ticketServicioId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type DetalleServicioMinAggregateInputType = {
    id?: true
    fichaId?: true
    servicioId?: true
    ticketServicioId?: true
    createAt?: true
    updateAt?: true
  }

  export type DetalleServicioMaxAggregateInputType = {
    id?: true
    fichaId?: true
    servicioId?: true
    ticketServicioId?: true
    createAt?: true
    updateAt?: true
  }

  export type DetalleServicioCountAggregateInputType = {
    id?: true
    fichaId?: true
    servicioId?: true
    ticketServicioId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type DetalleServicioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleServicio to aggregate.
     */
    where?: DetalleServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleServicios to fetch.
     */
    orderBy?: DetalleServicioOrderByWithRelationInput | DetalleServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleServicios
    **/
    _count?: true | DetalleServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleServicioMaxAggregateInputType
  }

  export type GetDetalleServicioAggregateType<T extends DetalleServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleServicio[P]>
      : GetScalarType<T[P], AggregateDetalleServicio[P]>
  }




  export type DetalleServicioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DetalleServicioWhereInput
    orderBy?: DetalleServicioOrderByWithAggregationInput | DetalleServicioOrderByWithAggregationInput[]
    by: DetalleServicioScalarFieldEnum[] | DetalleServicioScalarFieldEnum
    having?: DetalleServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleServicioCountAggregateInputType | true
    _min?: DetalleServicioMinAggregateInputType
    _max?: DetalleServicioMaxAggregateInputType
  }

  export type DetalleServicioGroupByOutputType = {
    id: string
    fichaId: string
    servicioId: string
    ticketServicioId: string
    createAt: Date
    updateAt: Date
    _count: DetalleServicioCountAggregateOutputType | null
    _min: DetalleServicioMinAggregateOutputType | null
    _max: DetalleServicioMaxAggregateOutputType | null
  }

  type GetDetalleServicioGroupByPayload<T extends DetalleServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleServicioGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleServicioGroupByOutputType[P]>
        }
      >
    >


  export type DetalleServicioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fichaId?: boolean
    servicioId?: boolean
    ticketServicioId?: boolean
    createAt?: boolean
    updateAt?: boolean
    ficha?: boolean | FichaDefaultArgs<ExtArgs>
    ticketServicio?: boolean | TicketServicioDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleServicio"]>

  export type DetalleServicioSelectScalar = {
    id?: boolean
    fichaId?: boolean
    servicioId?: boolean
    ticketServicioId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type DetalleServicioInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ficha?: boolean | FichaDefaultArgs<ExtArgs>
    ticketServicio?: boolean | TicketServicioDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }


  export type $DetalleServicioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "DetalleServicio"
    objects: {
      ficha: Prisma.$FichaPayload<ExtArgs>
      ticketServicio: Prisma.$TicketServicioPayload<ExtArgs>
      servicio: Prisma.$ServicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      fichaId: string
      servicioId: string
      ticketServicioId: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["detalleServicio"]>
    composites: {}
  }


  type DetalleServicioGetPayload<S extends boolean | null | undefined | DetalleServicioDefaultArgs> = $Result.GetResult<Prisma.$DetalleServicioPayload, S>

  type DetalleServicioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DetalleServicioFindManyArgs, 'select' | 'include'> & {
      select?: DetalleServicioCountAggregateInputType | true
    }

  export interface DetalleServicioDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleServicio'], meta: { name: 'DetalleServicio' } }
    /**
     * Find zero or one DetalleServicio that matches the filter.
     * @param {DetalleServicioFindUniqueArgs} args - Arguments to find a DetalleServicio
     * @example
     * // Get one DetalleServicio
     * const detalleServicio = await prisma.detalleServicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DetalleServicioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleServicioFindUniqueArgs<ExtArgs>>
    ): Prisma__DetalleServicioClient<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DetalleServicio that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DetalleServicioFindUniqueOrThrowArgs} args - Arguments to find a DetalleServicio
     * @example
     * // Get one DetalleServicio
     * const detalleServicio = await prisma.detalleServicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DetalleServicioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleServicioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DetalleServicioClient<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DetalleServicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleServicioFindFirstArgs} args - Arguments to find a DetalleServicio
     * @example
     * // Get one DetalleServicio
     * const detalleServicio = await prisma.detalleServicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DetalleServicioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleServicioFindFirstArgs<ExtArgs>>
    ): Prisma__DetalleServicioClient<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DetalleServicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleServicioFindFirstOrThrowArgs} args - Arguments to find a DetalleServicio
     * @example
     * // Get one DetalleServicio
     * const detalleServicio = await prisma.detalleServicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DetalleServicioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleServicioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DetalleServicioClient<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DetalleServicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleServicioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleServicios
     * const detalleServicios = await prisma.detalleServicio.findMany()
     * 
     * // Get first 10 DetalleServicios
     * const detalleServicios = await prisma.detalleServicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleServicioWithIdOnly = await prisma.detalleServicio.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DetalleServicioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleServicioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DetalleServicio.
     * @param {DetalleServicioCreateArgs} args - Arguments to create a DetalleServicio.
     * @example
     * // Create one DetalleServicio
     * const DetalleServicio = await prisma.detalleServicio.create({
     *   data: {
     *     // ... data to create a DetalleServicio
     *   }
     * })
     * 
    **/
    create<T extends DetalleServicioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleServicioCreateArgs<ExtArgs>>
    ): Prisma__DetalleServicioClient<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DetalleServicios.
     *     @param {DetalleServicioCreateManyArgs} args - Arguments to create many DetalleServicios.
     *     @example
     *     // Create many DetalleServicios
     *     const detalleServicio = await prisma.detalleServicio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DetalleServicioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleServicioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetalleServicio.
     * @param {DetalleServicioDeleteArgs} args - Arguments to delete one DetalleServicio.
     * @example
     * // Delete one DetalleServicio
     * const DetalleServicio = await prisma.detalleServicio.delete({
     *   where: {
     *     // ... filter to delete one DetalleServicio
     *   }
     * })
     * 
    **/
    delete<T extends DetalleServicioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleServicioDeleteArgs<ExtArgs>>
    ): Prisma__DetalleServicioClient<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DetalleServicio.
     * @param {DetalleServicioUpdateArgs} args - Arguments to update one DetalleServicio.
     * @example
     * // Update one DetalleServicio
     * const detalleServicio = await prisma.detalleServicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DetalleServicioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleServicioUpdateArgs<ExtArgs>>
    ): Prisma__DetalleServicioClient<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DetalleServicios.
     * @param {DetalleServicioDeleteManyArgs} args - Arguments to filter DetalleServicios to delete.
     * @example
     * // Delete a few DetalleServicios
     * const { count } = await prisma.detalleServicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DetalleServicioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleServicioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleServicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleServicios
     * const detalleServicio = await prisma.detalleServicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DetalleServicioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleServicioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetalleServicio.
     * @param {DetalleServicioUpsertArgs} args - Arguments to update or create a DetalleServicio.
     * @example
     * // Update or create a DetalleServicio
     * const detalleServicio = await prisma.detalleServicio.upsert({
     *   create: {
     *     // ... data to create a DetalleServicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleServicio we want to update
     *   }
     * })
    **/
    upsert<T extends DetalleServicioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleServicioUpsertArgs<ExtArgs>>
    ): Prisma__DetalleServicioClient<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more DetalleServicios that matches the filter.
     * @param {DetalleServicioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const detalleServicio = await prisma.detalleServicio.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DetalleServicioFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DetalleServicio.
     * @param {DetalleServicioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const detalleServicio = await prisma.detalleServicio.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DetalleServicioAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of DetalleServicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleServicioCountArgs} args - Arguments to filter DetalleServicios to count.
     * @example
     * // Count the number of DetalleServicios
     * const count = await prisma.detalleServicio.count({
     *   where: {
     *     // ... the filter for the DetalleServicios we want to count
     *   }
     * })
    **/
    count<T extends DetalleServicioCountArgs>(
      args?: Subset<T, DetalleServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleServicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleServicioAggregateArgs>(args: Subset<T, DetalleServicioAggregateArgs>): Prisma.PrismaPromise<GetDetalleServicioAggregateType<T>>

    /**
     * Group by DetalleServicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleServicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalleServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleServicioGroupByArgs['orderBy'] }
        : { orderBy?: DetalleServicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalleServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleServicio model
   */
  readonly fields: DetalleServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleServicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleServicioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ficha<T extends FichaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FichaDefaultArgs<ExtArgs>>): Prisma__FichaClient<$Result.GetResult<Prisma.$FichaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ticketServicio<T extends TicketServicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketServicioDefaultArgs<ExtArgs>>): Prisma__TicketServicioClient<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    servicio<T extends ServicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicioDefaultArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DetalleServicio model
   */ 
  interface DetalleServicioFieldRefs {
    readonly id: FieldRef<"DetalleServicio", 'String'>
    readonly fichaId: FieldRef<"DetalleServicio", 'String'>
    readonly servicioId: FieldRef<"DetalleServicio", 'String'>
    readonly ticketServicioId: FieldRef<"DetalleServicio", 'String'>
    readonly createAt: FieldRef<"DetalleServicio", 'DateTime'>
    readonly updateAt: FieldRef<"DetalleServicio", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * DetalleServicio findUnique
   */
  export type DetalleServicioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    /**
     * Filter, which DetalleServicio to fetch.
     */
    where: DetalleServicioWhereUniqueInput
  }


  /**
   * DetalleServicio findUniqueOrThrow
   */
  export type DetalleServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    /**
     * Filter, which DetalleServicio to fetch.
     */
    where: DetalleServicioWhereUniqueInput
  }


  /**
   * DetalleServicio findFirst
   */
  export type DetalleServicioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    /**
     * Filter, which DetalleServicio to fetch.
     */
    where?: DetalleServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleServicios to fetch.
     */
    orderBy?: DetalleServicioOrderByWithRelationInput | DetalleServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleServicios.
     */
    cursor?: DetalleServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleServicios.
     */
    distinct?: DetalleServicioScalarFieldEnum | DetalleServicioScalarFieldEnum[]
  }


  /**
   * DetalleServicio findFirstOrThrow
   */
  export type DetalleServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    /**
     * Filter, which DetalleServicio to fetch.
     */
    where?: DetalleServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleServicios to fetch.
     */
    orderBy?: DetalleServicioOrderByWithRelationInput | DetalleServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleServicios.
     */
    cursor?: DetalleServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleServicios.
     */
    distinct?: DetalleServicioScalarFieldEnum | DetalleServicioScalarFieldEnum[]
  }


  /**
   * DetalleServicio findMany
   */
  export type DetalleServicioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    /**
     * Filter, which DetalleServicios to fetch.
     */
    where?: DetalleServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleServicios to fetch.
     */
    orderBy?: DetalleServicioOrderByWithRelationInput | DetalleServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleServicios.
     */
    cursor?: DetalleServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleServicios.
     */
    skip?: number
    distinct?: DetalleServicioScalarFieldEnum | DetalleServicioScalarFieldEnum[]
  }


  /**
   * DetalleServicio create
   */
  export type DetalleServicioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleServicio.
     */
    data: XOR<DetalleServicioCreateInput, DetalleServicioUncheckedCreateInput>
  }


  /**
   * DetalleServicio createMany
   */
  export type DetalleServicioCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleServicios.
     */
    data: DetalleServicioCreateManyInput | DetalleServicioCreateManyInput[]
  }


  /**
   * DetalleServicio update
   */
  export type DetalleServicioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleServicio.
     */
    data: XOR<DetalleServicioUpdateInput, DetalleServicioUncheckedUpdateInput>
    /**
     * Choose, which DetalleServicio to update.
     */
    where: DetalleServicioWhereUniqueInput
  }


  /**
   * DetalleServicio updateMany
   */
  export type DetalleServicioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleServicios.
     */
    data: XOR<DetalleServicioUpdateManyMutationInput, DetalleServicioUncheckedUpdateManyInput>
    /**
     * Filter which DetalleServicios to update
     */
    where?: DetalleServicioWhereInput
  }


  /**
   * DetalleServicio upsert
   */
  export type DetalleServicioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleServicio to update in case it exists.
     */
    where: DetalleServicioWhereUniqueInput
    /**
     * In case the DetalleServicio found by the `where` argument doesn't exist, create a new DetalleServicio with this data.
     */
    create: XOR<DetalleServicioCreateInput, DetalleServicioUncheckedCreateInput>
    /**
     * In case the DetalleServicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleServicioUpdateInput, DetalleServicioUncheckedUpdateInput>
  }


  /**
   * DetalleServicio delete
   */
  export type DetalleServicioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    /**
     * Filter which DetalleServicio to delete.
     */
    where: DetalleServicioWhereUniqueInput
  }


  /**
   * DetalleServicio deleteMany
   */
  export type DetalleServicioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleServicios to delete
     */
    where?: DetalleServicioWhereInput
  }


  /**
   * DetalleServicio findRaw
   */
  export type DetalleServicioFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * DetalleServicio aggregateRaw
   */
  export type DetalleServicioAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * DetalleServicio without action
   */
  export type DetalleServicioDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
  }



  /**
   * Model DetalleVenta
   */

  export type AggregateDetalleVenta = {
    _count: DetalleVentaCountAggregateOutputType | null
    _avg: DetalleVentaAvgAggregateOutputType | null
    _sum: DetalleVentaSumAggregateOutputType | null
    _min: DetalleVentaMinAggregateOutputType | null
    _max: DetalleVentaMaxAggregateOutputType | null
  }

  export type DetalleVentaAvgAggregateOutputType = {
    units: number | null
  }

  export type DetalleVentaSumAggregateOutputType = {
    units: number | null
  }

  export type DetalleVentaMinAggregateOutputType = {
    id: string | null
    productoId: string | null
    usuarioId: string | null
    ticketVentaId: string | null
    units: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DetalleVentaMaxAggregateOutputType = {
    id: string | null
    productoId: string | null
    usuarioId: string | null
    ticketVentaId: string | null
    units: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DetalleVentaCountAggregateOutputType = {
    id: number
    productoId: number
    usuarioId: number
    ticketVentaId: number
    units: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type DetalleVentaAvgAggregateInputType = {
    units?: true
  }

  export type DetalleVentaSumAggregateInputType = {
    units?: true
  }

  export type DetalleVentaMinAggregateInputType = {
    id?: true
    productoId?: true
    usuarioId?: true
    ticketVentaId?: true
    units?: true
    createAt?: true
    updateAt?: true
  }

  export type DetalleVentaMaxAggregateInputType = {
    id?: true
    productoId?: true
    usuarioId?: true
    ticketVentaId?: true
    units?: true
    createAt?: true
    updateAt?: true
  }

  export type DetalleVentaCountAggregateInputType = {
    id?: true
    productoId?: true
    usuarioId?: true
    ticketVentaId?: true
    units?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type DetalleVentaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleVenta to aggregate.
     */
    where?: DetalleVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleVentas to fetch.
     */
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleVentas
    **/
    _count?: true | DetalleVentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleVentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleVentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleVentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleVentaMaxAggregateInputType
  }

  export type GetDetalleVentaAggregateType<T extends DetalleVentaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleVenta[P]>
      : GetScalarType<T[P], AggregateDetalleVenta[P]>
  }




  export type DetalleVentaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DetalleVentaWhereInput
    orderBy?: DetalleVentaOrderByWithAggregationInput | DetalleVentaOrderByWithAggregationInput[]
    by: DetalleVentaScalarFieldEnum[] | DetalleVentaScalarFieldEnum
    having?: DetalleVentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleVentaCountAggregateInputType | true
    _avg?: DetalleVentaAvgAggregateInputType
    _sum?: DetalleVentaSumAggregateInputType
    _min?: DetalleVentaMinAggregateInputType
    _max?: DetalleVentaMaxAggregateInputType
  }

  export type DetalleVentaGroupByOutputType = {
    id: string
    productoId: string
    usuarioId: string
    ticketVentaId: string
    units: number
    createAt: Date
    updateAt: Date
    _count: DetalleVentaCountAggregateOutputType | null
    _avg: DetalleVentaAvgAggregateOutputType | null
    _sum: DetalleVentaSumAggregateOutputType | null
    _min: DetalleVentaMinAggregateOutputType | null
    _max: DetalleVentaMaxAggregateOutputType | null
  }

  type GetDetalleVentaGroupByPayload<T extends DetalleVentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleVentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleVentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleVentaGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleVentaGroupByOutputType[P]>
        }
      >
    >


  export type DetalleVentaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoId?: boolean
    usuarioId?: boolean
    ticketVentaId?: boolean
    units?: boolean
    createAt?: boolean
    updateAt?: boolean
    ticketVenta?: boolean | TicketVentaDefaultArgs<ExtArgs>
    Usuario?: boolean | DetalleVenta$UsuarioArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleVenta"]>

  export type DetalleVentaSelectScalar = {
    id?: boolean
    productoId?: boolean
    usuarioId?: boolean
    ticketVentaId?: boolean
    units?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type DetalleVentaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ticketVenta?: boolean | TicketVentaDefaultArgs<ExtArgs>
    Usuario?: boolean | DetalleVenta$UsuarioArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }


  export type $DetalleVentaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "DetalleVenta"
    objects: {
      ticketVenta: Prisma.$TicketVentaPayload<ExtArgs>
      Usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      productoId: string
      usuarioId: string
      ticketVentaId: string
      units: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["detalleVenta"]>
    composites: {}
  }


  type DetalleVentaGetPayload<S extends boolean | null | undefined | DetalleVentaDefaultArgs> = $Result.GetResult<Prisma.$DetalleVentaPayload, S>

  type DetalleVentaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DetalleVentaFindManyArgs, 'select' | 'include'> & {
      select?: DetalleVentaCountAggregateInputType | true
    }

  export interface DetalleVentaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleVenta'], meta: { name: 'DetalleVenta' } }
    /**
     * Find zero or one DetalleVenta that matches the filter.
     * @param {DetalleVentaFindUniqueArgs} args - Arguments to find a DetalleVenta
     * @example
     * // Get one DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DetalleVentaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleVentaFindUniqueArgs<ExtArgs>>
    ): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DetalleVenta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DetalleVentaFindUniqueOrThrowArgs} args - Arguments to find a DetalleVenta
     * @example
     * // Get one DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DetalleVentaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleVentaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DetalleVenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaFindFirstArgs} args - Arguments to find a DetalleVenta
     * @example
     * // Get one DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DetalleVentaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleVentaFindFirstArgs<ExtArgs>>
    ): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DetalleVenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaFindFirstOrThrowArgs} args - Arguments to find a DetalleVenta
     * @example
     * // Get one DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DetalleVentaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleVentaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DetalleVentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleVentas
     * const detalleVentas = await prisma.detalleVenta.findMany()
     * 
     * // Get first 10 DetalleVentas
     * const detalleVentas = await prisma.detalleVenta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleVentaWithIdOnly = await prisma.detalleVenta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DetalleVentaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleVentaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DetalleVenta.
     * @param {DetalleVentaCreateArgs} args - Arguments to create a DetalleVenta.
     * @example
     * // Create one DetalleVenta
     * const DetalleVenta = await prisma.detalleVenta.create({
     *   data: {
     *     // ... data to create a DetalleVenta
     *   }
     * })
     * 
    **/
    create<T extends DetalleVentaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleVentaCreateArgs<ExtArgs>>
    ): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DetalleVentas.
     *     @param {DetalleVentaCreateManyArgs} args - Arguments to create many DetalleVentas.
     *     @example
     *     // Create many DetalleVentas
     *     const detalleVenta = await prisma.detalleVenta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DetalleVentaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleVentaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetalleVenta.
     * @param {DetalleVentaDeleteArgs} args - Arguments to delete one DetalleVenta.
     * @example
     * // Delete one DetalleVenta
     * const DetalleVenta = await prisma.detalleVenta.delete({
     *   where: {
     *     // ... filter to delete one DetalleVenta
     *   }
     * })
     * 
    **/
    delete<T extends DetalleVentaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleVentaDeleteArgs<ExtArgs>>
    ): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DetalleVenta.
     * @param {DetalleVentaUpdateArgs} args - Arguments to update one DetalleVenta.
     * @example
     * // Update one DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DetalleVentaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleVentaUpdateArgs<ExtArgs>>
    ): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DetalleVentas.
     * @param {DetalleVentaDeleteManyArgs} args - Arguments to filter DetalleVentas to delete.
     * @example
     * // Delete a few DetalleVentas
     * const { count } = await prisma.detalleVenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DetalleVentaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetalleVentaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleVentas
     * const detalleVenta = await prisma.detalleVenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DetalleVentaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleVentaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetalleVenta.
     * @param {DetalleVentaUpsertArgs} args - Arguments to update or create a DetalleVenta.
     * @example
     * // Update or create a DetalleVenta
     * const detalleVenta = await prisma.detalleVenta.upsert({
     *   create: {
     *     // ... data to create a DetalleVenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleVenta we want to update
     *   }
     * })
    **/
    upsert<T extends DetalleVentaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DetalleVentaUpsertArgs<ExtArgs>>
    ): Prisma__DetalleVentaClient<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more DetalleVentas that matches the filter.
     * @param {DetalleVentaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const detalleVenta = await prisma.detalleVenta.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DetalleVentaFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DetalleVenta.
     * @param {DetalleVentaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const detalleVenta = await prisma.detalleVenta.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DetalleVentaAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of DetalleVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaCountArgs} args - Arguments to filter DetalleVentas to count.
     * @example
     * // Count the number of DetalleVentas
     * const count = await prisma.detalleVenta.count({
     *   where: {
     *     // ... the filter for the DetalleVentas we want to count
     *   }
     * })
    **/
    count<T extends DetalleVentaCountArgs>(
      args?: Subset<T, DetalleVentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleVentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleVentaAggregateArgs>(args: Subset<T, DetalleVentaAggregateArgs>): Prisma.PrismaPromise<GetDetalleVentaAggregateType<T>>

    /**
     * Group by DetalleVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleVentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalleVentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleVentaGroupByArgs['orderBy'] }
        : { orderBy?: DetalleVentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalleVentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleVenta model
   */
  readonly fields: DetalleVentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleVenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleVentaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ticketVenta<T extends TicketVentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketVentaDefaultArgs<ExtArgs>>): Prisma__TicketVentaClient<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Usuario<T extends DetalleVenta$UsuarioArgs<ExtArgs> = {}>(args?: Subset<T, DetalleVenta$UsuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DetalleVenta model
   */ 
  interface DetalleVentaFieldRefs {
    readonly id: FieldRef<"DetalleVenta", 'String'>
    readonly productoId: FieldRef<"DetalleVenta", 'String'>
    readonly usuarioId: FieldRef<"DetalleVenta", 'String'>
    readonly ticketVentaId: FieldRef<"DetalleVenta", 'String'>
    readonly units: FieldRef<"DetalleVenta", 'Int'>
    readonly createAt: FieldRef<"DetalleVenta", 'DateTime'>
    readonly updateAt: FieldRef<"DetalleVenta", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * DetalleVenta findUnique
   */
  export type DetalleVentaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleVenta to fetch.
     */
    where: DetalleVentaWhereUniqueInput
  }


  /**
   * DetalleVenta findUniqueOrThrow
   */
  export type DetalleVentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleVenta to fetch.
     */
    where: DetalleVentaWhereUniqueInput
  }


  /**
   * DetalleVenta findFirst
   */
  export type DetalleVentaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleVenta to fetch.
     */
    where?: DetalleVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleVentas to fetch.
     */
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleVentas.
     */
    cursor?: DetalleVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleVentas.
     */
    distinct?: DetalleVentaScalarFieldEnum | DetalleVentaScalarFieldEnum[]
  }


  /**
   * DetalleVenta findFirstOrThrow
   */
  export type DetalleVentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleVenta to fetch.
     */
    where?: DetalleVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleVentas to fetch.
     */
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleVentas.
     */
    cursor?: DetalleVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleVentas.
     */
    distinct?: DetalleVentaScalarFieldEnum | DetalleVentaScalarFieldEnum[]
  }


  /**
   * DetalleVenta findMany
   */
  export type DetalleVentaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleVentas to fetch.
     */
    where?: DetalleVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleVentas to fetch.
     */
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleVentas.
     */
    cursor?: DetalleVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleVentas.
     */
    skip?: number
    distinct?: DetalleVentaScalarFieldEnum | DetalleVentaScalarFieldEnum[]
  }


  /**
   * DetalleVenta create
   */
  export type DetalleVentaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleVenta.
     */
    data: XOR<DetalleVentaCreateInput, DetalleVentaUncheckedCreateInput>
  }


  /**
   * DetalleVenta createMany
   */
  export type DetalleVentaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleVentas.
     */
    data: DetalleVentaCreateManyInput | DetalleVentaCreateManyInput[]
  }


  /**
   * DetalleVenta update
   */
  export type DetalleVentaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleVenta.
     */
    data: XOR<DetalleVentaUpdateInput, DetalleVentaUncheckedUpdateInput>
    /**
     * Choose, which DetalleVenta to update.
     */
    where: DetalleVentaWhereUniqueInput
  }


  /**
   * DetalleVenta updateMany
   */
  export type DetalleVentaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleVentas.
     */
    data: XOR<DetalleVentaUpdateManyMutationInput, DetalleVentaUncheckedUpdateManyInput>
    /**
     * Filter which DetalleVentas to update
     */
    where?: DetalleVentaWhereInput
  }


  /**
   * DetalleVenta upsert
   */
  export type DetalleVentaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleVenta to update in case it exists.
     */
    where: DetalleVentaWhereUniqueInput
    /**
     * In case the DetalleVenta found by the `where` argument doesn't exist, create a new DetalleVenta with this data.
     */
    create: XOR<DetalleVentaCreateInput, DetalleVentaUncheckedCreateInput>
    /**
     * In case the DetalleVenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleVentaUpdateInput, DetalleVentaUncheckedUpdateInput>
  }


  /**
   * DetalleVenta delete
   */
  export type DetalleVentaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    /**
     * Filter which DetalleVenta to delete.
     */
    where: DetalleVentaWhereUniqueInput
  }


  /**
   * DetalleVenta deleteMany
   */
  export type DetalleVentaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleVentas to delete
     */
    where?: DetalleVentaWhereInput
  }


  /**
   * DetalleVenta findRaw
   */
  export type DetalleVentaFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * DetalleVenta aggregateRaw
   */
  export type DetalleVentaAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * DetalleVenta.Usuario
   */
  export type DetalleVenta$UsuarioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }


  /**
   * DetalleVenta without action
   */
  export type DetalleVentaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
  }



  /**
   * Model TicketServicio
   */

  export type AggregateTicketServicio = {
    _count: TicketServicioCountAggregateOutputType | null
    _avg: TicketServicioAvgAggregateOutputType | null
    _sum: TicketServicioSumAggregateOutputType | null
    _min: TicketServicioMinAggregateOutputType | null
    _max: TicketServicioMaxAggregateOutputType | null
  }

  export type TicketServicioAvgAggregateOutputType = {
    amount: number | null
  }

  export type TicketServicioSumAggregateOutputType = {
    amount: number | null
  }

  export type TicketServicioMinAggregateOutputType = {
    id: string | null
    clientName: string | null
    clientDni: string | null
    clientPhoneNumber: string | null
    clientAddress: string | null
    clientEmail: string | null
    status: boolean | null
    amount: number | null
    medioPago: string | null
    description: string | null
    usuarioId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type TicketServicioMaxAggregateOutputType = {
    id: string | null
    clientName: string | null
    clientDni: string | null
    clientPhoneNumber: string | null
    clientAddress: string | null
    clientEmail: string | null
    status: boolean | null
    amount: number | null
    medioPago: string | null
    description: string | null
    usuarioId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type TicketServicioCountAggregateOutputType = {
    id: number
    clientName: number
    clientDni: number
    clientPhoneNumber: number
    clientAddress: number
    clientEmail: number
    status: number
    amount: number
    medioPago: number
    description: number
    usuarioId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type TicketServicioAvgAggregateInputType = {
    amount?: true
  }

  export type TicketServicioSumAggregateInputType = {
    amount?: true
  }

  export type TicketServicioMinAggregateInputType = {
    id?: true
    clientName?: true
    clientDni?: true
    clientPhoneNumber?: true
    clientAddress?: true
    clientEmail?: true
    status?: true
    amount?: true
    medioPago?: true
    description?: true
    usuarioId?: true
    createAt?: true
    updateAt?: true
  }

  export type TicketServicioMaxAggregateInputType = {
    id?: true
    clientName?: true
    clientDni?: true
    clientPhoneNumber?: true
    clientAddress?: true
    clientEmail?: true
    status?: true
    amount?: true
    medioPago?: true
    description?: true
    usuarioId?: true
    createAt?: true
    updateAt?: true
  }

  export type TicketServicioCountAggregateInputType = {
    id?: true
    clientName?: true
    clientDni?: true
    clientPhoneNumber?: true
    clientAddress?: true
    clientEmail?: true
    status?: true
    amount?: true
    medioPago?: true
    description?: true
    usuarioId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type TicketServicioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketServicio to aggregate.
     */
    where?: TicketServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketServicios to fetch.
     */
    orderBy?: TicketServicioOrderByWithRelationInput | TicketServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketServicios
    **/
    _count?: true | TicketServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketServicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketServicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketServicioMaxAggregateInputType
  }

  export type GetTicketServicioAggregateType<T extends TicketServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketServicio[P]>
      : GetScalarType<T[P], AggregateTicketServicio[P]>
  }




  export type TicketServicioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TicketServicioWhereInput
    orderBy?: TicketServicioOrderByWithAggregationInput | TicketServicioOrderByWithAggregationInput[]
    by: TicketServicioScalarFieldEnum[] | TicketServicioScalarFieldEnum
    having?: TicketServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketServicioCountAggregateInputType | true
    _avg?: TicketServicioAvgAggregateInputType
    _sum?: TicketServicioSumAggregateInputType
    _min?: TicketServicioMinAggregateInputType
    _max?: TicketServicioMaxAggregateInputType
  }

  export type TicketServicioGroupByOutputType = {
    id: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail: string
    status: boolean
    amount: number
    medioPago: string
    description: string
    usuarioId: string
    createAt: Date
    updateAt: Date
    _count: TicketServicioCountAggregateOutputType | null
    _avg: TicketServicioAvgAggregateOutputType | null
    _sum: TicketServicioSumAggregateOutputType | null
    _min: TicketServicioMinAggregateOutputType | null
    _max: TicketServicioMaxAggregateOutputType | null
  }

  type GetTicketServicioGroupByPayload<T extends TicketServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketServicioGroupByOutputType[P]>
            : GetScalarType<T[P], TicketServicioGroupByOutputType[P]>
        }
      >
    >


  export type TicketServicioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    clientDni?: boolean
    clientPhoneNumber?: boolean
    clientAddress?: boolean
    clientEmail?: boolean
    status?: boolean
    amount?: boolean
    medioPago?: boolean
    description?: boolean
    usuarioId?: boolean
    createAt?: boolean
    updateAt?: boolean
    tecnico?: boolean | UsuarioDefaultArgs<ExtArgs>
    DetalleServicio?: boolean | TicketServicio$DetalleServicioArgs<ExtArgs>
    additionalPayments?: boolean | TicketServicio$additionalPaymentsArgs<ExtArgs>
    _count?: boolean | TicketServicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketServicio"]>

  export type TicketServicioSelectScalar = {
    id?: boolean
    clientName?: boolean
    clientDni?: boolean
    clientPhoneNumber?: boolean
    clientAddress?: boolean
    clientEmail?: boolean
    status?: boolean
    amount?: boolean
    medioPago?: boolean
    description?: boolean
    usuarioId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type TicketServicioInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tecnico?: boolean | UsuarioDefaultArgs<ExtArgs>
    DetalleServicio?: boolean | TicketServicio$DetalleServicioArgs<ExtArgs>
    additionalPayments?: boolean | TicketServicio$additionalPaymentsArgs<ExtArgs>
    _count?: boolean | TicketServicioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TicketServicioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "TicketServicio"
    objects: {
      tecnico: Prisma.$UsuarioPayload<ExtArgs>
      DetalleServicio: Prisma.$DetalleServicioPayload<ExtArgs> | null
      additionalPayments: Prisma.$additionalPaymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      clientName: string
      clientDni: string
      clientPhoneNumber: string
      clientAddress: string
      clientEmail: string
      status: boolean
      amount: number
      medioPago: string
      description: string
      usuarioId: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["ticketServicio"]>
    composites: {}
  }


  type TicketServicioGetPayload<S extends boolean | null | undefined | TicketServicioDefaultArgs> = $Result.GetResult<Prisma.$TicketServicioPayload, S>

  type TicketServicioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TicketServicioFindManyArgs, 'select' | 'include'> & {
      select?: TicketServicioCountAggregateInputType | true
    }

  export interface TicketServicioDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketServicio'], meta: { name: 'TicketServicio' } }
    /**
     * Find zero or one TicketServicio that matches the filter.
     * @param {TicketServicioFindUniqueArgs} args - Arguments to find a TicketServicio
     * @example
     * // Get one TicketServicio
     * const ticketServicio = await prisma.ticketServicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketServicioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TicketServicioFindUniqueArgs<ExtArgs>>
    ): Prisma__TicketServicioClient<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TicketServicio that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TicketServicioFindUniqueOrThrowArgs} args - Arguments to find a TicketServicio
     * @example
     * // Get one TicketServicio
     * const ticketServicio = await prisma.ticketServicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketServicioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketServicioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TicketServicioClient<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TicketServicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketServicioFindFirstArgs} args - Arguments to find a TicketServicio
     * @example
     * // Get one TicketServicio
     * const ticketServicio = await prisma.ticketServicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketServicioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketServicioFindFirstArgs<ExtArgs>>
    ): Prisma__TicketServicioClient<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TicketServicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketServicioFindFirstOrThrowArgs} args - Arguments to find a TicketServicio
     * @example
     * // Get one TicketServicio
     * const ticketServicio = await prisma.ticketServicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketServicioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketServicioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TicketServicioClient<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TicketServicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketServicioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketServicios
     * const ticketServicios = await prisma.ticketServicio.findMany()
     * 
     * // Get first 10 TicketServicios
     * const ticketServicios = await prisma.ticketServicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketServicioWithIdOnly = await prisma.ticketServicio.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TicketServicioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketServicioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TicketServicio.
     * @param {TicketServicioCreateArgs} args - Arguments to create a TicketServicio.
     * @example
     * // Create one TicketServicio
     * const TicketServicio = await prisma.ticketServicio.create({
     *   data: {
     *     // ... data to create a TicketServicio
     *   }
     * })
     * 
    **/
    create<T extends TicketServicioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketServicioCreateArgs<ExtArgs>>
    ): Prisma__TicketServicioClient<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TicketServicios.
     *     @param {TicketServicioCreateManyArgs} args - Arguments to create many TicketServicios.
     *     @example
     *     // Create many TicketServicios
     *     const ticketServicio = await prisma.ticketServicio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TicketServicioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketServicioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TicketServicio.
     * @param {TicketServicioDeleteArgs} args - Arguments to delete one TicketServicio.
     * @example
     * // Delete one TicketServicio
     * const TicketServicio = await prisma.ticketServicio.delete({
     *   where: {
     *     // ... filter to delete one TicketServicio
     *   }
     * })
     * 
    **/
    delete<T extends TicketServicioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TicketServicioDeleteArgs<ExtArgs>>
    ): Prisma__TicketServicioClient<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TicketServicio.
     * @param {TicketServicioUpdateArgs} args - Arguments to update one TicketServicio.
     * @example
     * // Update one TicketServicio
     * const ticketServicio = await prisma.ticketServicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketServicioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketServicioUpdateArgs<ExtArgs>>
    ): Prisma__TicketServicioClient<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TicketServicios.
     * @param {TicketServicioDeleteManyArgs} args - Arguments to filter TicketServicios to delete.
     * @example
     * // Delete a few TicketServicios
     * const { count } = await prisma.ticketServicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketServicioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketServicioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketServicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketServicios
     * const ticketServicio = await prisma.ticketServicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketServicioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TicketServicioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketServicio.
     * @param {TicketServicioUpsertArgs} args - Arguments to update or create a TicketServicio.
     * @example
     * // Update or create a TicketServicio
     * const ticketServicio = await prisma.ticketServicio.upsert({
     *   create: {
     *     // ... data to create a TicketServicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketServicio we want to update
     *   }
     * })
    **/
    upsert<T extends TicketServicioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TicketServicioUpsertArgs<ExtArgs>>
    ): Prisma__TicketServicioClient<$Result.GetResult<Prisma.$TicketServicioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more TicketServicios that matches the filter.
     * @param {TicketServicioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ticketServicio = await prisma.ticketServicio.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TicketServicioFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TicketServicio.
     * @param {TicketServicioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ticketServicio = await prisma.ticketServicio.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TicketServicioAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TicketServicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketServicioCountArgs} args - Arguments to filter TicketServicios to count.
     * @example
     * // Count the number of TicketServicios
     * const count = await prisma.ticketServicio.count({
     *   where: {
     *     // ... the filter for the TicketServicios we want to count
     *   }
     * })
    **/
    count<T extends TicketServicioCountArgs>(
      args?: Subset<T, TicketServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketServicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketServicioAggregateArgs>(args: Subset<T, TicketServicioAggregateArgs>): Prisma.PrismaPromise<GetTicketServicioAggregateType<T>>

    /**
     * Group by TicketServicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketServicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketServicioGroupByArgs['orderBy'] }
        : { orderBy?: TicketServicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketServicio model
   */
  readonly fields: TicketServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketServicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketServicioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tecnico<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    DetalleServicio<T extends TicketServicio$DetalleServicioArgs<ExtArgs> = {}>(args?: Subset<T, TicketServicio$DetalleServicioArgs<ExtArgs>>): Prisma__DetalleServicioClient<$Result.GetResult<Prisma.$DetalleServicioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    additionalPayments<T extends TicketServicio$additionalPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, TicketServicio$additionalPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$additionalPaymentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TicketServicio model
   */ 
  interface TicketServicioFieldRefs {
    readonly id: FieldRef<"TicketServicio", 'String'>
    readonly clientName: FieldRef<"TicketServicio", 'String'>
    readonly clientDni: FieldRef<"TicketServicio", 'String'>
    readonly clientPhoneNumber: FieldRef<"TicketServicio", 'String'>
    readonly clientAddress: FieldRef<"TicketServicio", 'String'>
    readonly clientEmail: FieldRef<"TicketServicio", 'String'>
    readonly status: FieldRef<"TicketServicio", 'Boolean'>
    readonly amount: FieldRef<"TicketServicio", 'Float'>
    readonly medioPago: FieldRef<"TicketServicio", 'String'>
    readonly description: FieldRef<"TicketServicio", 'String'>
    readonly usuarioId: FieldRef<"TicketServicio", 'String'>
    readonly createAt: FieldRef<"TicketServicio", 'DateTime'>
    readonly updateAt: FieldRef<"TicketServicio", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TicketServicio findUnique
   */
  export type TicketServicioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicio
     */
    select?: TicketServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketServicioInclude<ExtArgs> | null
    /**
     * Filter, which TicketServicio to fetch.
     */
    where: TicketServicioWhereUniqueInput
  }


  /**
   * TicketServicio findUniqueOrThrow
   */
  export type TicketServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicio
     */
    select?: TicketServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketServicioInclude<ExtArgs> | null
    /**
     * Filter, which TicketServicio to fetch.
     */
    where: TicketServicioWhereUniqueInput
  }


  /**
   * TicketServicio findFirst
   */
  export type TicketServicioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicio
     */
    select?: TicketServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketServicioInclude<ExtArgs> | null
    /**
     * Filter, which TicketServicio to fetch.
     */
    where?: TicketServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketServicios to fetch.
     */
    orderBy?: TicketServicioOrderByWithRelationInput | TicketServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketServicios.
     */
    cursor?: TicketServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketServicios.
     */
    distinct?: TicketServicioScalarFieldEnum | TicketServicioScalarFieldEnum[]
  }


  /**
   * TicketServicio findFirstOrThrow
   */
  export type TicketServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicio
     */
    select?: TicketServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketServicioInclude<ExtArgs> | null
    /**
     * Filter, which TicketServicio to fetch.
     */
    where?: TicketServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketServicios to fetch.
     */
    orderBy?: TicketServicioOrderByWithRelationInput | TicketServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketServicios.
     */
    cursor?: TicketServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketServicios.
     */
    distinct?: TicketServicioScalarFieldEnum | TicketServicioScalarFieldEnum[]
  }


  /**
   * TicketServicio findMany
   */
  export type TicketServicioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicio
     */
    select?: TicketServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketServicioInclude<ExtArgs> | null
    /**
     * Filter, which TicketServicios to fetch.
     */
    where?: TicketServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketServicios to fetch.
     */
    orderBy?: TicketServicioOrderByWithRelationInput | TicketServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketServicios.
     */
    cursor?: TicketServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketServicios.
     */
    skip?: number
    distinct?: TicketServicioScalarFieldEnum | TicketServicioScalarFieldEnum[]
  }


  /**
   * TicketServicio create
   */
  export type TicketServicioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicio
     */
    select?: TicketServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketServicio.
     */
    data: XOR<TicketServicioCreateInput, TicketServicioUncheckedCreateInput>
  }


  /**
   * TicketServicio createMany
   */
  export type TicketServicioCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketServicios.
     */
    data: TicketServicioCreateManyInput | TicketServicioCreateManyInput[]
  }


  /**
   * TicketServicio update
   */
  export type TicketServicioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicio
     */
    select?: TicketServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketServicio.
     */
    data: XOR<TicketServicioUpdateInput, TicketServicioUncheckedUpdateInput>
    /**
     * Choose, which TicketServicio to update.
     */
    where: TicketServicioWhereUniqueInput
  }


  /**
   * TicketServicio updateMany
   */
  export type TicketServicioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketServicios.
     */
    data: XOR<TicketServicioUpdateManyMutationInput, TicketServicioUncheckedUpdateManyInput>
    /**
     * Filter which TicketServicios to update
     */
    where?: TicketServicioWhereInput
  }


  /**
   * TicketServicio upsert
   */
  export type TicketServicioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicio
     */
    select?: TicketServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketServicio to update in case it exists.
     */
    where: TicketServicioWhereUniqueInput
    /**
     * In case the TicketServicio found by the `where` argument doesn't exist, create a new TicketServicio with this data.
     */
    create: XOR<TicketServicioCreateInput, TicketServicioUncheckedCreateInput>
    /**
     * In case the TicketServicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketServicioUpdateInput, TicketServicioUncheckedUpdateInput>
  }


  /**
   * TicketServicio delete
   */
  export type TicketServicioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicio
     */
    select?: TicketServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketServicioInclude<ExtArgs> | null
    /**
     * Filter which TicketServicio to delete.
     */
    where: TicketServicioWhereUniqueInput
  }


  /**
   * TicketServicio deleteMany
   */
  export type TicketServicioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketServicios to delete
     */
    where?: TicketServicioWhereInput
  }


  /**
   * TicketServicio findRaw
   */
  export type TicketServicioFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TicketServicio aggregateRaw
   */
  export type TicketServicioAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TicketServicio.DetalleServicio
   */
  export type TicketServicio$DetalleServicioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleServicio
     */
    select?: DetalleServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleServicioInclude<ExtArgs> | null
    where?: DetalleServicioWhereInput
  }


  /**
   * TicketServicio.additionalPayments
   */
  export type TicketServicio$additionalPaymentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the additionalPayments
     */
    select?: additionalPaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: additionalPaymentsInclude<ExtArgs> | null
    where?: additionalPaymentsWhereInput
    orderBy?: additionalPaymentsOrderByWithRelationInput | additionalPaymentsOrderByWithRelationInput[]
    cursor?: additionalPaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdditionalPaymentsScalarFieldEnum | AdditionalPaymentsScalarFieldEnum[]
  }


  /**
   * TicketServicio without action
   */
  export type TicketServicioDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketServicio
     */
    select?: TicketServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketServicioInclude<ExtArgs> | null
  }



  /**
   * Model TicketVenta
   */

  export type AggregateTicketVenta = {
    _count: TicketVentaCountAggregateOutputType | null
    _avg: TicketVentaAvgAggregateOutputType | null
    _sum: TicketVentaSumAggregateOutputType | null
    _min: TicketVentaMinAggregateOutputType | null
    _max: TicketVentaMaxAggregateOutputType | null
  }

  export type TicketVentaAvgAggregateOutputType = {
    amount: number | null
  }

  export type TicketVentaSumAggregateOutputType = {
    amount: number | null
  }

  export type TicketVentaMinAggregateOutputType = {
    id: string | null
    clientName: string | null
    clientDni: string | null
    clientPhoneNumber: string | null
    clientAddress: string | null
    clientEmail: string | null
    usuarioId: string | null
    amount: number | null
    medioPago: string | null
    status: boolean | null
    createAt: Date | null
    updateAt: Date | null
    fichaId: string | null
  }

  export type TicketVentaMaxAggregateOutputType = {
    id: string | null
    clientName: string | null
    clientDni: string | null
    clientPhoneNumber: string | null
    clientAddress: string | null
    clientEmail: string | null
    usuarioId: string | null
    amount: number | null
    medioPago: string | null
    status: boolean | null
    createAt: Date | null
    updateAt: Date | null
    fichaId: string | null
  }

  export type TicketVentaCountAggregateOutputType = {
    id: number
    clientName: number
    clientDni: number
    clientPhoneNumber: number
    clientAddress: number
    clientEmail: number
    usuarioId: number
    amount: number
    medioPago: number
    status: number
    createAt: number
    updateAt: number
    fichaId: number
    _all: number
  }


  export type TicketVentaAvgAggregateInputType = {
    amount?: true
  }

  export type TicketVentaSumAggregateInputType = {
    amount?: true
  }

  export type TicketVentaMinAggregateInputType = {
    id?: true
    clientName?: true
    clientDni?: true
    clientPhoneNumber?: true
    clientAddress?: true
    clientEmail?: true
    usuarioId?: true
    amount?: true
    medioPago?: true
    status?: true
    createAt?: true
    updateAt?: true
    fichaId?: true
  }

  export type TicketVentaMaxAggregateInputType = {
    id?: true
    clientName?: true
    clientDni?: true
    clientPhoneNumber?: true
    clientAddress?: true
    clientEmail?: true
    usuarioId?: true
    amount?: true
    medioPago?: true
    status?: true
    createAt?: true
    updateAt?: true
    fichaId?: true
  }

  export type TicketVentaCountAggregateInputType = {
    id?: true
    clientName?: true
    clientDni?: true
    clientPhoneNumber?: true
    clientAddress?: true
    clientEmail?: true
    usuarioId?: true
    amount?: true
    medioPago?: true
    status?: true
    createAt?: true
    updateAt?: true
    fichaId?: true
    _all?: true
  }

  export type TicketVentaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketVenta to aggregate.
     */
    where?: TicketVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketVentas to fetch.
     */
    orderBy?: TicketVentaOrderByWithRelationInput | TicketVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketVentas
    **/
    _count?: true | TicketVentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketVentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketVentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketVentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketVentaMaxAggregateInputType
  }

  export type GetTicketVentaAggregateType<T extends TicketVentaAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketVenta[P]>
      : GetScalarType<T[P], AggregateTicketVenta[P]>
  }




  export type TicketVentaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TicketVentaWhereInput
    orderBy?: TicketVentaOrderByWithAggregationInput | TicketVentaOrderByWithAggregationInput[]
    by: TicketVentaScalarFieldEnum[] | TicketVentaScalarFieldEnum
    having?: TicketVentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketVentaCountAggregateInputType | true
    _avg?: TicketVentaAvgAggregateInputType
    _sum?: TicketVentaSumAggregateInputType
    _min?: TicketVentaMinAggregateInputType
    _max?: TicketVentaMaxAggregateInputType
  }

  export type TicketVentaGroupByOutputType = {
    id: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail: string
    usuarioId: string
    amount: number
    medioPago: string
    status: boolean
    createAt: Date
    updateAt: Date
    fichaId: string | null
    _count: TicketVentaCountAggregateOutputType | null
    _avg: TicketVentaAvgAggregateOutputType | null
    _sum: TicketVentaSumAggregateOutputType | null
    _min: TicketVentaMinAggregateOutputType | null
    _max: TicketVentaMaxAggregateOutputType | null
  }

  type GetTicketVentaGroupByPayload<T extends TicketVentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketVentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketVentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketVentaGroupByOutputType[P]>
            : GetScalarType<T[P], TicketVentaGroupByOutputType[P]>
        }
      >
    >


  export type TicketVentaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    clientDni?: boolean
    clientPhoneNumber?: boolean
    clientAddress?: boolean
    clientEmail?: boolean
    usuarioId?: boolean
    amount?: boolean
    medioPago?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    fichaId?: boolean
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
    DetalleVenta?: boolean | TicketVenta$DetalleVentaArgs<ExtArgs>
    Ficha?: boolean | TicketVenta$FichaArgs<ExtArgs>
    _count?: boolean | TicketVentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketVenta"]>

  export type TicketVentaSelectScalar = {
    id?: boolean
    clientName?: boolean
    clientDni?: boolean
    clientPhoneNumber?: boolean
    clientAddress?: boolean
    clientEmail?: boolean
    usuarioId?: boolean
    amount?: boolean
    medioPago?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    fichaId?: boolean
  }

  export type TicketVentaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    vendedor?: boolean | UsuarioDefaultArgs<ExtArgs>
    DetalleVenta?: boolean | TicketVenta$DetalleVentaArgs<ExtArgs>
    Ficha?: boolean | TicketVenta$FichaArgs<ExtArgs>
    _count?: boolean | TicketVentaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TicketVentaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "TicketVenta"
    objects: {
      vendedor: Prisma.$UsuarioPayload<ExtArgs>
      DetalleVenta: Prisma.$DetalleVentaPayload<ExtArgs>[]
      Ficha: Prisma.$FichaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      clientName: string
      clientDni: string
      clientPhoneNumber: string
      clientAddress: string
      clientEmail: string
      usuarioId: string
      amount: number
      medioPago: string
      status: boolean
      createAt: Date
      updateAt: Date
      fichaId: string | null
    }, ExtArgs["result"]["ticketVenta"]>
    composites: {}
  }


  type TicketVentaGetPayload<S extends boolean | null | undefined | TicketVentaDefaultArgs> = $Result.GetResult<Prisma.$TicketVentaPayload, S>

  type TicketVentaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TicketVentaFindManyArgs, 'select' | 'include'> & {
      select?: TicketVentaCountAggregateInputType | true
    }

  export interface TicketVentaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketVenta'], meta: { name: 'TicketVenta' } }
    /**
     * Find zero or one TicketVenta that matches the filter.
     * @param {TicketVentaFindUniqueArgs} args - Arguments to find a TicketVenta
     * @example
     * // Get one TicketVenta
     * const ticketVenta = await prisma.ticketVenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketVentaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TicketVentaFindUniqueArgs<ExtArgs>>
    ): Prisma__TicketVentaClient<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TicketVenta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TicketVentaFindUniqueOrThrowArgs} args - Arguments to find a TicketVenta
     * @example
     * // Get one TicketVenta
     * const ticketVenta = await prisma.ticketVenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketVentaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketVentaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TicketVentaClient<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TicketVenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketVentaFindFirstArgs} args - Arguments to find a TicketVenta
     * @example
     * // Get one TicketVenta
     * const ticketVenta = await prisma.ticketVenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketVentaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketVentaFindFirstArgs<ExtArgs>>
    ): Prisma__TicketVentaClient<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TicketVenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketVentaFindFirstOrThrowArgs} args - Arguments to find a TicketVenta
     * @example
     * // Get one TicketVenta
     * const ticketVenta = await prisma.ticketVenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketVentaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketVentaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TicketVentaClient<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TicketVentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketVentaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketVentas
     * const ticketVentas = await prisma.ticketVenta.findMany()
     * 
     * // Get first 10 TicketVentas
     * const ticketVentas = await prisma.ticketVenta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketVentaWithIdOnly = await prisma.ticketVenta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TicketVentaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketVentaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TicketVenta.
     * @param {TicketVentaCreateArgs} args - Arguments to create a TicketVenta.
     * @example
     * // Create one TicketVenta
     * const TicketVenta = await prisma.ticketVenta.create({
     *   data: {
     *     // ... data to create a TicketVenta
     *   }
     * })
     * 
    **/
    create<T extends TicketVentaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketVentaCreateArgs<ExtArgs>>
    ): Prisma__TicketVentaClient<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TicketVentas.
     *     @param {TicketVentaCreateManyArgs} args - Arguments to create many TicketVentas.
     *     @example
     *     // Create many TicketVentas
     *     const ticketVenta = await prisma.ticketVenta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TicketVentaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketVentaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TicketVenta.
     * @param {TicketVentaDeleteArgs} args - Arguments to delete one TicketVenta.
     * @example
     * // Delete one TicketVenta
     * const TicketVenta = await prisma.ticketVenta.delete({
     *   where: {
     *     // ... filter to delete one TicketVenta
     *   }
     * })
     * 
    **/
    delete<T extends TicketVentaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TicketVentaDeleteArgs<ExtArgs>>
    ): Prisma__TicketVentaClient<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TicketVenta.
     * @param {TicketVentaUpdateArgs} args - Arguments to update one TicketVenta.
     * @example
     * // Update one TicketVenta
     * const ticketVenta = await prisma.ticketVenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketVentaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketVentaUpdateArgs<ExtArgs>>
    ): Prisma__TicketVentaClient<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TicketVentas.
     * @param {TicketVentaDeleteManyArgs} args - Arguments to filter TicketVentas to delete.
     * @example
     * // Delete a few TicketVentas
     * const { count } = await prisma.ticketVenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketVentaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketVentaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketVentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketVentas
     * const ticketVenta = await prisma.ticketVenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketVentaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TicketVentaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketVenta.
     * @param {TicketVentaUpsertArgs} args - Arguments to update or create a TicketVenta.
     * @example
     * // Update or create a TicketVenta
     * const ticketVenta = await prisma.ticketVenta.upsert({
     *   create: {
     *     // ... data to create a TicketVenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketVenta we want to update
     *   }
     * })
    **/
    upsert<T extends TicketVentaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TicketVentaUpsertArgs<ExtArgs>>
    ): Prisma__TicketVentaClient<$Result.GetResult<Prisma.$TicketVentaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more TicketVentas that matches the filter.
     * @param {TicketVentaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ticketVenta = await prisma.ticketVenta.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TicketVentaFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TicketVenta.
     * @param {TicketVentaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ticketVenta = await prisma.ticketVenta.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TicketVentaAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TicketVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketVentaCountArgs} args - Arguments to filter TicketVentas to count.
     * @example
     * // Count the number of TicketVentas
     * const count = await prisma.ticketVenta.count({
     *   where: {
     *     // ... the filter for the TicketVentas we want to count
     *   }
     * })
    **/
    count<T extends TicketVentaCountArgs>(
      args?: Subset<T, TicketVentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketVentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketVentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketVentaAggregateArgs>(args: Subset<T, TicketVentaAggregateArgs>): Prisma.PrismaPromise<GetTicketVentaAggregateType<T>>

    /**
     * Group by TicketVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketVentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketVentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketVentaGroupByArgs['orderBy'] }
        : { orderBy?: TicketVentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketVentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketVenta model
   */
  readonly fields: TicketVentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketVenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketVentaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    vendedor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    DetalleVenta<T extends TicketVenta$DetalleVentaArgs<ExtArgs> = {}>(args?: Subset<T, TicketVenta$DetalleVentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, 'findMany'> | Null>;

    Ficha<T extends TicketVenta$FichaArgs<ExtArgs> = {}>(args?: Subset<T, TicketVenta$FichaArgs<ExtArgs>>): Prisma__FichaClient<$Result.GetResult<Prisma.$FichaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TicketVenta model
   */ 
  interface TicketVentaFieldRefs {
    readonly id: FieldRef<"TicketVenta", 'String'>
    readonly clientName: FieldRef<"TicketVenta", 'String'>
    readonly clientDni: FieldRef<"TicketVenta", 'String'>
    readonly clientPhoneNumber: FieldRef<"TicketVenta", 'String'>
    readonly clientAddress: FieldRef<"TicketVenta", 'String'>
    readonly clientEmail: FieldRef<"TicketVenta", 'String'>
    readonly usuarioId: FieldRef<"TicketVenta", 'String'>
    readonly amount: FieldRef<"TicketVenta", 'Float'>
    readonly medioPago: FieldRef<"TicketVenta", 'String'>
    readonly status: FieldRef<"TicketVenta", 'Boolean'>
    readonly createAt: FieldRef<"TicketVenta", 'DateTime'>
    readonly updateAt: FieldRef<"TicketVenta", 'DateTime'>
    readonly fichaId: FieldRef<"TicketVenta", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TicketVenta findUnique
   */
  export type TicketVentaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
    /**
     * Filter, which TicketVenta to fetch.
     */
    where: TicketVentaWhereUniqueInput
  }


  /**
   * TicketVenta findUniqueOrThrow
   */
  export type TicketVentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
    /**
     * Filter, which TicketVenta to fetch.
     */
    where: TicketVentaWhereUniqueInput
  }


  /**
   * TicketVenta findFirst
   */
  export type TicketVentaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
    /**
     * Filter, which TicketVenta to fetch.
     */
    where?: TicketVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketVentas to fetch.
     */
    orderBy?: TicketVentaOrderByWithRelationInput | TicketVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketVentas.
     */
    cursor?: TicketVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketVentas.
     */
    distinct?: TicketVentaScalarFieldEnum | TicketVentaScalarFieldEnum[]
  }


  /**
   * TicketVenta findFirstOrThrow
   */
  export type TicketVentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
    /**
     * Filter, which TicketVenta to fetch.
     */
    where?: TicketVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketVentas to fetch.
     */
    orderBy?: TicketVentaOrderByWithRelationInput | TicketVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketVentas.
     */
    cursor?: TicketVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketVentas.
     */
    distinct?: TicketVentaScalarFieldEnum | TicketVentaScalarFieldEnum[]
  }


  /**
   * TicketVenta findMany
   */
  export type TicketVentaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
    /**
     * Filter, which TicketVentas to fetch.
     */
    where?: TicketVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketVentas to fetch.
     */
    orderBy?: TicketVentaOrderByWithRelationInput | TicketVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketVentas.
     */
    cursor?: TicketVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketVentas.
     */
    skip?: number
    distinct?: TicketVentaScalarFieldEnum | TicketVentaScalarFieldEnum[]
  }


  /**
   * TicketVenta create
   */
  export type TicketVentaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketVenta.
     */
    data: XOR<TicketVentaCreateInput, TicketVentaUncheckedCreateInput>
  }


  /**
   * TicketVenta createMany
   */
  export type TicketVentaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketVentas.
     */
    data: TicketVentaCreateManyInput | TicketVentaCreateManyInput[]
  }


  /**
   * TicketVenta update
   */
  export type TicketVentaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketVenta.
     */
    data: XOR<TicketVentaUpdateInput, TicketVentaUncheckedUpdateInput>
    /**
     * Choose, which TicketVenta to update.
     */
    where: TicketVentaWhereUniqueInput
  }


  /**
   * TicketVenta updateMany
   */
  export type TicketVentaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketVentas.
     */
    data: XOR<TicketVentaUpdateManyMutationInput, TicketVentaUncheckedUpdateManyInput>
    /**
     * Filter which TicketVentas to update
     */
    where?: TicketVentaWhereInput
  }


  /**
   * TicketVenta upsert
   */
  export type TicketVentaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketVenta to update in case it exists.
     */
    where: TicketVentaWhereUniqueInput
    /**
     * In case the TicketVenta found by the `where` argument doesn't exist, create a new TicketVenta with this data.
     */
    create: XOR<TicketVentaCreateInput, TicketVentaUncheckedCreateInput>
    /**
     * In case the TicketVenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketVentaUpdateInput, TicketVentaUncheckedUpdateInput>
  }


  /**
   * TicketVenta delete
   */
  export type TicketVentaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
    /**
     * Filter which TicketVenta to delete.
     */
    where: TicketVentaWhereUniqueInput
  }


  /**
   * TicketVenta deleteMany
   */
  export type TicketVentaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketVentas to delete
     */
    where?: TicketVentaWhereInput
  }


  /**
   * TicketVenta findRaw
   */
  export type TicketVentaFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TicketVenta aggregateRaw
   */
  export type TicketVentaAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TicketVenta.DetalleVenta
   */
  export type TicketVenta$DetalleVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleVenta
     */
    select?: DetalleVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetalleVentaInclude<ExtArgs> | null
    where?: DetalleVentaWhereInput
    orderBy?: DetalleVentaOrderByWithRelationInput | DetalleVentaOrderByWithRelationInput[]
    cursor?: DetalleVentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleVentaScalarFieldEnum | DetalleVentaScalarFieldEnum[]
  }


  /**
   * TicketVenta.Ficha
   */
  export type TicketVenta$FichaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ficha
     */
    select?: FichaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FichaInclude<ExtArgs> | null
    where?: FichaWhereInput
  }


  /**
   * TicketVenta without action
   */
  export type TicketVentaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketVenta
     */
    select?: TicketVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketVentaInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UsuarioScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    dni: 'dni',
    fullName: 'fullName',
    email: 'email',
    username: 'username',
    phoneNumer: 'phoneNumer',
    gender: 'gender',
    role: 'role',
    password: 'password',
    urlImage: 'urlImage',
    address: 'address',
    isVigent: 'isVigent',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isVigent: 'isVigent',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shortName: 'shortName',
    description: 'description',
    price: 'price',
    stock: 'stock',
    model: 'model',
    isVigent: 'isVigent',
    brand: 'brand',
    urlImage: 'urlImage',
    categoriaId: 'categoriaId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    razon: 'razon',
    address: 'address',
    ruc: 'ruc',
    phoneNumber: 'phoneNumber',
    type: 'type',
    province: 'province',
    departament: 'departament',
    country: 'country',
    email: 'email',
    description: 'description',
    urlImage: 'urlImage',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const FichaScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    case: 'case',
    procesador: 'procesador',
    memory: 'memory',
    almacenamiento: 'almacenamiento',
    grafica: 'grafica',
    memoryGrafica: 'memoryGrafica',
    pantalla: 'pantalla',
    sistema: 'sistema',
    description: 'description',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type FichaScalarFieldEnum = (typeof FichaScalarFieldEnum)[keyof typeof FichaScalarFieldEnum]


  export const ServicioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    duration: 'duration',
    urlImage: 'urlImage',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const AdditionalPaymentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mount: 'mount',
    ticketServicioId: 'ticketServicioId'
  };

  export type AdditionalPaymentsScalarFieldEnum = (typeof AdditionalPaymentsScalarFieldEnum)[keyof typeof AdditionalPaymentsScalarFieldEnum]


  export const DetalleServicioScalarFieldEnum: {
    id: 'id',
    fichaId: 'fichaId',
    servicioId: 'servicioId',
    ticketServicioId: 'ticketServicioId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type DetalleServicioScalarFieldEnum = (typeof DetalleServicioScalarFieldEnum)[keyof typeof DetalleServicioScalarFieldEnum]


  export const DetalleVentaScalarFieldEnum: {
    id: 'id',
    productoId: 'productoId',
    usuarioId: 'usuarioId',
    ticketVentaId: 'ticketVentaId',
    units: 'units',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type DetalleVentaScalarFieldEnum = (typeof DetalleVentaScalarFieldEnum)[keyof typeof DetalleVentaScalarFieldEnum]


  export const TicketServicioScalarFieldEnum: {
    id: 'id',
    clientName: 'clientName',
    clientDni: 'clientDni',
    clientPhoneNumber: 'clientPhoneNumber',
    clientAddress: 'clientAddress',
    clientEmail: 'clientEmail',
    status: 'status',
    amount: 'amount',
    medioPago: 'medioPago',
    description: 'description',
    usuarioId: 'usuarioId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type TicketServicioScalarFieldEnum = (typeof TicketServicioScalarFieldEnum)[keyof typeof TicketServicioScalarFieldEnum]


  export const TicketVentaScalarFieldEnum: {
    id: 'id',
    clientName: 'clientName',
    clientDni: 'clientDni',
    clientPhoneNumber: 'clientPhoneNumber',
    clientAddress: 'clientAddress',
    clientEmail: 'clientEmail',
    usuarioId: 'usuarioId',
    amount: 'amount',
    medioPago: 'medioPago',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt',
    fichaId: 'fichaId'
  };

  export type TicketVentaScalarFieldEnum = (typeof TicketVentaScalarFieldEnum)[keyof typeof TicketVentaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    firstName?: StringFilter<"Usuario"> | string
    lastName?: StringFilter<"Usuario"> | string
    dni?: StringFilter<"Usuario"> | string
    fullName?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    phoneNumer?: StringFilter<"Usuario"> | string
    gender?: StringFilter<"Usuario"> | string
    role?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    urlImage?: StringFilter<"Usuario"> | string
    address?: StringFilter<"Usuario"> | string
    isVigent?: BoolFilter<"Usuario"> | boolean
    createAt?: DateTimeFilter<"Usuario"> | Date | string
    updateAt?: DateTimeFilter<"Usuario"> | Date | string
    TicketServicio?: TicketServicioListRelationFilter
    DetalleVenta?: DetalleVentaListRelationFilter
    TicketVenta?: TicketVentaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phoneNumer?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    password?: SortOrder
    urlImage?: SortOrder
    address?: SortOrder
    isVigent?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    TicketServicio?: TicketServicioOrderByRelationAggregateInput
    DetalleVenta?: DetalleVentaOrderByRelationAggregateInput
    TicketVenta?: TicketVentaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dni?: string
    email?: string
    username?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    firstName?: StringFilter<"Usuario"> | string
    lastName?: StringFilter<"Usuario"> | string
    fullName?: StringFilter<"Usuario"> | string
    phoneNumer?: StringFilter<"Usuario"> | string
    gender?: StringFilter<"Usuario"> | string
    role?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    urlImage?: StringFilter<"Usuario"> | string
    address?: StringFilter<"Usuario"> | string
    isVigent?: BoolFilter<"Usuario"> | boolean
    createAt?: DateTimeFilter<"Usuario"> | Date | string
    updateAt?: DateTimeFilter<"Usuario"> | Date | string
    TicketServicio?: TicketServicioListRelationFilter
    DetalleVenta?: DetalleVentaListRelationFilter
    TicketVenta?: TicketVentaListRelationFilter
  }, "id" | "dni" | "email" | "username">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phoneNumer?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    password?: SortOrder
    urlImage?: SortOrder
    address?: SortOrder
    isVigent?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    firstName?: StringWithAggregatesFilter<"Usuario"> | string
    lastName?: StringWithAggregatesFilter<"Usuario"> | string
    dni?: StringWithAggregatesFilter<"Usuario"> | string
    fullName?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    username?: StringWithAggregatesFilter<"Usuario"> | string
    phoneNumer?: StringWithAggregatesFilter<"Usuario"> | string
    gender?: StringWithAggregatesFilter<"Usuario"> | string
    role?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    urlImage?: StringWithAggregatesFilter<"Usuario"> | string
    address?: StringWithAggregatesFilter<"Usuario"> | string
    isVigent?: BoolWithAggregatesFilter<"Usuario"> | boolean
    createAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: StringFilter<"Categoria"> | string
    name?: StringFilter<"Categoria"> | string
    isVigent?: BoolFilter<"Categoria"> | boolean
    createAt?: DateTimeFilter<"Categoria"> | Date | string
    updateAt?: DateTimeFilter<"Categoria"> | Date | string
    Producto?: ProductoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isVigent?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Producto?: ProductoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    name?: StringFilter<"Categoria"> | string
    isVigent?: BoolFilter<"Categoria"> | boolean
    createAt?: DateTimeFilter<"Categoria"> | Date | string
    updateAt?: DateTimeFilter<"Categoria"> | Date | string
    Producto?: ProductoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isVigent?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categoria"> | string
    name?: StringWithAggregatesFilter<"Categoria"> | string
    isVigent?: BoolWithAggregatesFilter<"Categoria"> | boolean
    createAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: StringFilter<"Producto"> | string
    name?: StringFilter<"Producto"> | string
    shortName?: StringFilter<"Producto"> | string
    description?: StringFilter<"Producto"> | string
    price?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    model?: StringFilter<"Producto"> | string
    isVigent?: BoolFilter<"Producto"> | boolean
    brand?: StringFilter<"Producto"> | string
    urlImage?: StringFilter<"Producto"> | string
    categoriaId?: StringFilter<"Producto"> | string
    createAt?: DateTimeFilter<"Producto"> | Date | string
    updateAt?: DateTimeFilter<"Producto"> | Date | string
    categoria?: XOR<CategoriaRelationFilter, CategoriaWhereInput>
    DetalleVenta?: DetalleVentaListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    model?: SortOrder
    isVigent?: SortOrder
    brand?: SortOrder
    urlImage?: SortOrder
    categoriaId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    DetalleVenta?: DetalleVentaOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    name?: StringFilter<"Producto"> | string
    shortName?: StringFilter<"Producto"> | string
    description?: StringFilter<"Producto"> | string
    price?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    model?: StringFilter<"Producto"> | string
    isVigent?: BoolFilter<"Producto"> | boolean
    brand?: StringFilter<"Producto"> | string
    urlImage?: StringFilter<"Producto"> | string
    categoriaId?: StringFilter<"Producto"> | string
    createAt?: DateTimeFilter<"Producto"> | Date | string
    updateAt?: DateTimeFilter<"Producto"> | Date | string
    categoria?: XOR<CategoriaRelationFilter, CategoriaWhereInput>
    DetalleVenta?: DetalleVentaListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    model?: SortOrder
    isVigent?: SortOrder
    brand?: SortOrder
    urlImage?: SortOrder
    categoriaId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Producto"> | string
    name?: StringWithAggregatesFilter<"Producto"> | string
    shortName?: StringWithAggregatesFilter<"Producto"> | string
    description?: StringWithAggregatesFilter<"Producto"> | string
    price?: FloatWithAggregatesFilter<"Producto"> | number
    stock?: IntWithAggregatesFilter<"Producto"> | number
    model?: StringWithAggregatesFilter<"Producto"> | string
    isVigent?: BoolWithAggregatesFilter<"Producto"> | boolean
    brand?: StringWithAggregatesFilter<"Producto"> | string
    urlImage?: StringWithAggregatesFilter<"Producto"> | string
    categoriaId?: StringWithAggregatesFilter<"Producto"> | string
    createAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
  }

  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: StringFilter<"Empresa"> | string
    razon?: StringFilter<"Empresa"> | string
    address?: StringFilter<"Empresa"> | string
    ruc?: StringFilter<"Empresa"> | string
    phoneNumber?: StringFilter<"Empresa"> | string
    type?: StringFilter<"Empresa"> | string
    province?: StringFilter<"Empresa"> | string
    departament?: StringFilter<"Empresa"> | string
    country?: StringFilter<"Empresa"> | string
    email?: StringFilter<"Empresa"> | string
    description?: StringFilter<"Empresa"> | string
    urlImage?: StringFilter<"Empresa"> | string
    createAt?: DateTimeFilter<"Empresa"> | Date | string
    updateAt?: DateTimeFilter<"Empresa"> | Date | string
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    razon?: SortOrder
    address?: SortOrder
    ruc?: SortOrder
    phoneNumber?: SortOrder
    type?: SortOrder
    province?: SortOrder
    departament?: SortOrder
    country?: SortOrder
    email?: SortOrder
    description?: SortOrder
    urlImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razon?: string
    email?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    address?: StringFilter<"Empresa"> | string
    ruc?: StringFilter<"Empresa"> | string
    phoneNumber?: StringFilter<"Empresa"> | string
    type?: StringFilter<"Empresa"> | string
    province?: StringFilter<"Empresa"> | string
    departament?: StringFilter<"Empresa"> | string
    country?: StringFilter<"Empresa"> | string
    description?: StringFilter<"Empresa"> | string
    urlImage?: StringFilter<"Empresa"> | string
    createAt?: DateTimeFilter<"Empresa"> | Date | string
    updateAt?: DateTimeFilter<"Empresa"> | Date | string
  }, "id" | "razon" | "email">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    razon?: SortOrder
    address?: SortOrder
    ruc?: SortOrder
    phoneNumber?: SortOrder
    type?: SortOrder
    province?: SortOrder
    departament?: SortOrder
    country?: SortOrder
    email?: SortOrder
    description?: SortOrder
    urlImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Empresa"> | string
    razon?: StringWithAggregatesFilter<"Empresa"> | string
    address?: StringWithAggregatesFilter<"Empresa"> | string
    ruc?: StringWithAggregatesFilter<"Empresa"> | string
    phoneNumber?: StringWithAggregatesFilter<"Empresa"> | string
    type?: StringWithAggregatesFilter<"Empresa"> | string
    province?: StringWithAggregatesFilter<"Empresa"> | string
    departament?: StringWithAggregatesFilter<"Empresa"> | string
    country?: StringWithAggregatesFilter<"Empresa"> | string
    email?: StringWithAggregatesFilter<"Empresa"> | string
    description?: StringWithAggregatesFilter<"Empresa"> | string
    urlImage?: StringWithAggregatesFilter<"Empresa"> | string
    createAt?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
  }

  export type FichaWhereInput = {
    AND?: FichaWhereInput | FichaWhereInput[]
    OR?: FichaWhereInput[]
    NOT?: FichaWhereInput | FichaWhereInput[]
    id?: StringFilter<"Ficha"> | string
    brand?: StringFilter<"Ficha"> | string
    model?: StringFilter<"Ficha"> | string
    case?: StringFilter<"Ficha"> | string
    procesador?: StringFilter<"Ficha"> | string
    memory?: StringFilter<"Ficha"> | string
    almacenamiento?: StringFilter<"Ficha"> | string
    grafica?: StringFilter<"Ficha"> | string
    memoryGrafica?: StringFilter<"Ficha"> | string
    pantalla?: StringFilter<"Ficha"> | string
    sistema?: StringFilter<"Ficha"> | string
    description?: StringFilter<"Ficha"> | string
    createAt?: DateTimeFilter<"Ficha"> | Date | string
    updateAt?: DateTimeFilter<"Ficha"> | Date | string
    DetalleServicio?: XOR<DetalleServicioNullableRelationFilter, DetalleServicioWhereInput> | null
    TicketVenta?: TicketVentaListRelationFilter
  }

  export type FichaOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    case?: SortOrder
    procesador?: SortOrder
    memory?: SortOrder
    almacenamiento?: SortOrder
    grafica?: SortOrder
    memoryGrafica?: SortOrder
    pantalla?: SortOrder
    sistema?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    DetalleServicio?: DetalleServicioOrderByWithRelationInput
    TicketVenta?: TicketVentaOrderByRelationAggregateInput
  }

  export type FichaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FichaWhereInput | FichaWhereInput[]
    OR?: FichaWhereInput[]
    NOT?: FichaWhereInput | FichaWhereInput[]
    brand?: StringFilter<"Ficha"> | string
    model?: StringFilter<"Ficha"> | string
    case?: StringFilter<"Ficha"> | string
    procesador?: StringFilter<"Ficha"> | string
    memory?: StringFilter<"Ficha"> | string
    almacenamiento?: StringFilter<"Ficha"> | string
    grafica?: StringFilter<"Ficha"> | string
    memoryGrafica?: StringFilter<"Ficha"> | string
    pantalla?: StringFilter<"Ficha"> | string
    sistema?: StringFilter<"Ficha"> | string
    description?: StringFilter<"Ficha"> | string
    createAt?: DateTimeFilter<"Ficha"> | Date | string
    updateAt?: DateTimeFilter<"Ficha"> | Date | string
    DetalleServicio?: XOR<DetalleServicioNullableRelationFilter, DetalleServicioWhereInput> | null
    TicketVenta?: TicketVentaListRelationFilter
  }, "id">

  export type FichaOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    case?: SortOrder
    procesador?: SortOrder
    memory?: SortOrder
    almacenamiento?: SortOrder
    grafica?: SortOrder
    memoryGrafica?: SortOrder
    pantalla?: SortOrder
    sistema?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: FichaCountOrderByAggregateInput
    _max?: FichaMaxOrderByAggregateInput
    _min?: FichaMinOrderByAggregateInput
  }

  export type FichaScalarWhereWithAggregatesInput = {
    AND?: FichaScalarWhereWithAggregatesInput | FichaScalarWhereWithAggregatesInput[]
    OR?: FichaScalarWhereWithAggregatesInput[]
    NOT?: FichaScalarWhereWithAggregatesInput | FichaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ficha"> | string
    brand?: StringWithAggregatesFilter<"Ficha"> | string
    model?: StringWithAggregatesFilter<"Ficha"> | string
    case?: StringWithAggregatesFilter<"Ficha"> | string
    procesador?: StringWithAggregatesFilter<"Ficha"> | string
    memory?: StringWithAggregatesFilter<"Ficha"> | string
    almacenamiento?: StringWithAggregatesFilter<"Ficha"> | string
    grafica?: StringWithAggregatesFilter<"Ficha"> | string
    memoryGrafica?: StringWithAggregatesFilter<"Ficha"> | string
    pantalla?: StringWithAggregatesFilter<"Ficha"> | string
    sistema?: StringWithAggregatesFilter<"Ficha"> | string
    description?: StringWithAggregatesFilter<"Ficha"> | string
    createAt?: DateTimeWithAggregatesFilter<"Ficha"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Ficha"> | Date | string
  }

  export type ServicioWhereInput = {
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    id?: StringFilter<"Servicio"> | string
    name?: StringFilter<"Servicio"> | string
    description?: StringFilter<"Servicio"> | string
    price?: FloatFilter<"Servicio"> | number
    duration?: FloatFilter<"Servicio"> | number
    urlImage?: StringFilter<"Servicio"> | string
    createAt?: DateTimeFilter<"Servicio"> | Date | string
    updateAt?: DateTimeFilter<"Servicio"> | Date | string
    DetalleServicio?: DetalleServicioListRelationFilter
  }

  export type ServicioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    urlImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    DetalleServicio?: DetalleServicioOrderByRelationAggregateInput
  }

  export type ServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    name?: StringFilter<"Servicio"> | string
    description?: StringFilter<"Servicio"> | string
    price?: FloatFilter<"Servicio"> | number
    duration?: FloatFilter<"Servicio"> | number
    urlImage?: StringFilter<"Servicio"> | string
    createAt?: DateTimeFilter<"Servicio"> | Date | string
    updateAt?: DateTimeFilter<"Servicio"> | Date | string
    DetalleServicio?: DetalleServicioListRelationFilter
  }, "id">

  export type ServicioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    urlImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ServicioCountOrderByAggregateInput
    _avg?: ServicioAvgOrderByAggregateInput
    _max?: ServicioMaxOrderByAggregateInput
    _min?: ServicioMinOrderByAggregateInput
    _sum?: ServicioSumOrderByAggregateInput
  }

  export type ServicioScalarWhereWithAggregatesInput = {
    AND?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    OR?: ServicioScalarWhereWithAggregatesInput[]
    NOT?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Servicio"> | string
    name?: StringWithAggregatesFilter<"Servicio"> | string
    description?: StringWithAggregatesFilter<"Servicio"> | string
    price?: FloatWithAggregatesFilter<"Servicio"> | number
    duration?: FloatWithAggregatesFilter<"Servicio"> | number
    urlImage?: StringWithAggregatesFilter<"Servicio"> | string
    createAt?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
  }

  export type additionalPaymentsWhereInput = {
    AND?: additionalPaymentsWhereInput | additionalPaymentsWhereInput[]
    OR?: additionalPaymentsWhereInput[]
    NOT?: additionalPaymentsWhereInput | additionalPaymentsWhereInput[]
    id?: StringFilter<"additionalPayments"> | string
    name?: StringFilter<"additionalPayments"> | string
    mount?: FloatFilter<"additionalPayments"> | number
    ticketServicioId?: StringFilter<"additionalPayments"> | string
    ticket?: XOR<TicketServicioRelationFilter, TicketServicioWhereInput>
  }

  export type additionalPaymentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mount?: SortOrder
    ticketServicioId?: SortOrder
    ticket?: TicketServicioOrderByWithRelationInput
  }

  export type additionalPaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: additionalPaymentsWhereInput | additionalPaymentsWhereInput[]
    OR?: additionalPaymentsWhereInput[]
    NOT?: additionalPaymentsWhereInput | additionalPaymentsWhereInput[]
    name?: StringFilter<"additionalPayments"> | string
    mount?: FloatFilter<"additionalPayments"> | number
    ticketServicioId?: StringFilter<"additionalPayments"> | string
    ticket?: XOR<TicketServicioRelationFilter, TicketServicioWhereInput>
  }, "id">

  export type additionalPaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mount?: SortOrder
    ticketServicioId?: SortOrder
    _count?: additionalPaymentsCountOrderByAggregateInput
    _avg?: additionalPaymentsAvgOrderByAggregateInput
    _max?: additionalPaymentsMaxOrderByAggregateInput
    _min?: additionalPaymentsMinOrderByAggregateInput
    _sum?: additionalPaymentsSumOrderByAggregateInput
  }

  export type additionalPaymentsScalarWhereWithAggregatesInput = {
    AND?: additionalPaymentsScalarWhereWithAggregatesInput | additionalPaymentsScalarWhereWithAggregatesInput[]
    OR?: additionalPaymentsScalarWhereWithAggregatesInput[]
    NOT?: additionalPaymentsScalarWhereWithAggregatesInput | additionalPaymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"additionalPayments"> | string
    name?: StringWithAggregatesFilter<"additionalPayments"> | string
    mount?: FloatWithAggregatesFilter<"additionalPayments"> | number
    ticketServicioId?: StringWithAggregatesFilter<"additionalPayments"> | string
  }

  export type DetalleServicioWhereInput = {
    AND?: DetalleServicioWhereInput | DetalleServicioWhereInput[]
    OR?: DetalleServicioWhereInput[]
    NOT?: DetalleServicioWhereInput | DetalleServicioWhereInput[]
    id?: StringFilter<"DetalleServicio"> | string
    fichaId?: StringFilter<"DetalleServicio"> | string
    servicioId?: StringFilter<"DetalleServicio"> | string
    ticketServicioId?: StringFilter<"DetalleServicio"> | string
    createAt?: DateTimeFilter<"DetalleServicio"> | Date | string
    updateAt?: DateTimeFilter<"DetalleServicio"> | Date | string
    ficha?: XOR<FichaRelationFilter, FichaWhereInput>
    ticketServicio?: XOR<TicketServicioRelationFilter, TicketServicioWhereInput>
    servicio?: XOR<ServicioRelationFilter, ServicioWhereInput>
  }

  export type DetalleServicioOrderByWithRelationInput = {
    id?: SortOrder
    fichaId?: SortOrder
    servicioId?: SortOrder
    ticketServicioId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    ficha?: FichaOrderByWithRelationInput
    ticketServicio?: TicketServicioOrderByWithRelationInput
    servicio?: ServicioOrderByWithRelationInput
  }

  export type DetalleServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fichaId?: string
    ticketServicioId?: string
    AND?: DetalleServicioWhereInput | DetalleServicioWhereInput[]
    OR?: DetalleServicioWhereInput[]
    NOT?: DetalleServicioWhereInput | DetalleServicioWhereInput[]
    servicioId?: StringFilter<"DetalleServicio"> | string
    createAt?: DateTimeFilter<"DetalleServicio"> | Date | string
    updateAt?: DateTimeFilter<"DetalleServicio"> | Date | string
    ficha?: XOR<FichaRelationFilter, FichaWhereInput>
    ticketServicio?: XOR<TicketServicioRelationFilter, TicketServicioWhereInput>
    servicio?: XOR<ServicioRelationFilter, ServicioWhereInput>
  }, "id" | "fichaId" | "ticketServicioId">

  export type DetalleServicioOrderByWithAggregationInput = {
    id?: SortOrder
    fichaId?: SortOrder
    servicioId?: SortOrder
    ticketServicioId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: DetalleServicioCountOrderByAggregateInput
    _max?: DetalleServicioMaxOrderByAggregateInput
    _min?: DetalleServicioMinOrderByAggregateInput
  }

  export type DetalleServicioScalarWhereWithAggregatesInput = {
    AND?: DetalleServicioScalarWhereWithAggregatesInput | DetalleServicioScalarWhereWithAggregatesInput[]
    OR?: DetalleServicioScalarWhereWithAggregatesInput[]
    NOT?: DetalleServicioScalarWhereWithAggregatesInput | DetalleServicioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DetalleServicio"> | string
    fichaId?: StringWithAggregatesFilter<"DetalleServicio"> | string
    servicioId?: StringWithAggregatesFilter<"DetalleServicio"> | string
    ticketServicioId?: StringWithAggregatesFilter<"DetalleServicio"> | string
    createAt?: DateTimeWithAggregatesFilter<"DetalleServicio"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"DetalleServicio"> | Date | string
  }

  export type DetalleVentaWhereInput = {
    AND?: DetalleVentaWhereInput | DetalleVentaWhereInput[]
    OR?: DetalleVentaWhereInput[]
    NOT?: DetalleVentaWhereInput | DetalleVentaWhereInput[]
    id?: StringFilter<"DetalleVenta"> | string
    productoId?: StringFilter<"DetalleVenta"> | string
    usuarioId?: StringFilter<"DetalleVenta"> | string
    ticketVentaId?: StringFilter<"DetalleVenta"> | string
    units?: IntFilter<"DetalleVenta"> | number
    createAt?: DateTimeFilter<"DetalleVenta"> | Date | string
    updateAt?: DateTimeFilter<"DetalleVenta"> | Date | string
    ticketVenta?: XOR<TicketVentaRelationFilter, TicketVentaWhereInput>
    Usuario?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
    producto?: XOR<ProductoRelationFilter, ProductoWhereInput>
  }

  export type DetalleVentaOrderByWithRelationInput = {
    id?: SortOrder
    productoId?: SortOrder
    usuarioId?: SortOrder
    ticketVentaId?: SortOrder
    units?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    ticketVenta?: TicketVentaOrderByWithRelationInput
    Usuario?: UsuarioOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type DetalleVentaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DetalleVentaWhereInput | DetalleVentaWhereInput[]
    OR?: DetalleVentaWhereInput[]
    NOT?: DetalleVentaWhereInput | DetalleVentaWhereInput[]
    productoId?: StringFilter<"DetalleVenta"> | string
    usuarioId?: StringFilter<"DetalleVenta"> | string
    ticketVentaId?: StringFilter<"DetalleVenta"> | string
    units?: IntFilter<"DetalleVenta"> | number
    createAt?: DateTimeFilter<"DetalleVenta"> | Date | string
    updateAt?: DateTimeFilter<"DetalleVenta"> | Date | string
    ticketVenta?: XOR<TicketVentaRelationFilter, TicketVentaWhereInput>
    Usuario?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
    producto?: XOR<ProductoRelationFilter, ProductoWhereInput>
  }, "id">

  export type DetalleVentaOrderByWithAggregationInput = {
    id?: SortOrder
    productoId?: SortOrder
    usuarioId?: SortOrder
    ticketVentaId?: SortOrder
    units?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: DetalleVentaCountOrderByAggregateInput
    _avg?: DetalleVentaAvgOrderByAggregateInput
    _max?: DetalleVentaMaxOrderByAggregateInput
    _min?: DetalleVentaMinOrderByAggregateInput
    _sum?: DetalleVentaSumOrderByAggregateInput
  }

  export type DetalleVentaScalarWhereWithAggregatesInput = {
    AND?: DetalleVentaScalarWhereWithAggregatesInput | DetalleVentaScalarWhereWithAggregatesInput[]
    OR?: DetalleVentaScalarWhereWithAggregatesInput[]
    NOT?: DetalleVentaScalarWhereWithAggregatesInput | DetalleVentaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DetalleVenta"> | string
    productoId?: StringWithAggregatesFilter<"DetalleVenta"> | string
    usuarioId?: StringWithAggregatesFilter<"DetalleVenta"> | string
    ticketVentaId?: StringWithAggregatesFilter<"DetalleVenta"> | string
    units?: IntWithAggregatesFilter<"DetalleVenta"> | number
    createAt?: DateTimeWithAggregatesFilter<"DetalleVenta"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"DetalleVenta"> | Date | string
  }

  export type TicketServicioWhereInput = {
    AND?: TicketServicioWhereInput | TicketServicioWhereInput[]
    OR?: TicketServicioWhereInput[]
    NOT?: TicketServicioWhereInput | TicketServicioWhereInput[]
    id?: StringFilter<"TicketServicio"> | string
    clientName?: StringFilter<"TicketServicio"> | string
    clientDni?: StringFilter<"TicketServicio"> | string
    clientPhoneNumber?: StringFilter<"TicketServicio"> | string
    clientAddress?: StringFilter<"TicketServicio"> | string
    clientEmail?: StringFilter<"TicketServicio"> | string
    status?: BoolFilter<"TicketServicio"> | boolean
    amount?: FloatFilter<"TicketServicio"> | number
    medioPago?: StringFilter<"TicketServicio"> | string
    description?: StringFilter<"TicketServicio"> | string
    usuarioId?: StringFilter<"TicketServicio"> | string
    createAt?: DateTimeFilter<"TicketServicio"> | Date | string
    updateAt?: DateTimeFilter<"TicketServicio"> | Date | string
    tecnico?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    DetalleServicio?: XOR<DetalleServicioNullableRelationFilter, DetalleServicioWhereInput> | null
    additionalPayments?: AdditionalPaymentsListRelationFilter
  }

  export type TicketServicioOrderByWithRelationInput = {
    id?: SortOrder
    clientName?: SortOrder
    clientDni?: SortOrder
    clientPhoneNumber?: SortOrder
    clientAddress?: SortOrder
    clientEmail?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    medioPago?: SortOrder
    description?: SortOrder
    usuarioId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    tecnico?: UsuarioOrderByWithRelationInput
    DetalleServicio?: DetalleServicioOrderByWithRelationInput
    additionalPayments?: additionalPaymentsOrderByRelationAggregateInput
  }

  export type TicketServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketServicioWhereInput | TicketServicioWhereInput[]
    OR?: TicketServicioWhereInput[]
    NOT?: TicketServicioWhereInput | TicketServicioWhereInput[]
    clientName?: StringFilter<"TicketServicio"> | string
    clientDni?: StringFilter<"TicketServicio"> | string
    clientPhoneNumber?: StringFilter<"TicketServicio"> | string
    clientAddress?: StringFilter<"TicketServicio"> | string
    clientEmail?: StringFilter<"TicketServicio"> | string
    status?: BoolFilter<"TicketServicio"> | boolean
    amount?: FloatFilter<"TicketServicio"> | number
    medioPago?: StringFilter<"TicketServicio"> | string
    description?: StringFilter<"TicketServicio"> | string
    usuarioId?: StringFilter<"TicketServicio"> | string
    createAt?: DateTimeFilter<"TicketServicio"> | Date | string
    updateAt?: DateTimeFilter<"TicketServicio"> | Date | string
    tecnico?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    DetalleServicio?: XOR<DetalleServicioNullableRelationFilter, DetalleServicioWhereInput> | null
    additionalPayments?: AdditionalPaymentsListRelationFilter
  }, "id">

  export type TicketServicioOrderByWithAggregationInput = {
    id?: SortOrder
    clientName?: SortOrder
    clientDni?: SortOrder
    clientPhoneNumber?: SortOrder
    clientAddress?: SortOrder
    clientEmail?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    medioPago?: SortOrder
    description?: SortOrder
    usuarioId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: TicketServicioCountOrderByAggregateInput
    _avg?: TicketServicioAvgOrderByAggregateInput
    _max?: TicketServicioMaxOrderByAggregateInput
    _min?: TicketServicioMinOrderByAggregateInput
    _sum?: TicketServicioSumOrderByAggregateInput
  }

  export type TicketServicioScalarWhereWithAggregatesInput = {
    AND?: TicketServicioScalarWhereWithAggregatesInput | TicketServicioScalarWhereWithAggregatesInput[]
    OR?: TicketServicioScalarWhereWithAggregatesInput[]
    NOT?: TicketServicioScalarWhereWithAggregatesInput | TicketServicioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketServicio"> | string
    clientName?: StringWithAggregatesFilter<"TicketServicio"> | string
    clientDni?: StringWithAggregatesFilter<"TicketServicio"> | string
    clientPhoneNumber?: StringWithAggregatesFilter<"TicketServicio"> | string
    clientAddress?: StringWithAggregatesFilter<"TicketServicio"> | string
    clientEmail?: StringWithAggregatesFilter<"TicketServicio"> | string
    status?: BoolWithAggregatesFilter<"TicketServicio"> | boolean
    amount?: FloatWithAggregatesFilter<"TicketServicio"> | number
    medioPago?: StringWithAggregatesFilter<"TicketServicio"> | string
    description?: StringWithAggregatesFilter<"TicketServicio"> | string
    usuarioId?: StringWithAggregatesFilter<"TicketServicio"> | string
    createAt?: DateTimeWithAggregatesFilter<"TicketServicio"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"TicketServicio"> | Date | string
  }

  export type TicketVentaWhereInput = {
    AND?: TicketVentaWhereInput | TicketVentaWhereInput[]
    OR?: TicketVentaWhereInput[]
    NOT?: TicketVentaWhereInput | TicketVentaWhereInput[]
    id?: StringFilter<"TicketVenta"> | string
    clientName?: StringFilter<"TicketVenta"> | string
    clientDni?: StringFilter<"TicketVenta"> | string
    clientPhoneNumber?: StringFilter<"TicketVenta"> | string
    clientAddress?: StringFilter<"TicketVenta"> | string
    clientEmail?: StringFilter<"TicketVenta"> | string
    usuarioId?: StringFilter<"TicketVenta"> | string
    amount?: FloatFilter<"TicketVenta"> | number
    medioPago?: StringFilter<"TicketVenta"> | string
    status?: BoolFilter<"TicketVenta"> | boolean
    createAt?: DateTimeFilter<"TicketVenta"> | Date | string
    updateAt?: DateTimeFilter<"TicketVenta"> | Date | string
    fichaId?: StringNullableFilter<"TicketVenta"> | string | null
    vendedor?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    DetalleVenta?: DetalleVentaListRelationFilter
    Ficha?: XOR<FichaNullableRelationFilter, FichaWhereInput> | null
  }

  export type TicketVentaOrderByWithRelationInput = {
    id?: SortOrder
    clientName?: SortOrder
    clientDni?: SortOrder
    clientPhoneNumber?: SortOrder
    clientAddress?: SortOrder
    clientEmail?: SortOrder
    usuarioId?: SortOrder
    amount?: SortOrder
    medioPago?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    fichaId?: SortOrder
    vendedor?: UsuarioOrderByWithRelationInput
    DetalleVenta?: DetalleVentaOrderByRelationAggregateInput
    Ficha?: FichaOrderByWithRelationInput
  }

  export type TicketVentaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketVentaWhereInput | TicketVentaWhereInput[]
    OR?: TicketVentaWhereInput[]
    NOT?: TicketVentaWhereInput | TicketVentaWhereInput[]
    clientName?: StringFilter<"TicketVenta"> | string
    clientDni?: StringFilter<"TicketVenta"> | string
    clientPhoneNumber?: StringFilter<"TicketVenta"> | string
    clientAddress?: StringFilter<"TicketVenta"> | string
    clientEmail?: StringFilter<"TicketVenta"> | string
    usuarioId?: StringFilter<"TicketVenta"> | string
    amount?: FloatFilter<"TicketVenta"> | number
    medioPago?: StringFilter<"TicketVenta"> | string
    status?: BoolFilter<"TicketVenta"> | boolean
    createAt?: DateTimeFilter<"TicketVenta"> | Date | string
    updateAt?: DateTimeFilter<"TicketVenta"> | Date | string
    fichaId?: StringNullableFilter<"TicketVenta"> | string | null
    vendedor?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    DetalleVenta?: DetalleVentaListRelationFilter
    Ficha?: XOR<FichaNullableRelationFilter, FichaWhereInput> | null
  }, "id">

  export type TicketVentaOrderByWithAggregationInput = {
    id?: SortOrder
    clientName?: SortOrder
    clientDni?: SortOrder
    clientPhoneNumber?: SortOrder
    clientAddress?: SortOrder
    clientEmail?: SortOrder
    usuarioId?: SortOrder
    amount?: SortOrder
    medioPago?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    fichaId?: SortOrder
    _count?: TicketVentaCountOrderByAggregateInput
    _avg?: TicketVentaAvgOrderByAggregateInput
    _max?: TicketVentaMaxOrderByAggregateInput
    _min?: TicketVentaMinOrderByAggregateInput
    _sum?: TicketVentaSumOrderByAggregateInput
  }

  export type TicketVentaScalarWhereWithAggregatesInput = {
    AND?: TicketVentaScalarWhereWithAggregatesInput | TicketVentaScalarWhereWithAggregatesInput[]
    OR?: TicketVentaScalarWhereWithAggregatesInput[]
    NOT?: TicketVentaScalarWhereWithAggregatesInput | TicketVentaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketVenta"> | string
    clientName?: StringWithAggregatesFilter<"TicketVenta"> | string
    clientDni?: StringWithAggregatesFilter<"TicketVenta"> | string
    clientPhoneNumber?: StringWithAggregatesFilter<"TicketVenta"> | string
    clientAddress?: StringWithAggregatesFilter<"TicketVenta"> | string
    clientEmail?: StringWithAggregatesFilter<"TicketVenta"> | string
    usuarioId?: StringWithAggregatesFilter<"TicketVenta"> | string
    amount?: FloatWithAggregatesFilter<"TicketVenta"> | number
    medioPago?: StringWithAggregatesFilter<"TicketVenta"> | string
    status?: BoolWithAggregatesFilter<"TicketVenta"> | boolean
    createAt?: DateTimeWithAggregatesFilter<"TicketVenta"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"TicketVenta"> | Date | string
    fichaId?: StringNullableWithAggregatesFilter<"TicketVenta"> | string | null
  }

  export type UsuarioCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dni: string
    fullName: string
    email: string
    username: string
    phoneNumer: string
    gender: string
    role: string
    password: string
    urlImage?: string
    address: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    TicketServicio?: TicketServicioCreateNestedManyWithoutTecnicoInput
    DetalleVenta?: DetalleVentaCreateNestedManyWithoutUsuarioInput
    TicketVenta?: TicketVentaCreateNestedManyWithoutVendedorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dni: string
    fullName: string
    email: string
    username: string
    phoneNumer: string
    gender: string
    role: string
    password: string
    urlImage?: string
    address: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    TicketServicio?: TicketServicioUncheckedCreateNestedManyWithoutTecnicoInput
    DetalleVenta?: DetalleVentaUncheckedCreateNestedManyWithoutUsuarioInput
    TicketVenta?: TicketVentaUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type UsuarioUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumer?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketServicio?: TicketServicioUpdateManyWithoutTecnicoNestedInput
    DetalleVenta?: DetalleVentaUpdateManyWithoutUsuarioNestedInput
    TicketVenta?: TicketVentaUpdateManyWithoutVendedorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumer?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketServicio?: TicketServicioUncheckedUpdateManyWithoutTecnicoNestedInput
    DetalleVenta?: DetalleVentaUncheckedUpdateManyWithoutUsuarioNestedInput
    TicketVenta?: TicketVentaUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    dni: string
    fullName: string
    email: string
    username: string
    phoneNumer: string
    gender: string
    role: string
    password: string
    urlImage?: string
    address: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumer?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumer?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    id?: string
    name: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    Producto?: ProductoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    name: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    Producto?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Producto?: ProductoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Producto?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: string
    name: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoCreateInput = {
    id?: string
    name: string
    shortName: string
    description: string
    price: number
    stock: number
    model: string
    isVigent?: boolean
    brand: string
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutProductoInput
    DetalleVenta?: DetalleVentaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: string
    name: string
    shortName: string
    description: string
    price: number
    stock: number
    model: string
    isVigent?: boolean
    brand: string
    urlImage?: string
    categoriaId: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleVenta?: DetalleVentaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    brand?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductoNestedInput
    DetalleVenta?: DetalleVentaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    brand?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleVenta?: DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: string
    name: string
    shortName: string
    description: string
    price: number
    stock: number
    model: string
    isVigent?: boolean
    brand: string
    urlImage?: string
    categoriaId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ProductoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    brand?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    brand?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaCreateInput = {
    id?: string
    razon: string
    address: string
    ruc: string
    phoneNumber: string
    type?: string
    province: string
    departament: string
    country: string
    email: string
    description: string
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type EmpresaUncheckedCreateInput = {
    id?: string
    razon: string
    address: string
    ruc: string
    phoneNumber: string
    type?: string
    province: string
    departament: string
    country: string
    email: string
    description: string
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type EmpresaUpdateInput = {
    razon?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    departament?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateInput = {
    razon?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    departament?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaCreateManyInput = {
    id?: string
    razon: string
    address: string
    ruc: string
    phoneNumber: string
    type?: string
    province: string
    departament: string
    country: string
    email: string
    description: string
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type EmpresaUpdateManyMutationInput = {
    razon?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    departament?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    razon?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    departament?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichaCreateInput = {
    id?: string
    brand?: string
    model?: string
    case?: string
    procesador?: string
    memory?: string
    almacenamiento?: string
    grafica?: string
    memoryGrafica?: string
    pantalla?: string
    sistema?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleServicio?: DetalleServicioCreateNestedOneWithoutFichaInput
    TicketVenta?: TicketVentaCreateNestedManyWithoutFichaInput
  }

  export type FichaUncheckedCreateInput = {
    id?: string
    brand?: string
    model?: string
    case?: string
    procesador?: string
    memory?: string
    almacenamiento?: string
    grafica?: string
    memoryGrafica?: string
    pantalla?: string
    sistema?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleServicio?: DetalleServicioUncheckedCreateNestedOneWithoutFichaInput
    TicketVenta?: TicketVentaUncheckedCreateNestedManyWithoutFichaInput
  }

  export type FichaUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    case?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    grafica?: StringFieldUpdateOperationsInput | string
    memoryGrafica?: StringFieldUpdateOperationsInput | string
    pantalla?: StringFieldUpdateOperationsInput | string
    sistema?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleServicio?: DetalleServicioUpdateOneWithoutFichaNestedInput
    TicketVenta?: TicketVentaUpdateManyWithoutFichaNestedInput
  }

  export type FichaUncheckedUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    case?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    grafica?: StringFieldUpdateOperationsInput | string
    memoryGrafica?: StringFieldUpdateOperationsInput | string
    pantalla?: StringFieldUpdateOperationsInput | string
    sistema?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleServicio?: DetalleServicioUncheckedUpdateOneWithoutFichaNestedInput
    TicketVenta?: TicketVentaUncheckedUpdateManyWithoutFichaNestedInput
  }

  export type FichaCreateManyInput = {
    id?: string
    brand?: string
    model?: string
    case?: string
    procesador?: string
    memory?: string
    almacenamiento?: string
    grafica?: string
    memoryGrafica?: string
    pantalla?: string
    sistema?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FichaUpdateManyMutationInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    case?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    grafica?: StringFieldUpdateOperationsInput | string
    memoryGrafica?: StringFieldUpdateOperationsInput | string
    pantalla?: StringFieldUpdateOperationsInput | string
    sistema?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichaUncheckedUpdateManyInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    case?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    grafica?: StringFieldUpdateOperationsInput | string
    memoryGrafica?: StringFieldUpdateOperationsInput | string
    pantalla?: StringFieldUpdateOperationsInput | string
    sistema?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioCreateInput = {
    id?: string
    name: string
    description?: string
    price?: number
    duration?: number
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleServicio?: DetalleServicioCreateNestedManyWithoutServicioInput
  }

  export type ServicioUncheckedCreateInput = {
    id?: string
    name: string
    description?: string
    price?: number
    duration?: number
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleServicio?: DetalleServicioUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleServicio?: DetalleServicioUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleServicio?: DetalleServicioUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioCreateManyInput = {
    id?: string
    name: string
    description?: string
    price?: number
    duration?: number
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ServicioUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type additionalPaymentsCreateInput = {
    id?: string
    name: string
    mount: number
    ticket: TicketServicioCreateNestedOneWithoutAdditionalPaymentsInput
  }

  export type additionalPaymentsUncheckedCreateInput = {
    id?: string
    name: string
    mount: number
    ticketServicioId: string
  }

  export type additionalPaymentsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    mount?: FloatFieldUpdateOperationsInput | number
    ticket?: TicketServicioUpdateOneRequiredWithoutAdditionalPaymentsNestedInput
  }

  export type additionalPaymentsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    mount?: FloatFieldUpdateOperationsInput | number
    ticketServicioId?: StringFieldUpdateOperationsInput | string
  }

  export type additionalPaymentsCreateManyInput = {
    id?: string
    name: string
    mount: number
    ticketServicioId: string
  }

  export type additionalPaymentsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    mount?: FloatFieldUpdateOperationsInput | number
  }

  export type additionalPaymentsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    mount?: FloatFieldUpdateOperationsInput | number
    ticketServicioId?: StringFieldUpdateOperationsInput | string
  }

  export type DetalleServicioCreateInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    ficha: FichaCreateNestedOneWithoutDetalleServicioInput
    ticketServicio: TicketServicioCreateNestedOneWithoutDetalleServicioInput
    servicio: ServicioCreateNestedOneWithoutDetalleServicioInput
  }

  export type DetalleServicioUncheckedCreateInput = {
    id?: string
    fichaId: string
    servicioId: string
    ticketServicioId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleServicioUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ficha?: FichaUpdateOneRequiredWithoutDetalleServicioNestedInput
    ticketServicio?: TicketServicioUpdateOneRequiredWithoutDetalleServicioNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutDetalleServicioNestedInput
  }

  export type DetalleServicioUncheckedUpdateInput = {
    fichaId?: StringFieldUpdateOperationsInput | string
    servicioId?: StringFieldUpdateOperationsInput | string
    ticketServicioId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleServicioCreateManyInput = {
    id?: string
    fichaId: string
    servicioId: string
    ticketServicioId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleServicioUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleServicioUncheckedUpdateManyInput = {
    fichaId?: StringFieldUpdateOperationsInput | string
    servicioId?: StringFieldUpdateOperationsInput | string
    ticketServicioId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaCreateInput = {
    id?: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
    ticketVenta: TicketVentaCreateNestedOneWithoutDetalleVentaInput
    Usuario?: UsuarioCreateNestedOneWithoutDetalleVentaInput
    producto: ProductoCreateNestedOneWithoutDetalleVentaInput
  }

  export type DetalleVentaUncheckedCreateInput = {
    id?: string
    productoId: string
    usuarioId: string
    ticketVentaId: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleVentaUpdateInput = {
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketVenta?: TicketVentaUpdateOneRequiredWithoutDetalleVentaNestedInput
    Usuario?: UsuarioUpdateOneWithoutDetalleVentaNestedInput
    producto?: ProductoUpdateOneRequiredWithoutDetalleVentaNestedInput
  }

  export type DetalleVentaUncheckedUpdateInput = {
    productoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    ticketVentaId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaCreateManyInput = {
    id?: string
    productoId: string
    usuarioId: string
    ticketVentaId: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleVentaUpdateManyMutationInput = {
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaUncheckedUpdateManyInput = {
    productoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    ticketVentaId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketServicioCreateInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    status?: boolean
    amount: number
    medioPago?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
    tecnico: UsuarioCreateNestedOneWithoutTicketServicioInput
    DetalleServicio?: DetalleServicioCreateNestedOneWithoutTicketServicioInput
    additionalPayments?: additionalPaymentsCreateNestedManyWithoutTicketInput
  }

  export type TicketServicioUncheckedCreateInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    status?: boolean
    amount: number
    medioPago?: string
    description?: string
    usuarioId: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleServicio?: DetalleServicioUncheckedCreateNestedOneWithoutTicketServicioInput
    additionalPayments?: additionalPaymentsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketServicioUpdateInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: UsuarioUpdateOneRequiredWithoutTicketServicioNestedInput
    DetalleServicio?: DetalleServicioUpdateOneWithoutTicketServicioNestedInput
    additionalPayments?: additionalPaymentsUpdateManyWithoutTicketNestedInput
  }

  export type TicketServicioUncheckedUpdateInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleServicio?: DetalleServicioUncheckedUpdateOneWithoutTicketServicioNestedInput
    additionalPayments?: additionalPaymentsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketServicioCreateManyInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    status?: boolean
    amount: number
    medioPago?: string
    description?: string
    usuarioId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type TicketServicioUpdateManyMutationInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketServicioUncheckedUpdateManyInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketVentaCreateInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    amount: number
    medioPago?: string
    status: boolean
    createAt?: Date | string
    updateAt?: Date | string
    vendedor: UsuarioCreateNestedOneWithoutTicketVentaInput
    DetalleVenta?: DetalleVentaCreateNestedManyWithoutTicketVentaInput
    Ficha?: FichaCreateNestedOneWithoutTicketVentaInput
  }

  export type TicketVentaUncheckedCreateInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    usuarioId: string
    amount: number
    medioPago?: string
    status: boolean
    createAt?: Date | string
    updateAt?: Date | string
    fichaId?: string | null
    DetalleVenta?: DetalleVentaUncheckedCreateNestedManyWithoutTicketVentaInput
  }

  export type TicketVentaUpdateInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendedor?: UsuarioUpdateOneRequiredWithoutTicketVentaNestedInput
    DetalleVenta?: DetalleVentaUpdateManyWithoutTicketVentaNestedInput
    Ficha?: FichaUpdateOneWithoutTicketVentaNestedInput
  }

  export type TicketVentaUncheckedUpdateInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fichaId?: NullableStringFieldUpdateOperationsInput | string | null
    DetalleVenta?: DetalleVentaUncheckedUpdateManyWithoutTicketVentaNestedInput
  }

  export type TicketVentaCreateManyInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    usuarioId: string
    amount: number
    medioPago?: string
    status: boolean
    createAt?: Date | string
    updateAt?: Date | string
    fichaId?: string | null
  }

  export type TicketVentaUpdateManyMutationInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketVentaUncheckedUpdateManyInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fichaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TicketServicioListRelationFilter = {
    every?: TicketServicioWhereInput
    some?: TicketServicioWhereInput
    none?: TicketServicioWhereInput
  }

  export type DetalleVentaListRelationFilter = {
    every?: DetalleVentaWhereInput
    some?: DetalleVentaWhereInput
    none?: DetalleVentaWhereInput
  }

  export type TicketVentaListRelationFilter = {
    every?: TicketVentaWhereInput
    some?: TicketVentaWhereInput
    none?: TicketVentaWhereInput
  }

  export type TicketServicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetalleVentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketVentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phoneNumer?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    password?: SortOrder
    urlImage?: SortOrder
    address?: SortOrder
    isVigent?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phoneNumer?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    password?: SortOrder
    urlImage?: SortOrder
    address?: SortOrder
    isVigent?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phoneNumer?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    password?: SortOrder
    urlImage?: SortOrder
    address?: SortOrder
    isVigent?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isVigent?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isVigent?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isVigent?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CategoriaRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    model?: SortOrder
    isVigent?: SortOrder
    brand?: SortOrder
    urlImage?: SortOrder
    categoriaId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    model?: SortOrder
    isVigent?: SortOrder
    brand?: SortOrder
    urlImage?: SortOrder
    categoriaId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    model?: SortOrder
    isVigent?: SortOrder
    brand?: SortOrder
    urlImage?: SortOrder
    categoriaId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    razon?: SortOrder
    address?: SortOrder
    ruc?: SortOrder
    phoneNumber?: SortOrder
    type?: SortOrder
    province?: SortOrder
    departament?: SortOrder
    country?: SortOrder
    email?: SortOrder
    description?: SortOrder
    urlImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    razon?: SortOrder
    address?: SortOrder
    ruc?: SortOrder
    phoneNumber?: SortOrder
    type?: SortOrder
    province?: SortOrder
    departament?: SortOrder
    country?: SortOrder
    email?: SortOrder
    description?: SortOrder
    urlImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    razon?: SortOrder
    address?: SortOrder
    ruc?: SortOrder
    phoneNumber?: SortOrder
    type?: SortOrder
    province?: SortOrder
    departament?: SortOrder
    country?: SortOrder
    email?: SortOrder
    description?: SortOrder
    urlImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DetalleServicioNullableRelationFilter = {
    is?: DetalleServicioWhereInput | null
    isNot?: DetalleServicioWhereInput | null
  }

  export type FichaCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    case?: SortOrder
    procesador?: SortOrder
    memory?: SortOrder
    almacenamiento?: SortOrder
    grafica?: SortOrder
    memoryGrafica?: SortOrder
    pantalla?: SortOrder
    sistema?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FichaMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    case?: SortOrder
    procesador?: SortOrder
    memory?: SortOrder
    almacenamiento?: SortOrder
    grafica?: SortOrder
    memoryGrafica?: SortOrder
    pantalla?: SortOrder
    sistema?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FichaMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    case?: SortOrder
    procesador?: SortOrder
    memory?: SortOrder
    almacenamiento?: SortOrder
    grafica?: SortOrder
    memoryGrafica?: SortOrder
    pantalla?: SortOrder
    sistema?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DetalleServicioListRelationFilter = {
    every?: DetalleServicioWhereInput
    some?: DetalleServicioWhereInput
    none?: DetalleServicioWhereInput
  }

  export type DetalleServicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    urlImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ServicioAvgOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type ServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    urlImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ServicioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    urlImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ServicioSumOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type TicketServicioRelationFilter = {
    is?: TicketServicioWhereInput
    isNot?: TicketServicioWhereInput
  }

  export type additionalPaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mount?: SortOrder
    ticketServicioId?: SortOrder
  }

  export type additionalPaymentsAvgOrderByAggregateInput = {
    mount?: SortOrder
  }

  export type additionalPaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mount?: SortOrder
    ticketServicioId?: SortOrder
  }

  export type additionalPaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mount?: SortOrder
    ticketServicioId?: SortOrder
  }

  export type additionalPaymentsSumOrderByAggregateInput = {
    mount?: SortOrder
  }

  export type FichaRelationFilter = {
    is?: FichaWhereInput
    isNot?: FichaWhereInput
  }

  export type ServicioRelationFilter = {
    is?: ServicioWhereInput
    isNot?: ServicioWhereInput
  }

  export type DetalleServicioCountOrderByAggregateInput = {
    id?: SortOrder
    fichaId?: SortOrder
    servicioId?: SortOrder
    ticketServicioId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DetalleServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    fichaId?: SortOrder
    servicioId?: SortOrder
    ticketServicioId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DetalleServicioMinOrderByAggregateInput = {
    id?: SortOrder
    fichaId?: SortOrder
    servicioId?: SortOrder
    ticketServicioId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type TicketVentaRelationFilter = {
    is?: TicketVentaWhereInput
    isNot?: TicketVentaWhereInput
  }

  export type UsuarioNullableRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type ProductoRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type DetalleVentaCountOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    usuarioId?: SortOrder
    ticketVentaId?: SortOrder
    units?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DetalleVentaAvgOrderByAggregateInput = {
    units?: SortOrder
  }

  export type DetalleVentaMaxOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    usuarioId?: SortOrder
    ticketVentaId?: SortOrder
    units?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DetalleVentaMinOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    usuarioId?: SortOrder
    ticketVentaId?: SortOrder
    units?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DetalleVentaSumOrderByAggregateInput = {
    units?: SortOrder
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type AdditionalPaymentsListRelationFilter = {
    every?: additionalPaymentsWhereInput
    some?: additionalPaymentsWhereInput
    none?: additionalPaymentsWhereInput
  }

  export type additionalPaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketServicioCountOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    clientDni?: SortOrder
    clientPhoneNumber?: SortOrder
    clientAddress?: SortOrder
    clientEmail?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    medioPago?: SortOrder
    description?: SortOrder
    usuarioId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type TicketServicioAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TicketServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    clientDni?: SortOrder
    clientPhoneNumber?: SortOrder
    clientAddress?: SortOrder
    clientEmail?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    medioPago?: SortOrder
    description?: SortOrder
    usuarioId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type TicketServicioMinOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    clientDni?: SortOrder
    clientPhoneNumber?: SortOrder
    clientAddress?: SortOrder
    clientEmail?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    medioPago?: SortOrder
    description?: SortOrder
    usuarioId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type TicketServicioSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type FichaNullableRelationFilter = {
    is?: FichaWhereInput | null
    isNot?: FichaWhereInput | null
  }

  export type TicketVentaCountOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    clientDni?: SortOrder
    clientPhoneNumber?: SortOrder
    clientAddress?: SortOrder
    clientEmail?: SortOrder
    usuarioId?: SortOrder
    amount?: SortOrder
    medioPago?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    fichaId?: SortOrder
  }

  export type TicketVentaAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TicketVentaMaxOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    clientDni?: SortOrder
    clientPhoneNumber?: SortOrder
    clientAddress?: SortOrder
    clientEmail?: SortOrder
    usuarioId?: SortOrder
    amount?: SortOrder
    medioPago?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    fichaId?: SortOrder
  }

  export type TicketVentaMinOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    clientDni?: SortOrder
    clientPhoneNumber?: SortOrder
    clientAddress?: SortOrder
    clientEmail?: SortOrder
    usuarioId?: SortOrder
    amount?: SortOrder
    medioPago?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    fichaId?: SortOrder
  }

  export type TicketVentaSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type TicketServicioCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<TicketServicioCreateWithoutTecnicoInput, TicketServicioUncheckedCreateWithoutTecnicoInput> | TicketServicioCreateWithoutTecnicoInput[] | TicketServicioUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: TicketServicioCreateOrConnectWithoutTecnicoInput | TicketServicioCreateOrConnectWithoutTecnicoInput[]
    createMany?: TicketServicioCreateManyTecnicoInputEnvelope
    connect?: TicketServicioWhereUniqueInput | TicketServicioWhereUniqueInput[]
  }

  export type DetalleVentaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DetalleVentaCreateWithoutUsuarioInput, DetalleVentaUncheckedCreateWithoutUsuarioInput> | DetalleVentaCreateWithoutUsuarioInput[] | DetalleVentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutUsuarioInput | DetalleVentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: DetalleVentaCreateManyUsuarioInputEnvelope
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
  }

  export type TicketVentaCreateNestedManyWithoutVendedorInput = {
    create?: XOR<TicketVentaCreateWithoutVendedorInput, TicketVentaUncheckedCreateWithoutVendedorInput> | TicketVentaCreateWithoutVendedorInput[] | TicketVentaUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: TicketVentaCreateOrConnectWithoutVendedorInput | TicketVentaCreateOrConnectWithoutVendedorInput[]
    createMany?: TicketVentaCreateManyVendedorInputEnvelope
    connect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
  }

  export type TicketServicioUncheckedCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<TicketServicioCreateWithoutTecnicoInput, TicketServicioUncheckedCreateWithoutTecnicoInput> | TicketServicioCreateWithoutTecnicoInput[] | TicketServicioUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: TicketServicioCreateOrConnectWithoutTecnicoInput | TicketServicioCreateOrConnectWithoutTecnicoInput[]
    createMany?: TicketServicioCreateManyTecnicoInputEnvelope
    connect?: TicketServicioWhereUniqueInput | TicketServicioWhereUniqueInput[]
  }

  export type DetalleVentaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DetalleVentaCreateWithoutUsuarioInput, DetalleVentaUncheckedCreateWithoutUsuarioInput> | DetalleVentaCreateWithoutUsuarioInput[] | DetalleVentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutUsuarioInput | DetalleVentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: DetalleVentaCreateManyUsuarioInputEnvelope
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
  }

  export type TicketVentaUncheckedCreateNestedManyWithoutVendedorInput = {
    create?: XOR<TicketVentaCreateWithoutVendedorInput, TicketVentaUncheckedCreateWithoutVendedorInput> | TicketVentaCreateWithoutVendedorInput[] | TicketVentaUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: TicketVentaCreateOrConnectWithoutVendedorInput | TicketVentaCreateOrConnectWithoutVendedorInput[]
    createMany?: TicketVentaCreateManyVendedorInputEnvelope
    connect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TicketServicioUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<TicketServicioCreateWithoutTecnicoInput, TicketServicioUncheckedCreateWithoutTecnicoInput> | TicketServicioCreateWithoutTecnicoInput[] | TicketServicioUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: TicketServicioCreateOrConnectWithoutTecnicoInput | TicketServicioCreateOrConnectWithoutTecnicoInput[]
    upsert?: TicketServicioUpsertWithWhereUniqueWithoutTecnicoInput | TicketServicioUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: TicketServicioCreateManyTecnicoInputEnvelope
    set?: TicketServicioWhereUniqueInput | TicketServicioWhereUniqueInput[]
    disconnect?: TicketServicioWhereUniqueInput | TicketServicioWhereUniqueInput[]
    delete?: TicketServicioWhereUniqueInput | TicketServicioWhereUniqueInput[]
    connect?: TicketServicioWhereUniqueInput | TicketServicioWhereUniqueInput[]
    update?: TicketServicioUpdateWithWhereUniqueWithoutTecnicoInput | TicketServicioUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: TicketServicioUpdateManyWithWhereWithoutTecnicoInput | TicketServicioUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: TicketServicioScalarWhereInput | TicketServicioScalarWhereInput[]
  }

  export type DetalleVentaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DetalleVentaCreateWithoutUsuarioInput, DetalleVentaUncheckedCreateWithoutUsuarioInput> | DetalleVentaCreateWithoutUsuarioInput[] | DetalleVentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutUsuarioInput | DetalleVentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: DetalleVentaUpsertWithWhereUniqueWithoutUsuarioInput | DetalleVentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DetalleVentaCreateManyUsuarioInputEnvelope
    set?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    disconnect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    delete?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    update?: DetalleVentaUpdateWithWhereUniqueWithoutUsuarioInput | DetalleVentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DetalleVentaUpdateManyWithWhereWithoutUsuarioInput | DetalleVentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
  }

  export type TicketVentaUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<TicketVentaCreateWithoutVendedorInput, TicketVentaUncheckedCreateWithoutVendedorInput> | TicketVentaCreateWithoutVendedorInput[] | TicketVentaUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: TicketVentaCreateOrConnectWithoutVendedorInput | TicketVentaCreateOrConnectWithoutVendedorInput[]
    upsert?: TicketVentaUpsertWithWhereUniqueWithoutVendedorInput | TicketVentaUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: TicketVentaCreateManyVendedorInputEnvelope
    set?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    disconnect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    delete?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    connect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    update?: TicketVentaUpdateWithWhereUniqueWithoutVendedorInput | TicketVentaUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: TicketVentaUpdateManyWithWhereWithoutVendedorInput | TicketVentaUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: TicketVentaScalarWhereInput | TicketVentaScalarWhereInput[]
  }

  export type TicketServicioUncheckedUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<TicketServicioCreateWithoutTecnicoInput, TicketServicioUncheckedCreateWithoutTecnicoInput> | TicketServicioCreateWithoutTecnicoInput[] | TicketServicioUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: TicketServicioCreateOrConnectWithoutTecnicoInput | TicketServicioCreateOrConnectWithoutTecnicoInput[]
    upsert?: TicketServicioUpsertWithWhereUniqueWithoutTecnicoInput | TicketServicioUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: TicketServicioCreateManyTecnicoInputEnvelope
    set?: TicketServicioWhereUniqueInput | TicketServicioWhereUniqueInput[]
    disconnect?: TicketServicioWhereUniqueInput | TicketServicioWhereUniqueInput[]
    delete?: TicketServicioWhereUniqueInput | TicketServicioWhereUniqueInput[]
    connect?: TicketServicioWhereUniqueInput | TicketServicioWhereUniqueInput[]
    update?: TicketServicioUpdateWithWhereUniqueWithoutTecnicoInput | TicketServicioUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: TicketServicioUpdateManyWithWhereWithoutTecnicoInput | TicketServicioUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: TicketServicioScalarWhereInput | TicketServicioScalarWhereInput[]
  }

  export type DetalleVentaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DetalleVentaCreateWithoutUsuarioInput, DetalleVentaUncheckedCreateWithoutUsuarioInput> | DetalleVentaCreateWithoutUsuarioInput[] | DetalleVentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutUsuarioInput | DetalleVentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: DetalleVentaUpsertWithWhereUniqueWithoutUsuarioInput | DetalleVentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DetalleVentaCreateManyUsuarioInputEnvelope
    set?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    disconnect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    delete?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    update?: DetalleVentaUpdateWithWhereUniqueWithoutUsuarioInput | DetalleVentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DetalleVentaUpdateManyWithWhereWithoutUsuarioInput | DetalleVentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
  }

  export type TicketVentaUncheckedUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<TicketVentaCreateWithoutVendedorInput, TicketVentaUncheckedCreateWithoutVendedorInput> | TicketVentaCreateWithoutVendedorInput[] | TicketVentaUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: TicketVentaCreateOrConnectWithoutVendedorInput | TicketVentaCreateOrConnectWithoutVendedorInput[]
    upsert?: TicketVentaUpsertWithWhereUniqueWithoutVendedorInput | TicketVentaUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: TicketVentaCreateManyVendedorInputEnvelope
    set?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    disconnect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    delete?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    connect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    update?: TicketVentaUpdateWithWhereUniqueWithoutVendedorInput | TicketVentaUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: TicketVentaUpdateManyWithWhereWithoutVendedorInput | TicketVentaUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: TicketVentaScalarWhereInput | TicketVentaScalarWhereInput[]
  }

  export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutProductoInput = {
    create?: XOR<CategoriaCreateWithoutProductoInput, CategoriaUncheckedCreateWithoutProductoInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductoInput
    connect?: CategoriaWhereUniqueInput
  }

  export type DetalleVentaCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput> | DetalleVentaCreateWithoutProductoInput[] | DetalleVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutProductoInput | DetalleVentaCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleVentaCreateManyProductoInputEnvelope
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
  }

  export type DetalleVentaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput> | DetalleVentaCreateWithoutProductoInput[] | DetalleVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutProductoInput | DetalleVentaCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleVentaCreateManyProductoInputEnvelope
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriaUpdateOneRequiredWithoutProductoNestedInput = {
    create?: XOR<CategoriaCreateWithoutProductoInput, CategoriaUncheckedCreateWithoutProductoInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductoInput
    upsert?: CategoriaUpsertWithoutProductoInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProductoInput, CategoriaUpdateWithoutProductoInput>, CategoriaUncheckedUpdateWithoutProductoInput>
  }

  export type DetalleVentaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput> | DetalleVentaCreateWithoutProductoInput[] | DetalleVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutProductoInput | DetalleVentaCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleVentaUpsertWithWhereUniqueWithoutProductoInput | DetalleVentaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleVentaCreateManyProductoInputEnvelope
    set?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    disconnect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    delete?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    update?: DetalleVentaUpdateWithWhereUniqueWithoutProductoInput | DetalleVentaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleVentaUpdateManyWithWhereWithoutProductoInput | DetalleVentaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
  }

  export type DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput> | DetalleVentaCreateWithoutProductoInput[] | DetalleVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutProductoInput | DetalleVentaCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleVentaUpsertWithWhereUniqueWithoutProductoInput | DetalleVentaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleVentaCreateManyProductoInputEnvelope
    set?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    disconnect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    delete?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    update?: DetalleVentaUpdateWithWhereUniqueWithoutProductoInput | DetalleVentaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleVentaUpdateManyWithWhereWithoutProductoInput | DetalleVentaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
  }

  export type DetalleServicioCreateNestedOneWithoutFichaInput = {
    create?: XOR<DetalleServicioCreateWithoutFichaInput, DetalleServicioUncheckedCreateWithoutFichaInput>
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutFichaInput
    connect?: DetalleServicioWhereUniqueInput
  }

  export type TicketVentaCreateNestedManyWithoutFichaInput = {
    create?: XOR<TicketVentaCreateWithoutFichaInput, TicketVentaUncheckedCreateWithoutFichaInput> | TicketVentaCreateWithoutFichaInput[] | TicketVentaUncheckedCreateWithoutFichaInput[]
    connectOrCreate?: TicketVentaCreateOrConnectWithoutFichaInput | TicketVentaCreateOrConnectWithoutFichaInput[]
    createMany?: TicketVentaCreateManyFichaInputEnvelope
    connect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
  }

  export type DetalleServicioUncheckedCreateNestedOneWithoutFichaInput = {
    create?: XOR<DetalleServicioCreateWithoutFichaInput, DetalleServicioUncheckedCreateWithoutFichaInput>
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutFichaInput
    connect?: DetalleServicioWhereUniqueInput
  }

  export type TicketVentaUncheckedCreateNestedManyWithoutFichaInput = {
    create?: XOR<TicketVentaCreateWithoutFichaInput, TicketVentaUncheckedCreateWithoutFichaInput> | TicketVentaCreateWithoutFichaInput[] | TicketVentaUncheckedCreateWithoutFichaInput[]
    connectOrCreate?: TicketVentaCreateOrConnectWithoutFichaInput | TicketVentaCreateOrConnectWithoutFichaInput[]
    createMany?: TicketVentaCreateManyFichaInputEnvelope
    connect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
  }

  export type DetalleServicioUpdateOneWithoutFichaNestedInput = {
    create?: XOR<DetalleServicioCreateWithoutFichaInput, DetalleServicioUncheckedCreateWithoutFichaInput>
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutFichaInput
    upsert?: DetalleServicioUpsertWithoutFichaInput
    disconnect?: DetalleServicioWhereInput | boolean
    delete?: DetalleServicioWhereInput | boolean
    connect?: DetalleServicioWhereUniqueInput
    update?: XOR<XOR<DetalleServicioUpdateToOneWithWhereWithoutFichaInput, DetalleServicioUpdateWithoutFichaInput>, DetalleServicioUncheckedUpdateWithoutFichaInput>
  }

  export type TicketVentaUpdateManyWithoutFichaNestedInput = {
    create?: XOR<TicketVentaCreateWithoutFichaInput, TicketVentaUncheckedCreateWithoutFichaInput> | TicketVentaCreateWithoutFichaInput[] | TicketVentaUncheckedCreateWithoutFichaInput[]
    connectOrCreate?: TicketVentaCreateOrConnectWithoutFichaInput | TicketVentaCreateOrConnectWithoutFichaInput[]
    upsert?: TicketVentaUpsertWithWhereUniqueWithoutFichaInput | TicketVentaUpsertWithWhereUniqueWithoutFichaInput[]
    createMany?: TicketVentaCreateManyFichaInputEnvelope
    set?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    disconnect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    delete?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    connect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    update?: TicketVentaUpdateWithWhereUniqueWithoutFichaInput | TicketVentaUpdateWithWhereUniqueWithoutFichaInput[]
    updateMany?: TicketVentaUpdateManyWithWhereWithoutFichaInput | TicketVentaUpdateManyWithWhereWithoutFichaInput[]
    deleteMany?: TicketVentaScalarWhereInput | TicketVentaScalarWhereInput[]
  }

  export type DetalleServicioUncheckedUpdateOneWithoutFichaNestedInput = {
    create?: XOR<DetalleServicioCreateWithoutFichaInput, DetalleServicioUncheckedCreateWithoutFichaInput>
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutFichaInput
    upsert?: DetalleServicioUpsertWithoutFichaInput
    disconnect?: DetalleServicioWhereInput | boolean
    delete?: DetalleServicioWhereInput | boolean
    connect?: DetalleServicioWhereUniqueInput
    update?: XOR<XOR<DetalleServicioUpdateToOneWithWhereWithoutFichaInput, DetalleServicioUpdateWithoutFichaInput>, DetalleServicioUncheckedUpdateWithoutFichaInput>
  }

  export type TicketVentaUncheckedUpdateManyWithoutFichaNestedInput = {
    create?: XOR<TicketVentaCreateWithoutFichaInput, TicketVentaUncheckedCreateWithoutFichaInput> | TicketVentaCreateWithoutFichaInput[] | TicketVentaUncheckedCreateWithoutFichaInput[]
    connectOrCreate?: TicketVentaCreateOrConnectWithoutFichaInput | TicketVentaCreateOrConnectWithoutFichaInput[]
    upsert?: TicketVentaUpsertWithWhereUniqueWithoutFichaInput | TicketVentaUpsertWithWhereUniqueWithoutFichaInput[]
    createMany?: TicketVentaCreateManyFichaInputEnvelope
    set?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    disconnect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    delete?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    connect?: TicketVentaWhereUniqueInput | TicketVentaWhereUniqueInput[]
    update?: TicketVentaUpdateWithWhereUniqueWithoutFichaInput | TicketVentaUpdateWithWhereUniqueWithoutFichaInput[]
    updateMany?: TicketVentaUpdateManyWithWhereWithoutFichaInput | TicketVentaUpdateManyWithWhereWithoutFichaInput[]
    deleteMany?: TicketVentaScalarWhereInput | TicketVentaScalarWhereInput[]
  }

  export type DetalleServicioCreateNestedManyWithoutServicioInput = {
    create?: XOR<DetalleServicioCreateWithoutServicioInput, DetalleServicioUncheckedCreateWithoutServicioInput> | DetalleServicioCreateWithoutServicioInput[] | DetalleServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutServicioInput | DetalleServicioCreateOrConnectWithoutServicioInput[]
    createMany?: DetalleServicioCreateManyServicioInputEnvelope
    connect?: DetalleServicioWhereUniqueInput | DetalleServicioWhereUniqueInput[]
  }

  export type DetalleServicioUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<DetalleServicioCreateWithoutServicioInput, DetalleServicioUncheckedCreateWithoutServicioInput> | DetalleServicioCreateWithoutServicioInput[] | DetalleServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutServicioInput | DetalleServicioCreateOrConnectWithoutServicioInput[]
    createMany?: DetalleServicioCreateManyServicioInputEnvelope
    connect?: DetalleServicioWhereUniqueInput | DetalleServicioWhereUniqueInput[]
  }

  export type DetalleServicioUpdateManyWithoutServicioNestedInput = {
    create?: XOR<DetalleServicioCreateWithoutServicioInput, DetalleServicioUncheckedCreateWithoutServicioInput> | DetalleServicioCreateWithoutServicioInput[] | DetalleServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutServicioInput | DetalleServicioCreateOrConnectWithoutServicioInput[]
    upsert?: DetalleServicioUpsertWithWhereUniqueWithoutServicioInput | DetalleServicioUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: DetalleServicioCreateManyServicioInputEnvelope
    set?: DetalleServicioWhereUniqueInput | DetalleServicioWhereUniqueInput[]
    disconnect?: DetalleServicioWhereUniqueInput | DetalleServicioWhereUniqueInput[]
    delete?: DetalleServicioWhereUniqueInput | DetalleServicioWhereUniqueInput[]
    connect?: DetalleServicioWhereUniqueInput | DetalleServicioWhereUniqueInput[]
    update?: DetalleServicioUpdateWithWhereUniqueWithoutServicioInput | DetalleServicioUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: DetalleServicioUpdateManyWithWhereWithoutServicioInput | DetalleServicioUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: DetalleServicioScalarWhereInput | DetalleServicioScalarWhereInput[]
  }

  export type DetalleServicioUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<DetalleServicioCreateWithoutServicioInput, DetalleServicioUncheckedCreateWithoutServicioInput> | DetalleServicioCreateWithoutServicioInput[] | DetalleServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutServicioInput | DetalleServicioCreateOrConnectWithoutServicioInput[]
    upsert?: DetalleServicioUpsertWithWhereUniqueWithoutServicioInput | DetalleServicioUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: DetalleServicioCreateManyServicioInputEnvelope
    set?: DetalleServicioWhereUniqueInput | DetalleServicioWhereUniqueInput[]
    disconnect?: DetalleServicioWhereUniqueInput | DetalleServicioWhereUniqueInput[]
    delete?: DetalleServicioWhereUniqueInput | DetalleServicioWhereUniqueInput[]
    connect?: DetalleServicioWhereUniqueInput | DetalleServicioWhereUniqueInput[]
    update?: DetalleServicioUpdateWithWhereUniqueWithoutServicioInput | DetalleServicioUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: DetalleServicioUpdateManyWithWhereWithoutServicioInput | DetalleServicioUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: DetalleServicioScalarWhereInput | DetalleServicioScalarWhereInput[]
  }

  export type TicketServicioCreateNestedOneWithoutAdditionalPaymentsInput = {
    create?: XOR<TicketServicioCreateWithoutAdditionalPaymentsInput, TicketServicioUncheckedCreateWithoutAdditionalPaymentsInput>
    connectOrCreate?: TicketServicioCreateOrConnectWithoutAdditionalPaymentsInput
    connect?: TicketServicioWhereUniqueInput
  }

  export type TicketServicioUpdateOneRequiredWithoutAdditionalPaymentsNestedInput = {
    create?: XOR<TicketServicioCreateWithoutAdditionalPaymentsInput, TicketServicioUncheckedCreateWithoutAdditionalPaymentsInput>
    connectOrCreate?: TicketServicioCreateOrConnectWithoutAdditionalPaymentsInput
    upsert?: TicketServicioUpsertWithoutAdditionalPaymentsInput
    connect?: TicketServicioWhereUniqueInput
    update?: XOR<XOR<TicketServicioUpdateToOneWithWhereWithoutAdditionalPaymentsInput, TicketServicioUpdateWithoutAdditionalPaymentsInput>, TicketServicioUncheckedUpdateWithoutAdditionalPaymentsInput>
  }

  export type FichaCreateNestedOneWithoutDetalleServicioInput = {
    create?: XOR<FichaCreateWithoutDetalleServicioInput, FichaUncheckedCreateWithoutDetalleServicioInput>
    connectOrCreate?: FichaCreateOrConnectWithoutDetalleServicioInput
    connect?: FichaWhereUniqueInput
  }

  export type TicketServicioCreateNestedOneWithoutDetalleServicioInput = {
    create?: XOR<TicketServicioCreateWithoutDetalleServicioInput, TicketServicioUncheckedCreateWithoutDetalleServicioInput>
    connectOrCreate?: TicketServicioCreateOrConnectWithoutDetalleServicioInput
    connect?: TicketServicioWhereUniqueInput
  }

  export type ServicioCreateNestedOneWithoutDetalleServicioInput = {
    create?: XOR<ServicioCreateWithoutDetalleServicioInput, ServicioUncheckedCreateWithoutDetalleServicioInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutDetalleServicioInput
    connect?: ServicioWhereUniqueInput
  }

  export type FichaUpdateOneRequiredWithoutDetalleServicioNestedInput = {
    create?: XOR<FichaCreateWithoutDetalleServicioInput, FichaUncheckedCreateWithoutDetalleServicioInput>
    connectOrCreate?: FichaCreateOrConnectWithoutDetalleServicioInput
    upsert?: FichaUpsertWithoutDetalleServicioInput
    connect?: FichaWhereUniqueInput
    update?: XOR<XOR<FichaUpdateToOneWithWhereWithoutDetalleServicioInput, FichaUpdateWithoutDetalleServicioInput>, FichaUncheckedUpdateWithoutDetalleServicioInput>
  }

  export type TicketServicioUpdateOneRequiredWithoutDetalleServicioNestedInput = {
    create?: XOR<TicketServicioCreateWithoutDetalleServicioInput, TicketServicioUncheckedCreateWithoutDetalleServicioInput>
    connectOrCreate?: TicketServicioCreateOrConnectWithoutDetalleServicioInput
    upsert?: TicketServicioUpsertWithoutDetalleServicioInput
    connect?: TicketServicioWhereUniqueInput
    update?: XOR<XOR<TicketServicioUpdateToOneWithWhereWithoutDetalleServicioInput, TicketServicioUpdateWithoutDetalleServicioInput>, TicketServicioUncheckedUpdateWithoutDetalleServicioInput>
  }

  export type ServicioUpdateOneRequiredWithoutDetalleServicioNestedInput = {
    create?: XOR<ServicioCreateWithoutDetalleServicioInput, ServicioUncheckedCreateWithoutDetalleServicioInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutDetalleServicioInput
    upsert?: ServicioUpsertWithoutDetalleServicioInput
    connect?: ServicioWhereUniqueInput
    update?: XOR<XOR<ServicioUpdateToOneWithWhereWithoutDetalleServicioInput, ServicioUpdateWithoutDetalleServicioInput>, ServicioUncheckedUpdateWithoutDetalleServicioInput>
  }

  export type TicketVentaCreateNestedOneWithoutDetalleVentaInput = {
    create?: XOR<TicketVentaCreateWithoutDetalleVentaInput, TicketVentaUncheckedCreateWithoutDetalleVentaInput>
    connectOrCreate?: TicketVentaCreateOrConnectWithoutDetalleVentaInput
    connect?: TicketVentaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutDetalleVentaInput = {
    create?: XOR<UsuarioCreateWithoutDetalleVentaInput, UsuarioUncheckedCreateWithoutDetalleVentaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDetalleVentaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutDetalleVentaInput = {
    create?: XOR<ProductoCreateWithoutDetalleVentaInput, ProductoUncheckedCreateWithoutDetalleVentaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetalleVentaInput
    connect?: ProductoWhereUniqueInput
  }

  export type TicketVentaUpdateOneRequiredWithoutDetalleVentaNestedInput = {
    create?: XOR<TicketVentaCreateWithoutDetalleVentaInput, TicketVentaUncheckedCreateWithoutDetalleVentaInput>
    connectOrCreate?: TicketVentaCreateOrConnectWithoutDetalleVentaInput
    upsert?: TicketVentaUpsertWithoutDetalleVentaInput
    connect?: TicketVentaWhereUniqueInput
    update?: XOR<XOR<TicketVentaUpdateToOneWithWhereWithoutDetalleVentaInput, TicketVentaUpdateWithoutDetalleVentaInput>, TicketVentaUncheckedUpdateWithoutDetalleVentaInput>
  }

  export type UsuarioUpdateOneWithoutDetalleVentaNestedInput = {
    create?: XOR<UsuarioCreateWithoutDetalleVentaInput, UsuarioUncheckedCreateWithoutDetalleVentaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDetalleVentaInput
    upsert?: UsuarioUpsertWithoutDetalleVentaInput
    disconnect?: boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDetalleVentaInput, UsuarioUpdateWithoutDetalleVentaInput>, UsuarioUncheckedUpdateWithoutDetalleVentaInput>
  }

  export type ProductoUpdateOneRequiredWithoutDetalleVentaNestedInput = {
    create?: XOR<ProductoCreateWithoutDetalleVentaInput, ProductoUncheckedCreateWithoutDetalleVentaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetalleVentaInput
    upsert?: ProductoUpsertWithoutDetalleVentaInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutDetalleVentaInput, ProductoUpdateWithoutDetalleVentaInput>, ProductoUncheckedUpdateWithoutDetalleVentaInput>
  }

  export type UsuarioCreateNestedOneWithoutTicketServicioInput = {
    create?: XOR<UsuarioCreateWithoutTicketServicioInput, UsuarioUncheckedCreateWithoutTicketServicioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTicketServicioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DetalleServicioCreateNestedOneWithoutTicketServicioInput = {
    create?: XOR<DetalleServicioCreateWithoutTicketServicioInput, DetalleServicioUncheckedCreateWithoutTicketServicioInput>
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutTicketServicioInput
    connect?: DetalleServicioWhereUniqueInput
  }

  export type additionalPaymentsCreateNestedManyWithoutTicketInput = {
    create?: XOR<additionalPaymentsCreateWithoutTicketInput, additionalPaymentsUncheckedCreateWithoutTicketInput> | additionalPaymentsCreateWithoutTicketInput[] | additionalPaymentsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: additionalPaymentsCreateOrConnectWithoutTicketInput | additionalPaymentsCreateOrConnectWithoutTicketInput[]
    createMany?: additionalPaymentsCreateManyTicketInputEnvelope
    connect?: additionalPaymentsWhereUniqueInput | additionalPaymentsWhereUniqueInput[]
  }

  export type DetalleServicioUncheckedCreateNestedOneWithoutTicketServicioInput = {
    create?: XOR<DetalleServicioCreateWithoutTicketServicioInput, DetalleServicioUncheckedCreateWithoutTicketServicioInput>
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutTicketServicioInput
    connect?: DetalleServicioWhereUniqueInput
  }

  export type additionalPaymentsUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<additionalPaymentsCreateWithoutTicketInput, additionalPaymentsUncheckedCreateWithoutTicketInput> | additionalPaymentsCreateWithoutTicketInput[] | additionalPaymentsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: additionalPaymentsCreateOrConnectWithoutTicketInput | additionalPaymentsCreateOrConnectWithoutTicketInput[]
    createMany?: additionalPaymentsCreateManyTicketInputEnvelope
    connect?: additionalPaymentsWhereUniqueInput | additionalPaymentsWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutTicketServicioNestedInput = {
    create?: XOR<UsuarioCreateWithoutTicketServicioInput, UsuarioUncheckedCreateWithoutTicketServicioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTicketServicioInput
    upsert?: UsuarioUpsertWithoutTicketServicioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTicketServicioInput, UsuarioUpdateWithoutTicketServicioInput>, UsuarioUncheckedUpdateWithoutTicketServicioInput>
  }

  export type DetalleServicioUpdateOneWithoutTicketServicioNestedInput = {
    create?: XOR<DetalleServicioCreateWithoutTicketServicioInput, DetalleServicioUncheckedCreateWithoutTicketServicioInput>
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutTicketServicioInput
    upsert?: DetalleServicioUpsertWithoutTicketServicioInput
    disconnect?: DetalleServicioWhereInput | boolean
    delete?: DetalleServicioWhereInput | boolean
    connect?: DetalleServicioWhereUniqueInput
    update?: XOR<XOR<DetalleServicioUpdateToOneWithWhereWithoutTicketServicioInput, DetalleServicioUpdateWithoutTicketServicioInput>, DetalleServicioUncheckedUpdateWithoutTicketServicioInput>
  }

  export type additionalPaymentsUpdateManyWithoutTicketNestedInput = {
    create?: XOR<additionalPaymentsCreateWithoutTicketInput, additionalPaymentsUncheckedCreateWithoutTicketInput> | additionalPaymentsCreateWithoutTicketInput[] | additionalPaymentsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: additionalPaymentsCreateOrConnectWithoutTicketInput | additionalPaymentsCreateOrConnectWithoutTicketInput[]
    upsert?: additionalPaymentsUpsertWithWhereUniqueWithoutTicketInput | additionalPaymentsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: additionalPaymentsCreateManyTicketInputEnvelope
    set?: additionalPaymentsWhereUniqueInput | additionalPaymentsWhereUniqueInput[]
    disconnect?: additionalPaymentsWhereUniqueInput | additionalPaymentsWhereUniqueInput[]
    delete?: additionalPaymentsWhereUniqueInput | additionalPaymentsWhereUniqueInput[]
    connect?: additionalPaymentsWhereUniqueInput | additionalPaymentsWhereUniqueInput[]
    update?: additionalPaymentsUpdateWithWhereUniqueWithoutTicketInput | additionalPaymentsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: additionalPaymentsUpdateManyWithWhereWithoutTicketInput | additionalPaymentsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: additionalPaymentsScalarWhereInput | additionalPaymentsScalarWhereInput[]
  }

  export type DetalleServicioUncheckedUpdateOneWithoutTicketServicioNestedInput = {
    create?: XOR<DetalleServicioCreateWithoutTicketServicioInput, DetalleServicioUncheckedCreateWithoutTicketServicioInput>
    connectOrCreate?: DetalleServicioCreateOrConnectWithoutTicketServicioInput
    upsert?: DetalleServicioUpsertWithoutTicketServicioInput
    disconnect?: DetalleServicioWhereInput | boolean
    delete?: DetalleServicioWhereInput | boolean
    connect?: DetalleServicioWhereUniqueInput
    update?: XOR<XOR<DetalleServicioUpdateToOneWithWhereWithoutTicketServicioInput, DetalleServicioUpdateWithoutTicketServicioInput>, DetalleServicioUncheckedUpdateWithoutTicketServicioInput>
  }

  export type additionalPaymentsUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<additionalPaymentsCreateWithoutTicketInput, additionalPaymentsUncheckedCreateWithoutTicketInput> | additionalPaymentsCreateWithoutTicketInput[] | additionalPaymentsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: additionalPaymentsCreateOrConnectWithoutTicketInput | additionalPaymentsCreateOrConnectWithoutTicketInput[]
    upsert?: additionalPaymentsUpsertWithWhereUniqueWithoutTicketInput | additionalPaymentsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: additionalPaymentsCreateManyTicketInputEnvelope
    set?: additionalPaymentsWhereUniqueInput | additionalPaymentsWhereUniqueInput[]
    disconnect?: additionalPaymentsWhereUniqueInput | additionalPaymentsWhereUniqueInput[]
    delete?: additionalPaymentsWhereUniqueInput | additionalPaymentsWhereUniqueInput[]
    connect?: additionalPaymentsWhereUniqueInput | additionalPaymentsWhereUniqueInput[]
    update?: additionalPaymentsUpdateWithWhereUniqueWithoutTicketInput | additionalPaymentsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: additionalPaymentsUpdateManyWithWhereWithoutTicketInput | additionalPaymentsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: additionalPaymentsScalarWhereInput | additionalPaymentsScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutTicketVentaInput = {
    create?: XOR<UsuarioCreateWithoutTicketVentaInput, UsuarioUncheckedCreateWithoutTicketVentaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTicketVentaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DetalleVentaCreateNestedManyWithoutTicketVentaInput = {
    create?: XOR<DetalleVentaCreateWithoutTicketVentaInput, DetalleVentaUncheckedCreateWithoutTicketVentaInput> | DetalleVentaCreateWithoutTicketVentaInput[] | DetalleVentaUncheckedCreateWithoutTicketVentaInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutTicketVentaInput | DetalleVentaCreateOrConnectWithoutTicketVentaInput[]
    createMany?: DetalleVentaCreateManyTicketVentaInputEnvelope
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
  }

  export type FichaCreateNestedOneWithoutTicketVentaInput = {
    create?: XOR<FichaCreateWithoutTicketVentaInput, FichaUncheckedCreateWithoutTicketVentaInput>
    connectOrCreate?: FichaCreateOrConnectWithoutTicketVentaInput
    connect?: FichaWhereUniqueInput
  }

  export type DetalleVentaUncheckedCreateNestedManyWithoutTicketVentaInput = {
    create?: XOR<DetalleVentaCreateWithoutTicketVentaInput, DetalleVentaUncheckedCreateWithoutTicketVentaInput> | DetalleVentaCreateWithoutTicketVentaInput[] | DetalleVentaUncheckedCreateWithoutTicketVentaInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutTicketVentaInput | DetalleVentaCreateOrConnectWithoutTicketVentaInput[]
    createMany?: DetalleVentaCreateManyTicketVentaInputEnvelope
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutTicketVentaNestedInput = {
    create?: XOR<UsuarioCreateWithoutTicketVentaInput, UsuarioUncheckedCreateWithoutTicketVentaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTicketVentaInput
    upsert?: UsuarioUpsertWithoutTicketVentaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTicketVentaInput, UsuarioUpdateWithoutTicketVentaInput>, UsuarioUncheckedUpdateWithoutTicketVentaInput>
  }

  export type DetalleVentaUpdateManyWithoutTicketVentaNestedInput = {
    create?: XOR<DetalleVentaCreateWithoutTicketVentaInput, DetalleVentaUncheckedCreateWithoutTicketVentaInput> | DetalleVentaCreateWithoutTicketVentaInput[] | DetalleVentaUncheckedCreateWithoutTicketVentaInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutTicketVentaInput | DetalleVentaCreateOrConnectWithoutTicketVentaInput[]
    upsert?: DetalleVentaUpsertWithWhereUniqueWithoutTicketVentaInput | DetalleVentaUpsertWithWhereUniqueWithoutTicketVentaInput[]
    createMany?: DetalleVentaCreateManyTicketVentaInputEnvelope
    set?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    disconnect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    delete?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    update?: DetalleVentaUpdateWithWhereUniqueWithoutTicketVentaInput | DetalleVentaUpdateWithWhereUniqueWithoutTicketVentaInput[]
    updateMany?: DetalleVentaUpdateManyWithWhereWithoutTicketVentaInput | DetalleVentaUpdateManyWithWhereWithoutTicketVentaInput[]
    deleteMany?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
  }

  export type FichaUpdateOneWithoutTicketVentaNestedInput = {
    create?: XOR<FichaCreateWithoutTicketVentaInput, FichaUncheckedCreateWithoutTicketVentaInput>
    connectOrCreate?: FichaCreateOrConnectWithoutTicketVentaInput
    upsert?: FichaUpsertWithoutTicketVentaInput
    disconnect?: boolean
    delete?: FichaWhereInput | boolean
    connect?: FichaWhereUniqueInput
    update?: XOR<XOR<FichaUpdateToOneWithWhereWithoutTicketVentaInput, FichaUpdateWithoutTicketVentaInput>, FichaUncheckedUpdateWithoutTicketVentaInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DetalleVentaUncheckedUpdateManyWithoutTicketVentaNestedInput = {
    create?: XOR<DetalleVentaCreateWithoutTicketVentaInput, DetalleVentaUncheckedCreateWithoutTicketVentaInput> | DetalleVentaCreateWithoutTicketVentaInput[] | DetalleVentaUncheckedCreateWithoutTicketVentaInput[]
    connectOrCreate?: DetalleVentaCreateOrConnectWithoutTicketVentaInput | DetalleVentaCreateOrConnectWithoutTicketVentaInput[]
    upsert?: DetalleVentaUpsertWithWhereUniqueWithoutTicketVentaInput | DetalleVentaUpsertWithWhereUniqueWithoutTicketVentaInput[]
    createMany?: DetalleVentaCreateManyTicketVentaInputEnvelope
    set?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    disconnect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    delete?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    connect?: DetalleVentaWhereUniqueInput | DetalleVentaWhereUniqueInput[]
    update?: DetalleVentaUpdateWithWhereUniqueWithoutTicketVentaInput | DetalleVentaUpdateWithWhereUniqueWithoutTicketVentaInput[]
    updateMany?: DetalleVentaUpdateManyWithWhereWithoutTicketVentaInput | DetalleVentaUpdateManyWithWhereWithoutTicketVentaInput[]
    deleteMany?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type TicketServicioCreateWithoutTecnicoInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    status?: boolean
    amount: number
    medioPago?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleServicio?: DetalleServicioCreateNestedOneWithoutTicketServicioInput
    additionalPayments?: additionalPaymentsCreateNestedManyWithoutTicketInput
  }

  export type TicketServicioUncheckedCreateWithoutTecnicoInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    status?: boolean
    amount: number
    medioPago?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleServicio?: DetalleServicioUncheckedCreateNestedOneWithoutTicketServicioInput
    additionalPayments?: additionalPaymentsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketServicioCreateOrConnectWithoutTecnicoInput = {
    where: TicketServicioWhereUniqueInput
    create: XOR<TicketServicioCreateWithoutTecnicoInput, TicketServicioUncheckedCreateWithoutTecnicoInput>
  }

  export type TicketServicioCreateManyTecnicoInputEnvelope = {
    data: TicketServicioCreateManyTecnicoInput | TicketServicioCreateManyTecnicoInput[]
  }

  export type DetalleVentaCreateWithoutUsuarioInput = {
    id?: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
    ticketVenta: TicketVentaCreateNestedOneWithoutDetalleVentaInput
    producto: ProductoCreateNestedOneWithoutDetalleVentaInput
  }

  export type DetalleVentaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    productoId: string
    ticketVentaId: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleVentaCreateOrConnectWithoutUsuarioInput = {
    where: DetalleVentaWhereUniqueInput
    create: XOR<DetalleVentaCreateWithoutUsuarioInput, DetalleVentaUncheckedCreateWithoutUsuarioInput>
  }

  export type DetalleVentaCreateManyUsuarioInputEnvelope = {
    data: DetalleVentaCreateManyUsuarioInput | DetalleVentaCreateManyUsuarioInput[]
  }

  export type TicketVentaCreateWithoutVendedorInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    amount: number
    medioPago?: string
    status: boolean
    createAt?: Date | string
    updateAt?: Date | string
    DetalleVenta?: DetalleVentaCreateNestedManyWithoutTicketVentaInput
    Ficha?: FichaCreateNestedOneWithoutTicketVentaInput
  }

  export type TicketVentaUncheckedCreateWithoutVendedorInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    amount: number
    medioPago?: string
    status: boolean
    createAt?: Date | string
    updateAt?: Date | string
    fichaId?: string | null
    DetalleVenta?: DetalleVentaUncheckedCreateNestedManyWithoutTicketVentaInput
  }

  export type TicketVentaCreateOrConnectWithoutVendedorInput = {
    where: TicketVentaWhereUniqueInput
    create: XOR<TicketVentaCreateWithoutVendedorInput, TicketVentaUncheckedCreateWithoutVendedorInput>
  }

  export type TicketVentaCreateManyVendedorInputEnvelope = {
    data: TicketVentaCreateManyVendedorInput | TicketVentaCreateManyVendedorInput[]
  }

  export type TicketServicioUpsertWithWhereUniqueWithoutTecnicoInput = {
    where: TicketServicioWhereUniqueInput
    update: XOR<TicketServicioUpdateWithoutTecnicoInput, TicketServicioUncheckedUpdateWithoutTecnicoInput>
    create: XOR<TicketServicioCreateWithoutTecnicoInput, TicketServicioUncheckedCreateWithoutTecnicoInput>
  }

  export type TicketServicioUpdateWithWhereUniqueWithoutTecnicoInput = {
    where: TicketServicioWhereUniqueInput
    data: XOR<TicketServicioUpdateWithoutTecnicoInput, TicketServicioUncheckedUpdateWithoutTecnicoInput>
  }

  export type TicketServicioUpdateManyWithWhereWithoutTecnicoInput = {
    where: TicketServicioScalarWhereInput
    data: XOR<TicketServicioUpdateManyMutationInput, TicketServicioUncheckedUpdateManyWithoutTecnicoInput>
  }

  export type TicketServicioScalarWhereInput = {
    AND?: TicketServicioScalarWhereInput | TicketServicioScalarWhereInput[]
    OR?: TicketServicioScalarWhereInput[]
    NOT?: TicketServicioScalarWhereInput | TicketServicioScalarWhereInput[]
    id?: StringFilter<"TicketServicio"> | string
    clientName?: StringFilter<"TicketServicio"> | string
    clientDni?: StringFilter<"TicketServicio"> | string
    clientPhoneNumber?: StringFilter<"TicketServicio"> | string
    clientAddress?: StringFilter<"TicketServicio"> | string
    clientEmail?: StringFilter<"TicketServicio"> | string
    status?: BoolFilter<"TicketServicio"> | boolean
    amount?: FloatFilter<"TicketServicio"> | number
    medioPago?: StringFilter<"TicketServicio"> | string
    description?: StringFilter<"TicketServicio"> | string
    usuarioId?: StringFilter<"TicketServicio"> | string
    createAt?: DateTimeFilter<"TicketServicio"> | Date | string
    updateAt?: DateTimeFilter<"TicketServicio"> | Date | string
  }

  export type DetalleVentaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DetalleVentaWhereUniqueInput
    update: XOR<DetalleVentaUpdateWithoutUsuarioInput, DetalleVentaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DetalleVentaCreateWithoutUsuarioInput, DetalleVentaUncheckedCreateWithoutUsuarioInput>
  }

  export type DetalleVentaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DetalleVentaWhereUniqueInput
    data: XOR<DetalleVentaUpdateWithoutUsuarioInput, DetalleVentaUncheckedUpdateWithoutUsuarioInput>
  }

  export type DetalleVentaUpdateManyWithWhereWithoutUsuarioInput = {
    where: DetalleVentaScalarWhereInput
    data: XOR<DetalleVentaUpdateManyMutationInput, DetalleVentaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DetalleVentaScalarWhereInput = {
    AND?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
    OR?: DetalleVentaScalarWhereInput[]
    NOT?: DetalleVentaScalarWhereInput | DetalleVentaScalarWhereInput[]
    id?: StringFilter<"DetalleVenta"> | string
    productoId?: StringFilter<"DetalleVenta"> | string
    usuarioId?: StringFilter<"DetalleVenta"> | string
    ticketVentaId?: StringFilter<"DetalleVenta"> | string
    units?: IntFilter<"DetalleVenta"> | number
    createAt?: DateTimeFilter<"DetalleVenta"> | Date | string
    updateAt?: DateTimeFilter<"DetalleVenta"> | Date | string
  }

  export type TicketVentaUpsertWithWhereUniqueWithoutVendedorInput = {
    where: TicketVentaWhereUniqueInput
    update: XOR<TicketVentaUpdateWithoutVendedorInput, TicketVentaUncheckedUpdateWithoutVendedorInput>
    create: XOR<TicketVentaCreateWithoutVendedorInput, TicketVentaUncheckedCreateWithoutVendedorInput>
  }

  export type TicketVentaUpdateWithWhereUniqueWithoutVendedorInput = {
    where: TicketVentaWhereUniqueInput
    data: XOR<TicketVentaUpdateWithoutVendedorInput, TicketVentaUncheckedUpdateWithoutVendedorInput>
  }

  export type TicketVentaUpdateManyWithWhereWithoutVendedorInput = {
    where: TicketVentaScalarWhereInput
    data: XOR<TicketVentaUpdateManyMutationInput, TicketVentaUncheckedUpdateManyWithoutVendedorInput>
  }

  export type TicketVentaScalarWhereInput = {
    AND?: TicketVentaScalarWhereInput | TicketVentaScalarWhereInput[]
    OR?: TicketVentaScalarWhereInput[]
    NOT?: TicketVentaScalarWhereInput | TicketVentaScalarWhereInput[]
    id?: StringFilter<"TicketVenta"> | string
    clientName?: StringFilter<"TicketVenta"> | string
    clientDni?: StringFilter<"TicketVenta"> | string
    clientPhoneNumber?: StringFilter<"TicketVenta"> | string
    clientAddress?: StringFilter<"TicketVenta"> | string
    clientEmail?: StringFilter<"TicketVenta"> | string
    usuarioId?: StringFilter<"TicketVenta"> | string
    amount?: FloatFilter<"TicketVenta"> | number
    medioPago?: StringFilter<"TicketVenta"> | string
    status?: BoolFilter<"TicketVenta"> | boolean
    createAt?: DateTimeFilter<"TicketVenta"> | Date | string
    updateAt?: DateTimeFilter<"TicketVenta"> | Date | string
    fichaId?: StringNullableFilter<"TicketVenta"> | string | null
  }

  export type ProductoCreateWithoutCategoriaInput = {
    id?: string
    name: string
    shortName: string
    description: string
    price: number
    stock: number
    model: string
    isVigent?: boolean
    brand: string
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleVenta?: DetalleVentaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id?: string
    name: string
    shortName: string
    description: string
    price: number
    stock: number
    model: string
    isVigent?: boolean
    brand: string
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleVenta?: DetalleVentaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCreateManyCategoriaInputEnvelope = {
    data: ProductoCreateManyCategoriaInput | ProductoCreateManyCategoriaInput[]
  }

  export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id?: StringFilter<"Producto"> | string
    name?: StringFilter<"Producto"> | string
    shortName?: StringFilter<"Producto"> | string
    description?: StringFilter<"Producto"> | string
    price?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    model?: StringFilter<"Producto"> | string
    isVigent?: BoolFilter<"Producto"> | boolean
    brand?: StringFilter<"Producto"> | string
    urlImage?: StringFilter<"Producto"> | string
    categoriaId?: StringFilter<"Producto"> | string
    createAt?: DateTimeFilter<"Producto"> | Date | string
    updateAt?: DateTimeFilter<"Producto"> | Date | string
  }

  export type CategoriaCreateWithoutProductoInput = {
    id?: string
    name: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoriaUncheckedCreateWithoutProductoInput = {
    id?: string
    name: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutProductoInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProductoInput, CategoriaUncheckedCreateWithoutProductoInput>
  }

  export type DetalleVentaCreateWithoutProductoInput = {
    id?: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
    ticketVenta: TicketVentaCreateNestedOneWithoutDetalleVentaInput
    Usuario?: UsuarioCreateNestedOneWithoutDetalleVentaInput
  }

  export type DetalleVentaUncheckedCreateWithoutProductoInput = {
    id?: string
    usuarioId: string
    ticketVentaId: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleVentaCreateOrConnectWithoutProductoInput = {
    where: DetalleVentaWhereUniqueInput
    create: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput>
  }

  export type DetalleVentaCreateManyProductoInputEnvelope = {
    data: DetalleVentaCreateManyProductoInput | DetalleVentaCreateManyProductoInput[]
  }

  export type CategoriaUpsertWithoutProductoInput = {
    update: XOR<CategoriaUpdateWithoutProductoInput, CategoriaUncheckedUpdateWithoutProductoInput>
    create: XOR<CategoriaCreateWithoutProductoInput, CategoriaUncheckedCreateWithoutProductoInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProductoInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProductoInput, CategoriaUncheckedUpdateWithoutProductoInput>
  }

  export type CategoriaUpdateWithoutProductoInput = {
    name?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateWithoutProductoInput = {
    name?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaUpsertWithWhereUniqueWithoutProductoInput = {
    where: DetalleVentaWhereUniqueInput
    update: XOR<DetalleVentaUpdateWithoutProductoInput, DetalleVentaUncheckedUpdateWithoutProductoInput>
    create: XOR<DetalleVentaCreateWithoutProductoInput, DetalleVentaUncheckedCreateWithoutProductoInput>
  }

  export type DetalleVentaUpdateWithWhereUniqueWithoutProductoInput = {
    where: DetalleVentaWhereUniqueInput
    data: XOR<DetalleVentaUpdateWithoutProductoInput, DetalleVentaUncheckedUpdateWithoutProductoInput>
  }

  export type DetalleVentaUpdateManyWithWhereWithoutProductoInput = {
    where: DetalleVentaScalarWhereInput
    data: XOR<DetalleVentaUpdateManyMutationInput, DetalleVentaUncheckedUpdateManyWithoutProductoInput>
  }

  export type DetalleServicioCreateWithoutFichaInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    ticketServicio: TicketServicioCreateNestedOneWithoutDetalleServicioInput
    servicio: ServicioCreateNestedOneWithoutDetalleServicioInput
  }

  export type DetalleServicioUncheckedCreateWithoutFichaInput = {
    id?: string
    servicioId: string
    ticketServicioId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleServicioCreateOrConnectWithoutFichaInput = {
    where: DetalleServicioWhereUniqueInput
    create: XOR<DetalleServicioCreateWithoutFichaInput, DetalleServicioUncheckedCreateWithoutFichaInput>
  }

  export type TicketVentaCreateWithoutFichaInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    amount: number
    medioPago?: string
    status: boolean
    createAt?: Date | string
    updateAt?: Date | string
    vendedor: UsuarioCreateNestedOneWithoutTicketVentaInput
    DetalleVenta?: DetalleVentaCreateNestedManyWithoutTicketVentaInput
  }

  export type TicketVentaUncheckedCreateWithoutFichaInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    usuarioId: string
    amount: number
    medioPago?: string
    status: boolean
    createAt?: Date | string
    updateAt?: Date | string
    DetalleVenta?: DetalleVentaUncheckedCreateNestedManyWithoutTicketVentaInput
  }

  export type TicketVentaCreateOrConnectWithoutFichaInput = {
    where: TicketVentaWhereUniqueInput
    create: XOR<TicketVentaCreateWithoutFichaInput, TicketVentaUncheckedCreateWithoutFichaInput>
  }

  export type TicketVentaCreateManyFichaInputEnvelope = {
    data: TicketVentaCreateManyFichaInput | TicketVentaCreateManyFichaInput[]
  }

  export type DetalleServicioUpsertWithoutFichaInput = {
    update: XOR<DetalleServicioUpdateWithoutFichaInput, DetalleServicioUncheckedUpdateWithoutFichaInput>
    create: XOR<DetalleServicioCreateWithoutFichaInput, DetalleServicioUncheckedCreateWithoutFichaInput>
    where?: DetalleServicioWhereInput
  }

  export type DetalleServicioUpdateToOneWithWhereWithoutFichaInput = {
    where?: DetalleServicioWhereInput
    data: XOR<DetalleServicioUpdateWithoutFichaInput, DetalleServicioUncheckedUpdateWithoutFichaInput>
  }

  export type DetalleServicioUpdateWithoutFichaInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketServicio?: TicketServicioUpdateOneRequiredWithoutDetalleServicioNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutDetalleServicioNestedInput
  }

  export type DetalleServicioUncheckedUpdateWithoutFichaInput = {
    servicioId?: StringFieldUpdateOperationsInput | string
    ticketServicioId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketVentaUpsertWithWhereUniqueWithoutFichaInput = {
    where: TicketVentaWhereUniqueInput
    update: XOR<TicketVentaUpdateWithoutFichaInput, TicketVentaUncheckedUpdateWithoutFichaInput>
    create: XOR<TicketVentaCreateWithoutFichaInput, TicketVentaUncheckedCreateWithoutFichaInput>
  }

  export type TicketVentaUpdateWithWhereUniqueWithoutFichaInput = {
    where: TicketVentaWhereUniqueInput
    data: XOR<TicketVentaUpdateWithoutFichaInput, TicketVentaUncheckedUpdateWithoutFichaInput>
  }

  export type TicketVentaUpdateManyWithWhereWithoutFichaInput = {
    where: TicketVentaScalarWhereInput
    data: XOR<TicketVentaUpdateManyMutationInput, TicketVentaUncheckedUpdateManyWithoutFichaInput>
  }

  export type DetalleServicioCreateWithoutServicioInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    ficha: FichaCreateNestedOneWithoutDetalleServicioInput
    ticketServicio: TicketServicioCreateNestedOneWithoutDetalleServicioInput
  }

  export type DetalleServicioUncheckedCreateWithoutServicioInput = {
    id?: string
    fichaId: string
    ticketServicioId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleServicioCreateOrConnectWithoutServicioInput = {
    where: DetalleServicioWhereUniqueInput
    create: XOR<DetalleServicioCreateWithoutServicioInput, DetalleServicioUncheckedCreateWithoutServicioInput>
  }

  export type DetalleServicioCreateManyServicioInputEnvelope = {
    data: DetalleServicioCreateManyServicioInput | DetalleServicioCreateManyServicioInput[]
  }

  export type DetalleServicioUpsertWithWhereUniqueWithoutServicioInput = {
    where: DetalleServicioWhereUniqueInput
    update: XOR<DetalleServicioUpdateWithoutServicioInput, DetalleServicioUncheckedUpdateWithoutServicioInput>
    create: XOR<DetalleServicioCreateWithoutServicioInput, DetalleServicioUncheckedCreateWithoutServicioInput>
  }

  export type DetalleServicioUpdateWithWhereUniqueWithoutServicioInput = {
    where: DetalleServicioWhereUniqueInput
    data: XOR<DetalleServicioUpdateWithoutServicioInput, DetalleServicioUncheckedUpdateWithoutServicioInput>
  }

  export type DetalleServicioUpdateManyWithWhereWithoutServicioInput = {
    where: DetalleServicioScalarWhereInput
    data: XOR<DetalleServicioUpdateManyMutationInput, DetalleServicioUncheckedUpdateManyWithoutServicioInput>
  }

  export type DetalleServicioScalarWhereInput = {
    AND?: DetalleServicioScalarWhereInput | DetalleServicioScalarWhereInput[]
    OR?: DetalleServicioScalarWhereInput[]
    NOT?: DetalleServicioScalarWhereInput | DetalleServicioScalarWhereInput[]
    id?: StringFilter<"DetalleServicio"> | string
    fichaId?: StringFilter<"DetalleServicio"> | string
    servicioId?: StringFilter<"DetalleServicio"> | string
    ticketServicioId?: StringFilter<"DetalleServicio"> | string
    createAt?: DateTimeFilter<"DetalleServicio"> | Date | string
    updateAt?: DateTimeFilter<"DetalleServicio"> | Date | string
  }

  export type TicketServicioCreateWithoutAdditionalPaymentsInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    status?: boolean
    amount: number
    medioPago?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
    tecnico: UsuarioCreateNestedOneWithoutTicketServicioInput
    DetalleServicio?: DetalleServicioCreateNestedOneWithoutTicketServicioInput
  }

  export type TicketServicioUncheckedCreateWithoutAdditionalPaymentsInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    status?: boolean
    amount: number
    medioPago?: string
    description?: string
    usuarioId: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleServicio?: DetalleServicioUncheckedCreateNestedOneWithoutTicketServicioInput
  }

  export type TicketServicioCreateOrConnectWithoutAdditionalPaymentsInput = {
    where: TicketServicioWhereUniqueInput
    create: XOR<TicketServicioCreateWithoutAdditionalPaymentsInput, TicketServicioUncheckedCreateWithoutAdditionalPaymentsInput>
  }

  export type TicketServicioUpsertWithoutAdditionalPaymentsInput = {
    update: XOR<TicketServicioUpdateWithoutAdditionalPaymentsInput, TicketServicioUncheckedUpdateWithoutAdditionalPaymentsInput>
    create: XOR<TicketServicioCreateWithoutAdditionalPaymentsInput, TicketServicioUncheckedCreateWithoutAdditionalPaymentsInput>
    where?: TicketServicioWhereInput
  }

  export type TicketServicioUpdateToOneWithWhereWithoutAdditionalPaymentsInput = {
    where?: TicketServicioWhereInput
    data: XOR<TicketServicioUpdateWithoutAdditionalPaymentsInput, TicketServicioUncheckedUpdateWithoutAdditionalPaymentsInput>
  }

  export type TicketServicioUpdateWithoutAdditionalPaymentsInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: UsuarioUpdateOneRequiredWithoutTicketServicioNestedInput
    DetalleServicio?: DetalleServicioUpdateOneWithoutTicketServicioNestedInput
  }

  export type TicketServicioUncheckedUpdateWithoutAdditionalPaymentsInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleServicio?: DetalleServicioUncheckedUpdateOneWithoutTicketServicioNestedInput
  }

  export type FichaCreateWithoutDetalleServicioInput = {
    id?: string
    brand?: string
    model?: string
    case?: string
    procesador?: string
    memory?: string
    almacenamiento?: string
    grafica?: string
    memoryGrafica?: string
    pantalla?: string
    sistema?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
    TicketVenta?: TicketVentaCreateNestedManyWithoutFichaInput
  }

  export type FichaUncheckedCreateWithoutDetalleServicioInput = {
    id?: string
    brand?: string
    model?: string
    case?: string
    procesador?: string
    memory?: string
    almacenamiento?: string
    grafica?: string
    memoryGrafica?: string
    pantalla?: string
    sistema?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
    TicketVenta?: TicketVentaUncheckedCreateNestedManyWithoutFichaInput
  }

  export type FichaCreateOrConnectWithoutDetalleServicioInput = {
    where: FichaWhereUniqueInput
    create: XOR<FichaCreateWithoutDetalleServicioInput, FichaUncheckedCreateWithoutDetalleServicioInput>
  }

  export type TicketServicioCreateWithoutDetalleServicioInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    status?: boolean
    amount: number
    medioPago?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
    tecnico: UsuarioCreateNestedOneWithoutTicketServicioInput
    additionalPayments?: additionalPaymentsCreateNestedManyWithoutTicketInput
  }

  export type TicketServicioUncheckedCreateWithoutDetalleServicioInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    status?: boolean
    amount: number
    medioPago?: string
    description?: string
    usuarioId: string
    createAt?: Date | string
    updateAt?: Date | string
    additionalPayments?: additionalPaymentsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketServicioCreateOrConnectWithoutDetalleServicioInput = {
    where: TicketServicioWhereUniqueInput
    create: XOR<TicketServicioCreateWithoutDetalleServicioInput, TicketServicioUncheckedCreateWithoutDetalleServicioInput>
  }

  export type ServicioCreateWithoutDetalleServicioInput = {
    id?: string
    name: string
    description?: string
    price?: number
    duration?: number
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ServicioUncheckedCreateWithoutDetalleServicioInput = {
    id?: string
    name: string
    description?: string
    price?: number
    duration?: number
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ServicioCreateOrConnectWithoutDetalleServicioInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutDetalleServicioInput, ServicioUncheckedCreateWithoutDetalleServicioInput>
  }

  export type FichaUpsertWithoutDetalleServicioInput = {
    update: XOR<FichaUpdateWithoutDetalleServicioInput, FichaUncheckedUpdateWithoutDetalleServicioInput>
    create: XOR<FichaCreateWithoutDetalleServicioInput, FichaUncheckedCreateWithoutDetalleServicioInput>
    where?: FichaWhereInput
  }

  export type FichaUpdateToOneWithWhereWithoutDetalleServicioInput = {
    where?: FichaWhereInput
    data: XOR<FichaUpdateWithoutDetalleServicioInput, FichaUncheckedUpdateWithoutDetalleServicioInput>
  }

  export type FichaUpdateWithoutDetalleServicioInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    case?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    grafica?: StringFieldUpdateOperationsInput | string
    memoryGrafica?: StringFieldUpdateOperationsInput | string
    pantalla?: StringFieldUpdateOperationsInput | string
    sistema?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketVenta?: TicketVentaUpdateManyWithoutFichaNestedInput
  }

  export type FichaUncheckedUpdateWithoutDetalleServicioInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    case?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    grafica?: StringFieldUpdateOperationsInput | string
    memoryGrafica?: StringFieldUpdateOperationsInput | string
    pantalla?: StringFieldUpdateOperationsInput | string
    sistema?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketVenta?: TicketVentaUncheckedUpdateManyWithoutFichaNestedInput
  }

  export type TicketServicioUpsertWithoutDetalleServicioInput = {
    update: XOR<TicketServicioUpdateWithoutDetalleServicioInput, TicketServicioUncheckedUpdateWithoutDetalleServicioInput>
    create: XOR<TicketServicioCreateWithoutDetalleServicioInput, TicketServicioUncheckedCreateWithoutDetalleServicioInput>
    where?: TicketServicioWhereInput
  }

  export type TicketServicioUpdateToOneWithWhereWithoutDetalleServicioInput = {
    where?: TicketServicioWhereInput
    data: XOR<TicketServicioUpdateWithoutDetalleServicioInput, TicketServicioUncheckedUpdateWithoutDetalleServicioInput>
  }

  export type TicketServicioUpdateWithoutDetalleServicioInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: UsuarioUpdateOneRequiredWithoutTicketServicioNestedInput
    additionalPayments?: additionalPaymentsUpdateManyWithoutTicketNestedInput
  }

  export type TicketServicioUncheckedUpdateWithoutDetalleServicioInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    additionalPayments?: additionalPaymentsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type ServicioUpsertWithoutDetalleServicioInput = {
    update: XOR<ServicioUpdateWithoutDetalleServicioInput, ServicioUncheckedUpdateWithoutDetalleServicioInput>
    create: XOR<ServicioCreateWithoutDetalleServicioInput, ServicioUncheckedCreateWithoutDetalleServicioInput>
    where?: ServicioWhereInput
  }

  export type ServicioUpdateToOneWithWhereWithoutDetalleServicioInput = {
    where?: ServicioWhereInput
    data: XOR<ServicioUpdateWithoutDetalleServicioInput, ServicioUncheckedUpdateWithoutDetalleServicioInput>
  }

  export type ServicioUpdateWithoutDetalleServicioInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioUncheckedUpdateWithoutDetalleServicioInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketVentaCreateWithoutDetalleVentaInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    amount: number
    medioPago?: string
    status: boolean
    createAt?: Date | string
    updateAt?: Date | string
    vendedor: UsuarioCreateNestedOneWithoutTicketVentaInput
    Ficha?: FichaCreateNestedOneWithoutTicketVentaInput
  }

  export type TicketVentaUncheckedCreateWithoutDetalleVentaInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    usuarioId: string
    amount: number
    medioPago?: string
    status: boolean
    createAt?: Date | string
    updateAt?: Date | string
    fichaId?: string | null
  }

  export type TicketVentaCreateOrConnectWithoutDetalleVentaInput = {
    where: TicketVentaWhereUniqueInput
    create: XOR<TicketVentaCreateWithoutDetalleVentaInput, TicketVentaUncheckedCreateWithoutDetalleVentaInput>
  }

  export type UsuarioCreateWithoutDetalleVentaInput = {
    id?: string
    firstName: string
    lastName: string
    dni: string
    fullName: string
    email: string
    username: string
    phoneNumer: string
    gender: string
    role: string
    password: string
    urlImage?: string
    address: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    TicketServicio?: TicketServicioCreateNestedManyWithoutTecnicoInput
    TicketVenta?: TicketVentaCreateNestedManyWithoutVendedorInput
  }

  export type UsuarioUncheckedCreateWithoutDetalleVentaInput = {
    id?: string
    firstName: string
    lastName: string
    dni: string
    fullName: string
    email: string
    username: string
    phoneNumer: string
    gender: string
    role: string
    password: string
    urlImage?: string
    address: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    TicketServicio?: TicketServicioUncheckedCreateNestedManyWithoutTecnicoInput
    TicketVenta?: TicketVentaUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type UsuarioCreateOrConnectWithoutDetalleVentaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDetalleVentaInput, UsuarioUncheckedCreateWithoutDetalleVentaInput>
  }

  export type ProductoCreateWithoutDetalleVentaInput = {
    id?: string
    name: string
    shortName: string
    description: string
    price: number
    stock: number
    model: string
    isVigent?: boolean
    brand: string
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutDetalleVentaInput = {
    id?: string
    name: string
    shortName: string
    description: string
    price: number
    stock: number
    model: string
    isVigent?: boolean
    brand: string
    urlImage?: string
    categoriaId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ProductoCreateOrConnectWithoutDetalleVentaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutDetalleVentaInput, ProductoUncheckedCreateWithoutDetalleVentaInput>
  }

  export type TicketVentaUpsertWithoutDetalleVentaInput = {
    update: XOR<TicketVentaUpdateWithoutDetalleVentaInput, TicketVentaUncheckedUpdateWithoutDetalleVentaInput>
    create: XOR<TicketVentaCreateWithoutDetalleVentaInput, TicketVentaUncheckedCreateWithoutDetalleVentaInput>
    where?: TicketVentaWhereInput
  }

  export type TicketVentaUpdateToOneWithWhereWithoutDetalleVentaInput = {
    where?: TicketVentaWhereInput
    data: XOR<TicketVentaUpdateWithoutDetalleVentaInput, TicketVentaUncheckedUpdateWithoutDetalleVentaInput>
  }

  export type TicketVentaUpdateWithoutDetalleVentaInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendedor?: UsuarioUpdateOneRequiredWithoutTicketVentaNestedInput
    Ficha?: FichaUpdateOneWithoutTicketVentaNestedInput
  }

  export type TicketVentaUncheckedUpdateWithoutDetalleVentaInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fichaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUpsertWithoutDetalleVentaInput = {
    update: XOR<UsuarioUpdateWithoutDetalleVentaInput, UsuarioUncheckedUpdateWithoutDetalleVentaInput>
    create: XOR<UsuarioCreateWithoutDetalleVentaInput, UsuarioUncheckedCreateWithoutDetalleVentaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDetalleVentaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDetalleVentaInput, UsuarioUncheckedUpdateWithoutDetalleVentaInput>
  }

  export type UsuarioUpdateWithoutDetalleVentaInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumer?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketServicio?: TicketServicioUpdateManyWithoutTecnicoNestedInput
    TicketVenta?: TicketVentaUpdateManyWithoutVendedorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDetalleVentaInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumer?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketServicio?: TicketServicioUncheckedUpdateManyWithoutTecnicoNestedInput
    TicketVenta?: TicketVentaUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type ProductoUpsertWithoutDetalleVentaInput = {
    update: XOR<ProductoUpdateWithoutDetalleVentaInput, ProductoUncheckedUpdateWithoutDetalleVentaInput>
    create: XOR<ProductoCreateWithoutDetalleVentaInput, ProductoUncheckedCreateWithoutDetalleVentaInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutDetalleVentaInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutDetalleVentaInput, ProductoUncheckedUpdateWithoutDetalleVentaInput>
  }

  export type ProductoUpdateWithoutDetalleVentaInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    brand?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutDetalleVentaInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    brand?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutTicketServicioInput = {
    id?: string
    firstName: string
    lastName: string
    dni: string
    fullName: string
    email: string
    username: string
    phoneNumer: string
    gender: string
    role: string
    password: string
    urlImage?: string
    address: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    DetalleVenta?: DetalleVentaCreateNestedManyWithoutUsuarioInput
    TicketVenta?: TicketVentaCreateNestedManyWithoutVendedorInput
  }

  export type UsuarioUncheckedCreateWithoutTicketServicioInput = {
    id?: string
    firstName: string
    lastName: string
    dni: string
    fullName: string
    email: string
    username: string
    phoneNumer: string
    gender: string
    role: string
    password: string
    urlImage?: string
    address: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    DetalleVenta?: DetalleVentaUncheckedCreateNestedManyWithoutUsuarioInput
    TicketVenta?: TicketVentaUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type UsuarioCreateOrConnectWithoutTicketServicioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTicketServicioInput, UsuarioUncheckedCreateWithoutTicketServicioInput>
  }

  export type DetalleServicioCreateWithoutTicketServicioInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    ficha: FichaCreateNestedOneWithoutDetalleServicioInput
    servicio: ServicioCreateNestedOneWithoutDetalleServicioInput
  }

  export type DetalleServicioUncheckedCreateWithoutTicketServicioInput = {
    id?: string
    fichaId: string
    servicioId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleServicioCreateOrConnectWithoutTicketServicioInput = {
    where: DetalleServicioWhereUniqueInput
    create: XOR<DetalleServicioCreateWithoutTicketServicioInput, DetalleServicioUncheckedCreateWithoutTicketServicioInput>
  }

  export type additionalPaymentsCreateWithoutTicketInput = {
    id?: string
    name: string
    mount: number
  }

  export type additionalPaymentsUncheckedCreateWithoutTicketInput = {
    id?: string
    name: string
    mount: number
  }

  export type additionalPaymentsCreateOrConnectWithoutTicketInput = {
    where: additionalPaymentsWhereUniqueInput
    create: XOR<additionalPaymentsCreateWithoutTicketInput, additionalPaymentsUncheckedCreateWithoutTicketInput>
  }

  export type additionalPaymentsCreateManyTicketInputEnvelope = {
    data: additionalPaymentsCreateManyTicketInput | additionalPaymentsCreateManyTicketInput[]
  }

  export type UsuarioUpsertWithoutTicketServicioInput = {
    update: XOR<UsuarioUpdateWithoutTicketServicioInput, UsuarioUncheckedUpdateWithoutTicketServicioInput>
    create: XOR<UsuarioCreateWithoutTicketServicioInput, UsuarioUncheckedCreateWithoutTicketServicioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTicketServicioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTicketServicioInput, UsuarioUncheckedUpdateWithoutTicketServicioInput>
  }

  export type UsuarioUpdateWithoutTicketServicioInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumer?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleVenta?: DetalleVentaUpdateManyWithoutUsuarioNestedInput
    TicketVenta?: TicketVentaUpdateManyWithoutVendedorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTicketServicioInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumer?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleVenta?: DetalleVentaUncheckedUpdateManyWithoutUsuarioNestedInput
    TicketVenta?: TicketVentaUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type DetalleServicioUpsertWithoutTicketServicioInput = {
    update: XOR<DetalleServicioUpdateWithoutTicketServicioInput, DetalleServicioUncheckedUpdateWithoutTicketServicioInput>
    create: XOR<DetalleServicioCreateWithoutTicketServicioInput, DetalleServicioUncheckedCreateWithoutTicketServicioInput>
    where?: DetalleServicioWhereInput
  }

  export type DetalleServicioUpdateToOneWithWhereWithoutTicketServicioInput = {
    where?: DetalleServicioWhereInput
    data: XOR<DetalleServicioUpdateWithoutTicketServicioInput, DetalleServicioUncheckedUpdateWithoutTicketServicioInput>
  }

  export type DetalleServicioUpdateWithoutTicketServicioInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ficha?: FichaUpdateOneRequiredWithoutDetalleServicioNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutDetalleServicioNestedInput
  }

  export type DetalleServicioUncheckedUpdateWithoutTicketServicioInput = {
    fichaId?: StringFieldUpdateOperationsInput | string
    servicioId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type additionalPaymentsUpsertWithWhereUniqueWithoutTicketInput = {
    where: additionalPaymentsWhereUniqueInput
    update: XOR<additionalPaymentsUpdateWithoutTicketInput, additionalPaymentsUncheckedUpdateWithoutTicketInput>
    create: XOR<additionalPaymentsCreateWithoutTicketInput, additionalPaymentsUncheckedCreateWithoutTicketInput>
  }

  export type additionalPaymentsUpdateWithWhereUniqueWithoutTicketInput = {
    where: additionalPaymentsWhereUniqueInput
    data: XOR<additionalPaymentsUpdateWithoutTicketInput, additionalPaymentsUncheckedUpdateWithoutTicketInput>
  }

  export type additionalPaymentsUpdateManyWithWhereWithoutTicketInput = {
    where: additionalPaymentsScalarWhereInput
    data: XOR<additionalPaymentsUpdateManyMutationInput, additionalPaymentsUncheckedUpdateManyWithoutTicketInput>
  }

  export type additionalPaymentsScalarWhereInput = {
    AND?: additionalPaymentsScalarWhereInput | additionalPaymentsScalarWhereInput[]
    OR?: additionalPaymentsScalarWhereInput[]
    NOT?: additionalPaymentsScalarWhereInput | additionalPaymentsScalarWhereInput[]
    id?: StringFilter<"additionalPayments"> | string
    name?: StringFilter<"additionalPayments"> | string
    mount?: FloatFilter<"additionalPayments"> | number
    ticketServicioId?: StringFilter<"additionalPayments"> | string
  }

  export type UsuarioCreateWithoutTicketVentaInput = {
    id?: string
    firstName: string
    lastName: string
    dni: string
    fullName: string
    email: string
    username: string
    phoneNumer: string
    gender: string
    role: string
    password: string
    urlImage?: string
    address: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    TicketServicio?: TicketServicioCreateNestedManyWithoutTecnicoInput
    DetalleVenta?: DetalleVentaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTicketVentaInput = {
    id?: string
    firstName: string
    lastName: string
    dni: string
    fullName: string
    email: string
    username: string
    phoneNumer: string
    gender: string
    role: string
    password: string
    urlImage?: string
    address: string
    isVigent?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    TicketServicio?: TicketServicioUncheckedCreateNestedManyWithoutTecnicoInput
    DetalleVenta?: DetalleVentaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTicketVentaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTicketVentaInput, UsuarioUncheckedCreateWithoutTicketVentaInput>
  }

  export type DetalleVentaCreateWithoutTicketVentaInput = {
    id?: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
    Usuario?: UsuarioCreateNestedOneWithoutDetalleVentaInput
    producto: ProductoCreateNestedOneWithoutDetalleVentaInput
  }

  export type DetalleVentaUncheckedCreateWithoutTicketVentaInput = {
    id?: string
    productoId: string
    usuarioId: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleVentaCreateOrConnectWithoutTicketVentaInput = {
    where: DetalleVentaWhereUniqueInput
    create: XOR<DetalleVentaCreateWithoutTicketVentaInput, DetalleVentaUncheckedCreateWithoutTicketVentaInput>
  }

  export type DetalleVentaCreateManyTicketVentaInputEnvelope = {
    data: DetalleVentaCreateManyTicketVentaInput | DetalleVentaCreateManyTicketVentaInput[]
  }

  export type FichaCreateWithoutTicketVentaInput = {
    id?: string
    brand?: string
    model?: string
    case?: string
    procesador?: string
    memory?: string
    almacenamiento?: string
    grafica?: string
    memoryGrafica?: string
    pantalla?: string
    sistema?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleServicio?: DetalleServicioCreateNestedOneWithoutFichaInput
  }

  export type FichaUncheckedCreateWithoutTicketVentaInput = {
    id?: string
    brand?: string
    model?: string
    case?: string
    procesador?: string
    memory?: string
    almacenamiento?: string
    grafica?: string
    memoryGrafica?: string
    pantalla?: string
    sistema?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
    DetalleServicio?: DetalleServicioUncheckedCreateNestedOneWithoutFichaInput
  }

  export type FichaCreateOrConnectWithoutTicketVentaInput = {
    where: FichaWhereUniqueInput
    create: XOR<FichaCreateWithoutTicketVentaInput, FichaUncheckedCreateWithoutTicketVentaInput>
  }

  export type UsuarioUpsertWithoutTicketVentaInput = {
    update: XOR<UsuarioUpdateWithoutTicketVentaInput, UsuarioUncheckedUpdateWithoutTicketVentaInput>
    create: XOR<UsuarioCreateWithoutTicketVentaInput, UsuarioUncheckedCreateWithoutTicketVentaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTicketVentaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTicketVentaInput, UsuarioUncheckedUpdateWithoutTicketVentaInput>
  }

  export type UsuarioUpdateWithoutTicketVentaInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumer?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketServicio?: TicketServicioUpdateManyWithoutTecnicoNestedInput
    DetalleVenta?: DetalleVentaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTicketVentaInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumer?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketServicio?: TicketServicioUncheckedUpdateManyWithoutTecnicoNestedInput
    DetalleVenta?: DetalleVentaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DetalleVentaUpsertWithWhereUniqueWithoutTicketVentaInput = {
    where: DetalleVentaWhereUniqueInput
    update: XOR<DetalleVentaUpdateWithoutTicketVentaInput, DetalleVentaUncheckedUpdateWithoutTicketVentaInput>
    create: XOR<DetalleVentaCreateWithoutTicketVentaInput, DetalleVentaUncheckedCreateWithoutTicketVentaInput>
  }

  export type DetalleVentaUpdateWithWhereUniqueWithoutTicketVentaInput = {
    where: DetalleVentaWhereUniqueInput
    data: XOR<DetalleVentaUpdateWithoutTicketVentaInput, DetalleVentaUncheckedUpdateWithoutTicketVentaInput>
  }

  export type DetalleVentaUpdateManyWithWhereWithoutTicketVentaInput = {
    where: DetalleVentaScalarWhereInput
    data: XOR<DetalleVentaUpdateManyMutationInput, DetalleVentaUncheckedUpdateManyWithoutTicketVentaInput>
  }

  export type FichaUpsertWithoutTicketVentaInput = {
    update: XOR<FichaUpdateWithoutTicketVentaInput, FichaUncheckedUpdateWithoutTicketVentaInput>
    create: XOR<FichaCreateWithoutTicketVentaInput, FichaUncheckedCreateWithoutTicketVentaInput>
    where?: FichaWhereInput
  }

  export type FichaUpdateToOneWithWhereWithoutTicketVentaInput = {
    where?: FichaWhereInput
    data: XOR<FichaUpdateWithoutTicketVentaInput, FichaUncheckedUpdateWithoutTicketVentaInput>
  }

  export type FichaUpdateWithoutTicketVentaInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    case?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    grafica?: StringFieldUpdateOperationsInput | string
    memoryGrafica?: StringFieldUpdateOperationsInput | string
    pantalla?: StringFieldUpdateOperationsInput | string
    sistema?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleServicio?: DetalleServicioUpdateOneWithoutFichaNestedInput
  }

  export type FichaUncheckedUpdateWithoutTicketVentaInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    case?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    memory?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    grafica?: StringFieldUpdateOperationsInput | string
    memoryGrafica?: StringFieldUpdateOperationsInput | string
    pantalla?: StringFieldUpdateOperationsInput | string
    sistema?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleServicio?: DetalleServicioUncheckedUpdateOneWithoutFichaNestedInput
  }

  export type TicketServicioCreateManyTecnicoInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    status?: boolean
    amount: number
    medioPago?: string
    description?: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleVentaCreateManyUsuarioInput = {
    id?: string
    productoId: string
    ticketVentaId: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type TicketVentaCreateManyVendedorInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    amount: number
    medioPago?: string
    status: boolean
    createAt?: Date | string
    updateAt?: Date | string
    fichaId?: string | null
  }

  export type TicketServicioUpdateWithoutTecnicoInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleServicio?: DetalleServicioUpdateOneWithoutTicketServicioNestedInput
    additionalPayments?: additionalPaymentsUpdateManyWithoutTicketNestedInput
  }

  export type TicketServicioUncheckedUpdateWithoutTecnicoInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleServicio?: DetalleServicioUncheckedUpdateOneWithoutTicketServicioNestedInput
    additionalPayments?: additionalPaymentsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketServicioUncheckedUpdateManyWithoutTecnicoInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaUpdateWithoutUsuarioInput = {
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketVenta?: TicketVentaUpdateOneRequiredWithoutDetalleVentaNestedInput
    producto?: ProductoUpdateOneRequiredWithoutDetalleVentaNestedInput
  }

  export type DetalleVentaUncheckedUpdateWithoutUsuarioInput = {
    productoId?: StringFieldUpdateOperationsInput | string
    ticketVentaId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaUncheckedUpdateManyWithoutUsuarioInput = {
    productoId?: StringFieldUpdateOperationsInput | string
    ticketVentaId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketVentaUpdateWithoutVendedorInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleVenta?: DetalleVentaUpdateManyWithoutTicketVentaNestedInput
    Ficha?: FichaUpdateOneWithoutTicketVentaNestedInput
  }

  export type TicketVentaUncheckedUpdateWithoutVendedorInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fichaId?: NullableStringFieldUpdateOperationsInput | string | null
    DetalleVenta?: DetalleVentaUncheckedUpdateManyWithoutTicketVentaNestedInput
  }

  export type TicketVentaUncheckedUpdateManyWithoutVendedorInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fichaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductoCreateManyCategoriaInput = {
    id?: string
    name: string
    shortName: string
    description: string
    price: number
    stock: number
    model: string
    isVigent?: boolean
    brand: string
    urlImage?: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ProductoUpdateWithoutCategoriaInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    brand?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleVenta?: DetalleVentaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    brand?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleVenta?: DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    isVigent?: BoolFieldUpdateOperationsInput | boolean
    brand?: StringFieldUpdateOperationsInput | string
    urlImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaCreateManyProductoInput = {
    id?: string
    usuarioId: string
    ticketVentaId: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleVentaUpdateWithoutProductoInput = {
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketVenta?: TicketVentaUpdateOneRequiredWithoutDetalleVentaNestedInput
    Usuario?: UsuarioUpdateOneWithoutDetalleVentaNestedInput
  }

  export type DetalleVentaUncheckedUpdateWithoutProductoInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
    ticketVentaId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaUncheckedUpdateManyWithoutProductoInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
    ticketVentaId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketVentaCreateManyFichaInput = {
    id?: string
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
    usuarioId: string
    amount: number
    medioPago?: string
    status: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type TicketVentaUpdateWithoutFichaInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendedor?: UsuarioUpdateOneRequiredWithoutTicketVentaNestedInput
    DetalleVenta?: DetalleVentaUpdateManyWithoutTicketVentaNestedInput
  }

  export type TicketVentaUncheckedUpdateWithoutFichaInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetalleVenta?: DetalleVentaUncheckedUpdateManyWithoutTicketVentaNestedInput
  }

  export type TicketVentaUncheckedUpdateManyWithoutFichaInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    clientDni?: StringFieldUpdateOperationsInput | string
    clientPhoneNumber?: StringFieldUpdateOperationsInput | string
    clientAddress?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    medioPago?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleServicioCreateManyServicioInput = {
    id?: string
    fichaId: string
    ticketServicioId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleServicioUpdateWithoutServicioInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ficha?: FichaUpdateOneRequiredWithoutDetalleServicioNestedInput
    ticketServicio?: TicketServicioUpdateOneRequiredWithoutDetalleServicioNestedInput
  }

  export type DetalleServicioUncheckedUpdateWithoutServicioInput = {
    fichaId?: StringFieldUpdateOperationsInput | string
    ticketServicioId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleServicioUncheckedUpdateManyWithoutServicioInput = {
    fichaId?: StringFieldUpdateOperationsInput | string
    ticketServicioId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type additionalPaymentsCreateManyTicketInput = {
    id?: string
    name: string
    mount: number
  }

  export type additionalPaymentsUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    mount?: FloatFieldUpdateOperationsInput | number
  }

  export type additionalPaymentsUncheckedUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    mount?: FloatFieldUpdateOperationsInput | number
  }

  export type additionalPaymentsUncheckedUpdateManyWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    mount?: FloatFieldUpdateOperationsInput | number
  }

  export type DetalleVentaCreateManyTicketVentaInput = {
    id?: string
    productoId: string
    usuarioId: string
    units: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DetalleVentaUpdateWithoutTicketVentaInput = {
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Usuario?: UsuarioUpdateOneWithoutDetalleVentaNestedInput
    producto?: ProductoUpdateOneRequiredWithoutDetalleVentaNestedInput
  }

  export type DetalleVentaUncheckedUpdateWithoutTicketVentaInput = {
    productoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleVentaUncheckedUpdateManyWithoutTicketVentaInput = {
    productoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriaDefaultArgs instead
     */
    export type CategoriaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CategoriaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductoDefaultArgs instead
     */
    export type ProductoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProductoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmpresaDefaultArgs instead
     */
    export type EmpresaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EmpresaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FichaDefaultArgs instead
     */
    export type FichaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FichaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServicioDefaultArgs instead
     */
    export type ServicioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ServicioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use additionalPaymentsDefaultArgs instead
     */
    export type additionalPaymentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = additionalPaymentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DetalleServicioDefaultArgs instead
     */
    export type DetalleServicioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DetalleServicioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DetalleVentaDefaultArgs instead
     */
    export type DetalleVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DetalleVentaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketServicioDefaultArgs instead
     */
    export type TicketServicioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TicketServicioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketVentaDefaultArgs instead
     */
    export type TicketVentaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TicketVentaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}