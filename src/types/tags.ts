export interface Tags {
  id: number; // Corresponds to serial('ID').primaryKey()
  name: string; // Corresponds to text('Name').notNull().unique()
}
