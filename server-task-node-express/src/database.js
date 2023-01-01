import mysql from "mysql2/promise";
import { config  } from "./settings.js";

export const connection = async () => {
    return await mysql.createConnection(config);
}