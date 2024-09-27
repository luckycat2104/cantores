import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listCantores() {
    const cantores = await sql`select * from cantores`;
    return cantores;
  }

  async createCantor(cantor) {
    const id = randomUUID();
    console.log('id', id);
    const nome_cantor = cantor.nome_cantor;
    const nome_banda = cantor.nome_banda;
    const data_nascimento = cantor.data_nascimento;
    
    await sql`insert into cantores (id, nome_cantor, nome_banda, data_nascimento)
    values (${id}, ${nome_cantor}, ${nome_banda}, ${data_nascimento})`
  }

  async updateUser(id, cantor) {
    const nome_cantor = cantor.nome_cantor;
    const nome_banda = cantor.nome_banda;
    const data_nascimento = cantor.data_nascimento;

    await sql`update users set 
        nome_cantor = ${nome_cantor},
        nome_banda = ${nome_banda},
        data_nascimento = ${data_nascimento}
        where id = ${id}
    `;
  }

  async deleteCantor(id) {
    await sql`delete from cantores where id = ${id}`
  }

}