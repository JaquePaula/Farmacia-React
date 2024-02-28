import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../models/Categoria";
import { ChangeEvent, useEffect, useState } from "react";
import Produto from "../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../services/Services";

function FormularioProduto() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
    data: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    data: "",
    categoria: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produto/${id}`, setProduto);
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria);
  }

  async function buscarCategoria() {
    await buscar("/categoria", setCategorias);
  }

  useEffect(() => {
    buscarCategoria();
    if (id !== undefined) {
      buscarProdutoPorId(id);
      console.log(categoria);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(produto);

    if (id != undefined) {
      try {
        await atualizar(`/produto`, produto, setProduto);
        alert("Produto atualizado com sucesso");
        return navigate("/produto");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("Erro ao atualizar o produto");
        } else {
          alert("Erro ao atualizar a Produto");
        }
      }
    }
    try {
      await cadastrar(`/produto`, produto, setProduto);

      alert("Produto cadastrado com sucesso");
      return navigate("/produto");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert("Erro ao cadastrar o Produto");
    }
  }

  const carregandoCategoria = categoria.descricao === "";

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Produto"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do produto</label>
          <input
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Texto"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço do produto</label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Preço"
            name="preco"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Categoria do produto</p>
          <select
            name="categoria"
            id="categoria"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma categoria
            </option>

            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          disabled={carregandoCategoria}
          type="submit"
          className="rounded disabled:bg-slate-200 bg-amber-500 hover:bg-amber-600 text-gray font-bold w-1/2 mx-auto block py-2"
        >
          {carregandoCategoria ? (
            <span>Carregando</span>
          ) : id !== undefined ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormularioProduto;
