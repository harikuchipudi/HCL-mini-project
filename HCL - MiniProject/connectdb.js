const pool = new Pool({
    user: "postgres",
    password: "1971",
    host: "localhost",
    port: 5432,
    database: "postgres"
});

pool.on('error', (err, client)=>{
  console.error('Unexpected error on idle PostgreSQL client', err);
  process.exit(-1);
});

export default pool;