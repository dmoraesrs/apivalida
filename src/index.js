const express = require('express');
const { generate, validate } = require('gerador-validador-cpf');

const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());



server.get('/gerar', (req, res) => {
  const cpf = generate({ format: true });

  return res.json(cpf);
});

server.post('/validar', (req, res) => {
  const { cpf } = req.body;
  const validar = validate(cpf);
 
  return res.status(200).json(validar);
});


server.listen(3333, () => {
  console.log("API Valida Started!");
});
