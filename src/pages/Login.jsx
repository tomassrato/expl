import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
import { Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const VALID_USER = "admin67";
  const VALID_PASS = "teste123";

  const generateToken = (username) => {
    const payload = { username, timestamp: Date.now() };
    return btoa(JSON.stringify(payload));
  };

  const handleLogin = () => {
    if (username === VALID_USER && password === VALID_PASS) {
      const token = generateToken(username);
      sessionStorage.setItem("token", token);
      navigate("/unidadescurriculares");
    } else {
      setError("Username ou password inválidos!");
      setNotification(true);
      setTimeout(() => setNotification(false), 2000);
    }
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "100dvh" }}>
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-5 left-0 right-0 mx-auto w-max bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg z-50"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute rounded-[60px] bg-yellow-400 dark:bg-purple-600 blur-3xl opacity-50 z-0 w-[110%] h-[110%] max-w-[450px] max-h-[350px]" />

      <div className="relative flex flex-col items-center justify-start py-5 px-[40px] w-[90vw] max-w-[400px] h-[70vw] max-h-[320px] bg-gray-100 dark:bg-gray-950 rounded-[60px] shadow-lg border-[2px] border-yellow-400 dark:border-purple-600 z-10">
        <h1 className="text-[27px] font-semibold text-black dark:text-white mb-[20px]">Login</h1>

        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full bg-gray-200 dark:bg-gray-800 py-[10px] text-black dark:text-white pl-[15px] rounded-[30px] border border-yellow-400 dark:border-purple-600 focus:outline-none mb-[15px] focus:ring-2 focus:ring-yellow-400 dark:focus:ring-purple-600"
        />

        <div className="relative w-full mb-[40px]">
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full bg-gray-200 dark:bg-gray-800 py-[10px] text-black dark:text-white pl-[15px] pr-[40px] rounded-[30px] border border-yellow-400 dark:border-purple-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-purple-600"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black dark:text-white transition-colors duration-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="bg-yellow-400 dark:bg-purple-600 text-black dark:text-white text-[25px] w-[20dvh] max-w-[160px] rounded-[25px] hover:bg-yellow-500 dark:hover:bg-purple-500 border-2 border-yellow-500 dark:border-purple-500 cursor-pointer font-medium py-[2px]"
        >
          Login
        </button>
      </div>

      <div className="absolute bottom-6 z-10">
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Login;
