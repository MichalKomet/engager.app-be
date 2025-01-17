import pkg from 'pg';

const { Pool } = pkg;

class Database {
    constructor() {
        if (!Database.instance) {
            this.pool = new Pool({
                user: process.env.PG_USER,
                host: 'postgres',
                database: process.env.PG_NAME,
                password: process.env.PG_PASSWORD,
                port: 5432
            });
            Database.instance = this;
        }
    }

    query(sql, params) {
        return this.pool.query(sql, params);
    }
}

const instance = new Database();
Object.freeze(instance);

export default instance;