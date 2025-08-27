export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password } = req.body;

  const USERNAME = "admin";
  const PASSWORD = "admin12345";

  if (username === USERNAME && password === PASSWORD) {
    const payload = {
      username,
      timestamp: Date.now(),
    };
    const token = Buffer.from(JSON.stringify(payload)).toString("base64"); 
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "Credenciais inválidas" });
}
