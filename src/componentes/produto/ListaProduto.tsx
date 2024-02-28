import { useEffect, useState } from "react";
import Produto from "../../models/Produto";
import { buscar } from "../../services/Services";
import CardProduto from "./CardProduto";

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([]);

  // const navigate = useNavigate();

  async function buscarProduto() {
      await buscar("/produto", setProduto)
    }
  

  useEffect(() => {
    buscarProduto();
  }, [produto.length]);
  return (
    <>
      {produto.length === 0 && (
         <div className="flex justify-center align-middle pt-80">
         <img src="" alt="" />
       </div>
      )}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {produto.map((produto) => (
          <CardProduto key={produto.id} post={produto} />
        ))}
      </div>
    </>
  );
        }

export default ListaProduto;
