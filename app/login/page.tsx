import { Button } from "../_components/ui/button";
import Image from "next/image";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="h-full grid grid-cols-2 bg-gray-900">
      {/* ESQUERDA */}
      <div className="flex flex-col h-full justify-center p-8 m-w-{550px} mx-auto">
        <div className="flex items-center	mb-8">
          <Image
            src="/logo-512.png"
            alt="Finance Controler"
            width={60}
            height={10}
            className="mr-5"
          />
          <h1 className="text-3xl font-bold">Finance Controler</h1>
        </div>
        <h1 className="text-4xl font-bold mb-3">Bem-vindo!</h1>
        <p className="text-muted-foreground mb-8">
          A Finance Controler é uma plataforma de gestão financeira que utiliza
          IA para monitorar suas movimentações financeiras, e oferecer insights
          personalizados, facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline" className="bg-gray-700">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>
      {/* DIREITA */}
      <div className="relative w-full-h-full">
        <Image
          src="/login.png"
          alt="image-login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
