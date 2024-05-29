export interface Inventory {
  id?: number; // Corresponds to serial('ID').primaryKey()
  name?: string; // Corresponds to text('Name').notNull()
  description?: string; // Corresponds to text('Description') - optional
  tags?: string[]; // Corresponds to text('Tags').array() - optional
  updatedAt?: string; // Corresponds to timestamp('UpdatedAt').defaultNow().notNull()
  createdAt?: string; // Corresponds to timestamp('CreatedAt').defaultNow().notNull()
  location?: string[]; // Corresponds to text('Location').notNull()
  quantity?: number; // Corresponds to integer('Quantity').default(0).notNull()
  price?: number; // Corresponds to numeric('Price') - optional
  category?: string; // Corresponds to text('Category') - optional
}
