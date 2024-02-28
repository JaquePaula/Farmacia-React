/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../services/Services";
import { ChangeEvent, useEffect, useState } from "react";

function FormularioCategoria() {

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/categoria/${id}`, setCategoria);}


  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categoria))
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categoria, setCategoria)

        alert('Categoria atualizada com sucesso')
        retornar()

      } catch (error: any) {
 
          alert('Erro ao atualizar a Categoria')
      }

    } else {
      try {
        await cadastrar(`/categoria`, categoria, setCategoria)

        alert('categoria cadastrada com sucesso')

      } catch (error: any) {
        
          alert('Erro ao cadastrar a Categoria')
        
      }
    }
    retornar()
  }

  function retornar() {
    navigate("/categoria")
  }


    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
            {id === undefined ? 'Cadastre uma nova categoria' : 'Editar Categoria'}
            </h1>
            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">

                <label htmlFor="nome" >Nome da categoria</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />

                    <label htmlFor="descricao">Descrição da categoria</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

                    />
                </div>
                <button
                    className="rounded text-gray-900 bg-cyan-400 border-l hover:bg-cyan-500 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    {id === undefined ? 'Cadastrar' : 'Editar'}
                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;