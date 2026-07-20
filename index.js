import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: '¡Servidor Node.js con Express ejecutándose correctamente!',
    status: 'success'
  });
});

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export { app, server };