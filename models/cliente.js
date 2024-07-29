const db = require('../config/database');

class Cliente {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM clientes');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute('SELECT * FROM clientes WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(cliente) {
    const { nome, altura, nascimento, cidade_id } = cliente;
    const [result] = await db.execute(
      'INSERT INTO clientes (nome, altura, nascimento, cidade_id) VALUES (?, ?, ?, ?)',
      [nome, altura, nascimento, cidade_id]
    );
    return { id: result.insertId, ...cliente };
  }

  static async update(id, cliente) {
    const { nome, altura, nascimento, cidade_id } = cliente;
    await db.execute(
      'UPDATE clientes SET nome = ?, altura = ?, nascimento = ?, cidade_id = ? WHERE id = ?',
      [nome, altura, nascimento, cidade_id, id]
    );
    return { id, ...cliente };
  }

  static async delete(id) {
    await db.execute('DELETE FROM clientes WHERE id = ?', [id]);
    return { message: 'Cliente excluído com sucesso' };
  }
}

module.exports = Cliente;
