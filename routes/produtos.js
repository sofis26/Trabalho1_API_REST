const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.getAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar produtos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const produto = req.body;
    const result = await Produto.create(produto);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const produto = req.body;
    const result = await Produto.update(id, produto);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Produto.delete(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
});

module.exports = router;
