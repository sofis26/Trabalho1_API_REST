const db = require('../config/database');

class Produto {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM produtos');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute('SELECT * FROM produtos WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(produto) {
    const { nome, preco, quantidade, categoria_id } = produto;
    const [result] = await db.execute(
      'INSERT INTO produtos (nome, preco, quantidade, categoria_id) VALUES (?, ?, ?, ?)',
      [nome, preco, quantidade, categoria_id]
    );
    return { id: result.insertId, ...produto };
  }

  static async update(id, produto) {
    const { nome, preco, quantidade, categoria_id } = produto;
    await db.execute(
      'UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, categoria_id = ? WHERE id = ?',
      [nome, preco, quantidade, categoria_id, id]
    );
    return { id, ...produto };
  }

  static async delete(id) {
    await db.execute('DELETE FROM produtos WHERE id = ?', [id]);
    return { message: 'Produto excluído com sucesso' };
  }
}

module.exports = Produto;
