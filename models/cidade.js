const db = require('../config/database');

class Cidade {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM cidades');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute('SELECT * FROM cidades WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(cidade) {
    const { nome } = cidade;
    const [result] = await db.execute('INSERT INTO cidades (nome) VALUES (?)', [nome]);
    return { id: result.insertId, ...cidade };
  }

  static async update(id, cidade) {
    const { nome } = cidade;
    await db.execute('UPDATE cidades SET nome = ? WHERE id = ?', [nome, id]);
    return { id, ...cidade };
  }

  static async delete(id) {
    await db.execute('DELETE FROM cidades WHERE id = ?', [id]);
    return { message: 'Cidade excluída com sucesso' };
  }
}

module.exports = Cidade;
