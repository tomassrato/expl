import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = sessionStorage.getItem("token");

  if (!token) return <Navigate to="/" replace />;

  try {
    const payload = JSON.parse(atob(token));
    const tokenAge = Date.now() - payload.timestamp;

    if (!payload.username) {
      sessionStorage.removeItem("token");
      return <Navigate to="/" replace />;
    }
  } catch {
    sessionStorage.removeItem("token");
    return <Navigate to="/" replace />;
  }

  return children;
}
