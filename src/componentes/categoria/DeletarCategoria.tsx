import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../services/Services";
import { useEffect, useState } from "react";
import Categoria from "../../models/Categoria";

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();


  async function buscarPorId(id: string) {
  
      await buscar(`/categoria/${id}`, setCategoria);
     
      }
  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categoria");
  }

  async function deletarcategoria() {
    try {
      await deletar(`/categoria/${id}`)
      alert("categoria apagado com sucesso");
    } catch (error) {
      alert("Erro ao apagar o categoria");
    }

    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6  bg-green-300 text-gray-800 font-bold text-2xl">
          {categoria.nome}
        </header>
        <p className="p-8 text-3xl bg-slate-50 h-full">
          {" "}
          {categoria.descricao}
        </p>
        <div className="flex">
          <button
            className="text-gray-900 bg-red-400 hover:bg-red-700 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-gray-900 bg-cyan-400 border-l hover:bg-cyan-500 flex items-center justify-center"
            onClick={deletarcategoria}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
