import { serial, varchar } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    uid: serial('id').primaryKey(),
    first_name: varchar('first_name', { length: 50 }).notNull(),
    last_name: varchar('last_name', { length: 50 }).notNull(),
    password: varchar('password', { length: 50 }).notNull(),
    email: varchar('email', { length: 50 }).unique(),
    role: varchar('role', { length: 50 }).notNull().$type<'manager' | 'voter' | 'candidate'>(), 
    phone_number: varchar('phone_number', { length: 50 }).unique(),
});


export const rooms = {}