const db = require('../config/database');

class Pedido {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM pedidos');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute('SELECT * FROM pedidos WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(pedido) {
    const { horario, endereco, cliente_id } = pedido;
    const [result] = await db.execute(
      'INSERT INTO pedidos (horario, endereco, cliente_id) VALUES (?, ?, ?)',
      [horario, endereco, cliente_id]
    );
    return { id: result.insertId, ...pedido };
  }

  static async update(id, pedido) {
    const { horario, endereco, cliente_id } = pedido;
    await db.execute(
      'UPDATE pedidos SET horario = ?, endereco = ?, cliente_id = ? WHERE id = ?',
      [horario, endereco, cliente_id, id]
    );
    return { id, ...pedido };
  }

  static async delete(id) {
    await db.execute('DELETE FROM pedidos WHERE id = ?', [id]);
    return { message: 'Pedido excluído com sucesso' };
  }
}

module.exports = Pedido;
