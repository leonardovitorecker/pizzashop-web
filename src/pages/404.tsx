import { Link } from "react-router-dom";

export function NotFount() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p>Voltar para o </p>
      <Link to="/" className="text-sky-600 dark:text-sky-400">
        Dashboard
      </Link>
    </div>
  );
}
