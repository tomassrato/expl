import express from "express";
import cors from "cors";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const USERS = [
  { username: process.env.USERNAME, password: process.env.PASSWORD }
];

const tokens = new Set();

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: "Credenciais inválidas" });

  const token = crypto.randomUUID();
  tokens.add(token);
  res.json({ token });
});

app.post("/validate", (req, res) => {
  const { token } = req.body;
  if (tokens.has(token)) return res.json({ valid: true });
  return res.status(401).json({ valid: false });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
