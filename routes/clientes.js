const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

router.post('/', async (req, res, next) => {
  try {
    const cliente = req.body;
    const result = await Cliente.create(cliente);
    res.status(201).json(result);
  } catch (error) {
    next(error); 
  }
});


router.get('/', async (req, res, next) => {
  try {
    const clientes = await Cliente.getAll();
    res.json(clientes);
  } catch (error) {
    next(error); 
  }
});


router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const cliente = await Cliente.getById(id);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    next(error); 
  }
});


router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const cliente = req.body;
    const result = await Cliente.update(id, cliente);
    res.json(result);
  } catch (error) {
    next(error); 
  }
});


router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Cliente.delete(id);
    res.json(result);
  } catch (error) {
    next(error); 
  }
});

module.exports = router;
