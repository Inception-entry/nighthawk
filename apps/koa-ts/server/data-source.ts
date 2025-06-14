import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: ["server/entity/**/*{.js,.ts}"],
    migrations: ["server/migration/**/*.ts"],
    subscribers: ["server/subscriber/**/*.ts"],
})
