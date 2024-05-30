"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const validCredentials = {
  username: "admin",
  password: "admin",
};

export default function Page() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      username === validCredentials.username &&
      password === validCredentials.password
    ) {
      console.log("Logged in with valid credentials");
      router.push("/dashboard");
    } else {
      setErrorMessage(
        "Usuário ou senha inválidos. Por Favor, tente novamente."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom">
      <form
        onSubmit={handleLogin}
        className="bg-[#16535b] p-8 rounded-lg shadow-md w-80"
      >
        <h1 className="text-xl font-bold mb-4 text-white text-center">
          Dashboard ProGear
        </h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-200 font-bold mb-2"
          >
            Usuário
          </label>
          <input
            type="text"
            placeholder="Digite seu usuário."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6 relative">
          <label
            htmlFor="password"
            className="block text-gray-200 font-bold mb-2"
          >
            Senha
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              required
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#0A2529] hover:bg-[#3a757c] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Entrar
          </button>
        </div>
        {errorMessage && (
          <div className=" text-white text-center mt-4 rounded">
            {errorMessage}
          </div>
        )}
        <h6 className="text-white text-center mt-4 font-bold">
          Usuário: admin | Senha: admin
        </h6>
      </form>
    </div>
  );
}
