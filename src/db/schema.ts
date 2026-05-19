import {
  mysqlTable,
  varchar,
  text,
  int,
  timestamp,
} from "drizzle-orm/mysql-core";

export const projects = mysqlTable("projects", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  techStack: varchar("tech_stack", { length: 500 }),
  imageUrl: varchar("image_url", { length: 500 }),
  liveUrl: varchar("live_url", { length: 500 }),
  repoUrl: varchar("repo_url", { length: 500 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const experiences = mysqlTable("experiences", {
  id: int("id").primaryKey().autoincrement(),
  company: varchar("company", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  description: text("description"),
  startDate: varchar("start_date", { length: 20 }).notNull(),
  endDate: varchar("end_date", { length: 20 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
