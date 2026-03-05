export interface Supplier {
  id: number;
  name: string;
  contactEmail: string;
  phoneNumber: string;
}

export type CreateSupplierDto = Omit<Supplier, 'id'>;
