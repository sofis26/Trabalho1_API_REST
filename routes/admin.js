const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');
const Pedido = require('../models/pedido');

router.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.getAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar produtos' });
  }
});

router.post('/produtos', async (req, res) => {
  try {
    const produto = req.body;
    const result = await Produto.create(produto);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

router.put('/produtos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const produto = req.body;
    const result = await Produto.update(id, produto);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

router.delete('/produtos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Produto.delete(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
});

router.get('/pedidos', async (req, res) => {
  try {
    const pedidos = await Pedido.getAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar pedidos' });
  }
});

router.post('/pedidos', async (req, res) => {
  try {
    const pedido = req.body;
    const result = await Pedido.create(pedido);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
});

router.put('/pedidos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const pedido = req.body;
    const result = await Pedido.update(id, pedido);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar pedido' });
  }
});

router.delete('/pedidos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Pedido.delete(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir pedido' });
  }
});

module.exports = router;
