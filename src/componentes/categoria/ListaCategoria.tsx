
import Categoria from "../../models/Categoria";
import { buscar } from "../../services/Services";
import { toastAlerta } from "../../util/toastAlerta";
import CardCategoria from "./CardCategoria";
import { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";


function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);
  
  async function buscarCategoria() {
    try{
        await buscar('/categoria', setCategoria);
    } catch{
        toastAlerta('Ocorreu um erro ao buscar as categorias.', 'erro');
    }
}
   useEffect(() => {
    buscarCategoria();
  }, [categoria.length]);

  return (
    <>
    {categoria.length === 0  && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
    
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoria.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
          ))}


          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;