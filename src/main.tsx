import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeSwitcher from "./DarkMode.tsx";
import WelcomeMessage from "./Message.tsx";

createRoot(document.getElementById("root")!).render(<WelcomeMessage />);
