
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.1.1
 * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
 */
Prisma.prismaVersion = {
  client: "5.1.1",
  engine: "6a3747c37ff169c90047725a05a6ef02e32ac97e"
}


const runtimeDescription = (() => {
  // https://edge-runtime.vercel.app/features/available-apis#addressing-the-runtime
  if ("EdgeRuntime" in globalThis && typeof globalThis.EdgeRuntime === "string") {
    return "under the Vercel Edge Runtime";
  }
  // Deno
  if ("Deno" in globalThis && typeof globalThis.Deno === "object") {
    return "under the Deno runtime";
  }
  // Default to assuming browser
  return "in the browser";
})();


Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.UsuarioScalarFieldEnum = {
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

exports.Prisma.CategoriaScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isVigent: 'isVigent',
  createAt: 'createAt',
  updateAt: 'updateAt'
};

exports.Prisma.ProductoScalarFieldEnum = {
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

exports.Prisma.EmpresaScalarFieldEnum = {
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

exports.Prisma.FichaScalarFieldEnum = {
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

exports.Prisma.ServicioScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  price: 'price',
  duration: 'duration',
  urlImage: 'urlImage',
  createAt: 'createAt',
  updateAt: 'updateAt'
};

exports.Prisma.AdditionalPaymentsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  mount: 'mount',
  ticketServicioId: 'ticketServicioId'
};

exports.Prisma.DetalleServicioScalarFieldEnum = {
  id: 'id',
  fichaId: 'fichaId',
  servicioId: 'servicioId',
  ticketServicioId: 'ticketServicioId',
  createAt: 'createAt',
  updateAt: 'updateAt'
};

exports.Prisma.DetalleVentaScalarFieldEnum = {
  id: 'id',
  productoId: 'productoId',
  usuarioId: 'usuarioId',
  ticketVentaId: 'ticketVentaId',
  units: 'units',
  createAt: 'createAt',
  updateAt: 'updateAt'
};

exports.Prisma.TicketServicioScalarFieldEnum = {
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

exports.Prisma.TicketVentaScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
