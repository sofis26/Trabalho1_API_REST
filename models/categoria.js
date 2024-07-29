const db = require('../config/database');

class Categoria {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM categorias');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute('SELECT * FROM categorias WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(categoria) {
    const { nome } = categoria;
    const [result] = await db.execute('INSERT INTO categorias (nome) VALUES (?)', [nome]);
    return { id: result.insertId, ...categoria };
  }

  static async update(id, categoria) {
    const { nome } = categoria;
    await db.execute('UPDATE categorias SET nome = ? WHERE id = ?', [nome, id]);
    return { id, ...categoria };
  }

  static async delete(id) {
    await db.execute('DELETE FROM categorias WHERE id = ?', [id]);
    return { message: 'Categoria excluída com sucesso' };
  }
}

module.exports = Categoria;
