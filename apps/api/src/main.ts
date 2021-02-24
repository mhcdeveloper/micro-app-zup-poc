import * as express from 'express';
import * as cors from 'cors';

import { getCursos } from './app/cursos';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/cursos', (req, res) => {
  const cursos = getCursos();
  res.send(cursos);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
