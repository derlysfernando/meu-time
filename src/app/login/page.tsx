import Button from "@/components/button";
import Input from "@/components/inputs";
import { FaKey, FaSign } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-300">
      <div className="flex w-full max-w-md flex-col rounded-md bg-white px-4 py-8 shadow-md sm:px-6 md:px-8 lg:px-10">
        <div className="self-center text-xl font-medium uppercase text-gray-800 sm:text-2xl">
          Entrar em Meu Time
        </div>
        <div className="mt-10">
          <Input
            type="password"
            label="API Key"
            id="api-key"
            name="api-key"
            icon={<FaKey />}
            placeholder="API FOOTBALL"
          />
          <Button label="Entrar" icon={<FaSign/>} />
        </div>
        <div className="mt-6 flex items-center justify-center">
          <a
            href="#"
            target="_blank"
            className="inline-flex items-center text-center text-xs font-bold text-blue-500 hover:text-blue-700"
          >
            <FaKey />
            <span className="ml-2">Solicitar API Key</span>
          </a>
        </div>
      </div>
    </div>
  );
}
