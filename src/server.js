import express from 'express';
import dotenv from 'dotenv';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import rateLimitMiddleware from './middleware/rateLimitMiddleware.js';
import routes from './routes/index.js';
import cors from 'cors';
import path from 'path';

// Cargar variables de entorno
dotenv.config();

// Configuración de CORS
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

const app = express();

// Middlewares
app.use(express.json());
app.use(rateLimitMiddleware);
app.use(cors(corsOptions));

// Sirve archivos estáticos desde la carpeta 'frontend'
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(process.cwd(), 'frontend')));

// Ruta principal para cargar la página de inicio (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Rutas principales de la API
app.use('/api/v1', routes);

// Middleware de manejo de errores
app.use(errorHandlerMiddleware);

// Iniciar el servidor
const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});