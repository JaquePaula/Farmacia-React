import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../services/Services";
import { useEffect, useState } from "react";
import Produto from "../../models/Produto";

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/produto/${id}`, setProduto);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/produto");
  }

  async function deletarProduto() {
    try {
      await deletar(`/produto/${id}`);

      alert("Produto apagado com sucesso");
    } catch (error) {
      alert("Erro ao apagar a Produto");
    }

    return retornar();
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar produto</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6  bg-green-200 text-gray-800 font-bold text-2xl">
          {produto.nome}
        </header>
        <div className="p-4">
          <p className="text-xl h-full">{produto.descricao}</p>
          <p>{produto.preco}</p>
          <p>{produto.data}</p>
        </div>
        <div className="flex">
          <button
            className="text-red-700 bg-gray-100 hover:bg-gray-200 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-teal-600 bg-gray-100 border-l hover:bg-gray-200 flex items-center justify-center"
            onClick={deletarProduto}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
