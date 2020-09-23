import { Router} from 'express';
import { generate, validate } from 'gerador-validador-cpf';

const routes = new Router();

routes.get('/gerar', (req, res) => {
  const cpf = generate({ format: true });

  return res.json(cpf);
});

routes.post('/validar', (req, res) => {
  const { cpf } = req.body;
  const validar = validate(cpf);

  if(!validar){
    return res.status(401).json(false);
  }

  return res.status(200).json(validar);
});

routes.get('/teste', (req, res) => {
  const msg = 'API VALIDA - OK';

  return res.status(200).json({resposta: msg});
});

export default routes;
