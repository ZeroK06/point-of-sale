export const ERRORS = {
  Unauthorized: {
    code: 401,
    message: 'No autorizado: No tienes permiso para acceder a este recurso.',
  },
  Forbidden: {
    code: 403,
    message: 'Prohibido: El acceso a este recurso está prohibido.',
  },
  NotFound: {
    code: 404,
    message: 'No Encontrado: El recurso solicitado no fue encontrado.',
  },
  BadRequest: {
    code: 400,
    message: 'Solicitud Incorrecta: La solicitud es inválida o incorrecta.',
  },
  InternalServerError: {
    code: 500,
    message:
      'Error Interno del Servidor: Ocurrió un error inesperado en el servidor.',
  },

  // Errores de Usuarios
  UsuarioNoEncontrado: {
    code: 404,
    message: 'Usuario No Encontrado: El usuario solicitado no fue encontrado.',
  },
  UsuarioYaExiste: {
    code: 409,
    message:
      'Usuario Ya Existe: Ya existe un usuario con el mismo nombre de usuario o correo electrónico.',
  },
  DatosDeUsuarioInvalidos: {
    code: 400,
    message:
      'Datos de Usuario Inválidos: Los datos de usuario proporcionados son inválidos o incompletos.',
  },
  ErrorAlActualizarUsuario: {
    code: 500,
    message:
      'Error al Actualizar Usuario: Ocurrió un error al actualizar el usuario.',
  },
  ErrorAlEliminarUsuario: {
    code: 500,
    message:
      'Error al Eliminar Usuario: Ocurrió un error al eliminar el usuario.',
  },

  // Errores de Productos
  ProductoNoEncontrado: {
    code: 404,
    message:
      'Producto No Encontrado: El producto solicitado no fue encontrado.',
  },
  ProductoYaExiste: {
    code: 409,
    message:
      'Producto Ya Existe: Ya existe un producto con el mismo nombre o código.',
  },
  DatosDeProductoInvalidos: {
    code: 400,
    message:
      'Datos de Producto Inválidos: Los datos de producto proporcionados son inválidos o incompletos.',
  },
  ErrorAlActualizarProducto: {
    code: 500,
    message:
      'Error al Actualizar Producto: Ocurrió un error al actualizar el producto.',
  },
  ErrorAlEliminarProducto: {
    code: 500,
    message:
      'Error al Eliminar Producto: Ocurrió un error al eliminar el producto.',
  },

  // Errores de Ventas
  VentaNoEncontrada: {
    code: 404,
    message: 'Venta No Encontrada: La venta solicitada no fue encontrada.',
  },
  DatosDeVentaInvalidos: {
    code: 400,
    message:
      'Datos de Venta Inválidos: Los datos de venta proporcionados son inválidos o incompletos.',
  },
  ErrorAlRegistrarVenta: {
    code: 500,
    message:
      'Error al Registrar Venta: Ocurrió un error al registrar la venta.',
  },
  ErrorAlActualizarVenta: {
    code: 500,
    message:
      'Error al Actualizar Venta: Ocurrió un error al actualizar la venta.',
  },
  ErrorAlEliminarVenta: {
    code: 500,
    message: 'Error al Eliminar Venta: Ocurrió un error al eliminar la venta.',
  },

  // Errores de Servicios
  ServicioNoEncontrado: {
    code: 404,
    message:
      'Servicio No Encontrado: El servicio solicitado no fue encontrado.',
  },
  DatosDeServicioInvalidos: {
    code: 400,
    message:
      'Datos de Servicio Inválidos: Los datos de servicio proporcionados son inválidos o incompletos.',
  },
  ErrorAlRegistrarServicio: {
    code: 500,
    message:
      'Error al Registrar Servicio: Ocurrió un error al registrar el servicio.',
  },
  ErrorAlActualizarServicio: {
    code: 500,
    message:
      'Error al Actualizar Servicio: Ocurrió un error al actualizar el servicio.',
  },
  ErrorAlEliminarServicio: {
    code: 500,
    message:
      'Error al Eliminar Servicio: Ocurrió un error al eliminar el servicio.',
  },
}
