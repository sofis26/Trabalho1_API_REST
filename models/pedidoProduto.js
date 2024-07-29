const db = require('../config/database');

class PedidoProduto {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM pedidos_produtos');
    return rows;
  }

  static async getById(pedido_id, produto_id) {
    const [rows] = await db.execute(
      'SELECT * FROM pedidos_produtos WHERE pedido_id = ? AND produto_id = ?',
      [pedido_id, produto_id]
    );
    return rows[0];
  }

  static async create(pedidoProduto) {
    const { pedido_id, produto_id, preco, quantidade } = pedidoProduto;
    const [result] = await db.execute(
      'INSERT INTO pedidos_produtos (pedido_id, produto_id, preco, quantidade) VALUES (?, ?, ?, ?)',
      [pedido_id, produto_id, preco, quantidade]
    );
    return { pedido_id, produto_id, preco, quantidade };
  }

  static async update(pedido_id, produto_id, pedidoProduto) {
    const { preco, quantidade } = pedidoProduto;
    await db.execute(
      'UPDATE pedidos_produtos SET preco = ?, quantidade = ? WHERE pedido_id = ? AND produto_id = ?',
      [preco, quantidade, pedido_id, produto_id]
    );
    return { pedido_id, produto_id, preco, quantidade };
  }

  static async delete(pedido_id, produto_id) {
    await db.execute('DELETE FROM pedidos_produtos WHERE pedido_id = ? AND produto_id = ?', [pedido_id, produto_id]);
    return { message: 'PedidoProduto excluído com sucesso' };
  }
}

module.exports = PedidoProduto;
