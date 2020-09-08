export function Details() {
  return (
    <div className="flex flex-col items-center mt-10 mb-32 bg-white">
      <p className="mb-2 text-xl text-gray-500 ">Como eu posso ajudar?</p>
      <h1 className="mb-16 text-4xl font-semibold leading-none tracking-wide text-gray-800">
        Seu guia para um corpo estrutural
      </h1>
      <div className="flex justify-between pl-24 pr-24">
        <div className="flex flex-col items-center">
          <i className="flex items-center justify-center w-32 h-32 mb-10 text-5xl border-2 rounded-full text-primary-500 fas fa-user border-primary-500" />
          <p className="mb-2 text-xl font-semibold leading-none text-gray-800">
            Personal Training
          </p>
          <p className="w-8/12 text-lg font-normal text-center text-gray-600">
            Clique aqui e comece a escrever. Porro quisquam est qui dolorem
            ipsum quia dolor.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <i className="flex items-center justify-center w-32 h-32 mb-10 text-5xl border-2 rounded-full border-primary-500 text-primary-500 fas fa-heart" />
          <p className="mb-2 text-xl font-semibold leading-none text-gray-800">
            Treinamento Corporal completo
          </p>
          <p className="w-8/12 text-lg font-normal text-center text-gray-600">
            Clique aqui e comece a escrever. Porro quisquam est qui dolorem
            ipsum quia dolor.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <i className="flex items-center justify-center w-32 h-32 mb-10 text-5xl border-2 rounded-full border-primary-500 text-primary-500 fas fa-weight-hanging" />
          <p className="mb-2 text-xl font-semibold leading-none text-gray-800">
            Treinamento em equipamentos
          </p>
          <p className="w-8/12 text-lg font-normal text-center text-gray-600">
            Clique aqui e comece a escrever. Porro quisquam est qui dolorem
            ipsum quia dolor.
          </p>
        </div>
      </div>
    </div>
  )
}
