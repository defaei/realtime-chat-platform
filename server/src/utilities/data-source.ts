import { DataSource } from "typeorm";
require("dotenv").config();

export const TypeOrmDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [process.cwd() + "/dist/entities/*.entity{.ts,.js}"],
  migrations: [process.cwd() + "/dist/migrations/*.ts"],
  synchronize: false,
});
