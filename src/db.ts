import { DataSource } from "typeorm"
import { Event } from "./event/event.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root123",
    database: "typeORMDB",
    entities: [Event],
    logging: true,
    synchronize: true
})