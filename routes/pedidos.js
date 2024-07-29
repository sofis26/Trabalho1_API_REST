const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.getAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar pedidos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const pedido = req.body;
    const result = await Pedido.create(pedido);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const pedido = req.body;
    const result = await Pedido.update(id, pedido);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar pedido' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Pedido.delete(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir pedido' });
  }
});

module.exports = router;
