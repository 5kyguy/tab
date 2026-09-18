import { Navigate, Route, Routes } from "react-router-dom";
import { Docs } from "./pages/Docs";
import { Landing } from "./pages/Landing";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/docs" element={<Navigate to="/docs/introduction" replace />} />
      <Route path="/docs/:slug" element={<Docs />} />
    </Routes>
  );
}
