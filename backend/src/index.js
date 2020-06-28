const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); 


/**
 *  rota / recurso
 * 
 */

 /**
  * 
  * Métodos HTTP
  * 
  * GET: BUSCAR INFO DO BACKEND
  * POST: CRIAR INFO NO BACKEND
  * PUT: ALTERAR UMA INFO NO BACKEND
  * DELETE: DELETAR INFO NO BACKEND
  * 
  */

  
  /**
   * 
   * Tipos de parametros
   * 
   * Query params: parametros nomeados enviados na rota apos o simbolo de interrogacao. para filtros, validacao, 
   * Route params: parametros para identificar recursos
   * Request Body: corpo da requisicao, utilizado para criar recursos
   * 
   */


app.listen(3333);