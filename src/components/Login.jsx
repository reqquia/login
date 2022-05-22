export default function Login() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-blue-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
        <div className="flex-grow">
          <h1 className="text-white text-center text-xl sm:text-5xl mb-2 font-bold">
            Seja bem-vindo(a)
          </h1>
          <p className="text-center text-indigo-200 sm:text-lg">
            Faça seu login para começar
          </p>
        </div>
      </div>
      <div className="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-30">
        <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-8">
          <div className="sm:flex sm:items-center">
            <img
              className="sm:flex-shrink-0 mx-auto sm:mx-0 h-24 rounded-full"
              src="src/image/face.png"
              alt="face"
            />
            <div className="sm:ml-4 sm:text-left text-center">
              <p className="text-xl">Lucas Réquia</p>
              <p className="text-sm text-gray-600">Programador JS</p>
              <div className="mt-4">
                <button type="button" class="btn-danger">
                  Não é o Lucas Réquia?
                </button>
              </div>
            </div>
          </div>
          <form className="flex w-full mt-8" method="post">
            <input
              type="password"
              placeholder="Insira sua senha"
              className="flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
              hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4"
            />
            <button type="button" className="flex-shrink-0 btn ml-4">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
