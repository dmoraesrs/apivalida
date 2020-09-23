import request from 'supertest';
import app from '../../src/app';

describe("Rota Teste", () => {
  it("Testando Chamada para teste", async () => {
    const response = await request(app).get("/teste");
    expect(response.statusCode).toBe(200);
  });
});

describe("Rota Gerar", () => {
  it("Testando Geração de Novo CPF", async () => {
    const response = await request(app).get("/gerar");
    const cpf = response.body;

    expect(response.body).toEqual(cpf);
    expect(response.statusCode).toBe(200);
  });
});

describe("Rota Validar", () => {
  it("Testando Requisição para Validação", async () => {
    const response = await request(app).post("/validar").send({
      cpf: '12345678909'
    });

    expect(response.statusCode).toBe(200);
  });

  it("Testando CPF Inválido", async () => {
    const response = await request(app).post("/validar").send({
      cpf: '123456789019'
    });

    expect(response.body).toBe(false);
  });

  it("Testando CPF Válido", async () => {
    const response = await request(app).post("/validar").send({
      cpf: '12345678909'
    });

    expect(response.body).toBe(true);
  });
});
