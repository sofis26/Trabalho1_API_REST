require('dotenv').config();

const express = require('express');
const app = express();
const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');
const pedidosRouter = require('./routes/pedidos');
const adminRouter = require('./routes/admin');

app.use(express.json());
app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);
app.use('/pedidos', pedidosRouter);
app.use('/admin', adminRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocorreu um erro interno no servidor'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
