export interface Sale {
    /** Identificador único de la venta */
    id: number;

    /** Identificador del producto vendido */
    productId: number;
    /** Nombre del cliente */
    name: string;

    /** Cantidad de productos vendidos */
    quantity: number;

    /** Total de la venta en pesos */
    total: number;
    /** Fecha de la venta */
    date: Date;
    /** Estado de la venta */
    status: SaleStatus;
}

export type SaleStatus = 'Pendiente' | 'Completada' | 'Cancelada';
