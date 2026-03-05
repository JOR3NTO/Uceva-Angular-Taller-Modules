/**
 * Representa un proveedor dentro del sistema.
 *
 * Esta interfaz define la estructura base de datos usada
 * para listar proveedores en la UI y consumirlos desde servicios.
 */
export interface Supplier {
  /** Identificador unico del proveedor. */
  id: number;
  /** Nombre comercial o razon social del proveedor. */
  name: string;
  /** Correo de contacto principal del proveedor. */
  contactEmail: string;
  /** Numero telefonico de contacto del proveedor. */
  phoneNumber: string;
}

/**
 * DTO para crear un proveedor sin incluir el `id`.
 *
 * El identificador se asigna del lado del sistema,
 * por eso se omite para operaciones de creacion.
 */
export type CreateSupplierDto = Omit<Supplier, 'id'>;
