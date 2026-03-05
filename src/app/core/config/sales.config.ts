import { Sale } from '../../modules/sales/interfaces/sales.interface';

/**
 * Listado de ventas del sistema.
 *
 * @remarks
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {Sale[]}
 */
export const SALES: Sale[] = [
  {
    id: 1,
    productId: 1,
    name: 'Carlos',
    quantity: 5,
    total: 100,
    date: new Date('2024-01-15'),
    status: 'Completada'
  },
  {
    id: 2,
    productId: 2,
    name: 'Ana',
    quantity: 3,
    total: 60,
    date: new Date('2024-02-20'),
    status: 'Pendiente'
  },
  {
    id: 3,
    productId: 3,
    name: 'Luis',
    quantity: 8,
    total: 160,
    date: new Date('2024-03-10'),
    status: 'Cancelada'
  },
  {
    id: 4,
    productId: 4,
    name: 'María',
    quantity: 2,
    total: 40,
    date: new Date('2024-04-05'),
    status: 'Completada'
  },
  {
    id: 5,
    productId: 5,
    name: 'Jorge',
    quantity: 10,
    total: 200,
    date: new Date('2024-05-12'),
    status: 'Pendiente'
  }
];
