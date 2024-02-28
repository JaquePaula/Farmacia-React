

function NavBar() {

  let navbarComponent;

 {
    navbarComponent = (
      <div className="w-full  bg-cyan-50 text-gray-700 flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <button
           
            className="text-2xl font-bold uppercase text-cyan-900"
          >
            Farmacia{" "}
          </button>

          <div className="flex gap-4">
            <button className=" text-cyan-900 hover:underline  ">
              Produtos
            </button>

            <button className="text-cyan-900 hover:underline ">
              Categorias
            </button>
            <button className="text-cyan-900 hover:underline">
              Cadastrar categoria
            </button>
        
          </div>
        </div>
      </div>
    );
  }

  return (
  <>
  {navbarComponent}
  </>
  )
}

export default NavBar;
