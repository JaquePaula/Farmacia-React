import { Link } from "react-router-dom";
import Categoria from "../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  const date = new Date(categoria.data); //converte a data(string) para o tipo Date

  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-green-200 text-gray-800 text-2xl">
        {categoria.nome}
      </header>
      <p className="p-8 text-2xl bg-slate-50 h-full">{categoria.descricao}</p>
      
      <p className="p-8 text-2xl bg-slate-50 h-full text-center">
        {date.toLocaleDateString("pt-BR")}
      </p>

      <div className="flex">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="w-full text-gray-900 bg-cyan-200 hover:bg-cyan-300 flex items-center justify-center py-2 font-bold"
        >
          Editar
        </Link>
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="text-gray-900 bg-red-300 hover:bg-red-400 w-full flex items-center justify-center font-bold"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
