/**
 * Modelo de datos para una venta.
 *
 * @remarks
 * Representa la estructura estándar utilizada por la configuración,
 * servicios y componentes del módulo de ventas.
 */
export interface Sale {
    /**
     * Identificador único de la venta.
     */
    id: number;

    /**
     * Identificador del producto vendido.
     */
    productId: number;

    /**
     * Nombre del cliente asociado a la venta.
     */
    name: string;

    /**
     * Cantidad de productos vendidos.
     */
    quantity: number;

    /**
     * Total monetario de la venta.
     */
    total: number;

    /**
     * Fecha de la venta.
     */
    date: Date;

    /**
     * Estado actual de la venta.
     */
    status: SaleStatus;
}

/**
 * Valores permitidos para el estado de una venta.
 */
export type SaleStatus = 'Pendiente' | 'Completada' | 'Cancelada';
