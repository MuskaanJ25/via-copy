import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Via server is running' });
});

// Serve static files from Vite dev server in development
app.use(express.static(path.join(__dirname, 'dist')));

// Serve React app for all other routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});