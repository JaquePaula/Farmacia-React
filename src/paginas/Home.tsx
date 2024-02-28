import { Link } from "react-router-dom";
import homeLogo from "../assets/farmaciahome.jpg";

function Home() {

  return (
    <>
      <div className="flex justify-center min-h-[79vh]">
        <div className="container grid grid-cols-2 text-gray-800">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Farma Essencial</h2>
            <p className="text-xl">Saúde e Bem-estar em sua Forma mais Pura </p>

            <div className="flex justify-around gap-4"> 
                <Link to="/produto" className='rounded bg-cyan-300 hover:bg-cyan-400   text-gray-800 font-semibold py-2 px-4'>Ver produtos</Link>

                <Link to="/cadastroProduto" className='rounded bg-cyan-300 hover:bg-cyan-400   text-gray-800 font-semibold py-2 px-4'>Criar produto</Link>
              </div> 
          </div>

          <div className="flex justify-center mt-2">
            <img src={homeLogo} alt="" className="" />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
