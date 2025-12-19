import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  service: text("service").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(), // in cents
  category: text("category").notNull(), // "inverter", "solar_panel", "electrical"
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  author: text("author").notNull(),
  position: text("position"),
  content: text("content").notNull(),
  rating: integer("rating").notNull(), // 1-5
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true,
});

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Product = typeof products.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
