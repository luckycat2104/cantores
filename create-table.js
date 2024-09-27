import { sql } from './db.js'

sql`
  CREATE TABLE cantores (
      Id text PRIMARY KEY,
      nome_cantor character varying(255),
      nome_banda character varying(255),
      data_nascimento character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})