import { useState } from "react";

const WelcomeMessage = () => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Bienvenido a nuestra app</h1>
      <input
        type="text"
        className="border p-2 mb-4 w-full rounded"
        placeholder="Ingresa tu nombre"
        value={username}
        onChange={handleInputChange}
      />
      <p className="text-lg">
        {username ? `¡Hola, ${username}! 👋` : "Por favor, ingresa tu nombre."}
      </p>
    </div>
  );
};

export default WelcomeMessage;
