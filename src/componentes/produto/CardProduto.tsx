import { Link } from "react-router-dom";
import Produto from "../../models/Produto";

interface CardProdutoProps {
  post: Produto;
}

function CardProduto({ post }: CardProdutoProps) {
  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div>
        <div className="flex w-full bg-green-200 text-gray-800 font-bold text-2xl py-2 px-4 items-center gap-4">
        <h4 className="text-lg font-semibold uppercase">{post.nome}</h4> </div>
        <div className="p-4 ">
          
          <p>{post.descricao}</p>
          <p>R$ {post.preco}</p>
          <p>categoria: {post.categoria?.descricao}</p>
          <p>
            Data:{" "}
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(post.data))}
          </p>
        </div>
      </div>
      <div className="flex border">
        <Link
          to={`/editarProduto/${post.id}`}
          className="w-full text-teal-500 flex items-center justify-center py-2  bg-gray-100 border-r hover:bg-gray-200"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarProduto/${post.id}`}
          className="text-red-700 w-full flex items-center justify-center  bg-gray-100 hover:bg-gray-200"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
