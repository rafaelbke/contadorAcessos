const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Importe a biblioteca CORS

const app = express();
const PORT = process.env.PORT || 3099;
app.use(cors()); //

let accessCount = 0;

// Middleware para registrar cada acesso
app.use((req, res, next) => {
  accessCount++;
  next();
});

// Rota para obter o contador de acessos
app.get('/api/access-count', (req, res) => {
  res.json({ count: accessCount });
});

// Inicialize o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

//exports.app = onRequest(app);
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
