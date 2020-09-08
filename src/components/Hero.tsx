export function Hero() {
  return (
    <div className="fundo">
      <div className="flex flex-col items-center mb-48">
        <h1 className="mt-48 mb-12 text-5xl text-white bg-primary-300">
          PERSONAL TRAINER
        </h1>
        <p className="text-2xl tracking-wide text-white">
          Sinta-se bem com você
        </p>
      </div>
      <div className="flex flex-row items-center justify-between w-full h-16 bg-black bg-opacity-50 ">
        <div className="flex flex-row pl-48 space-x-3">
          <i className="text-3xl text-primary-300 fas fa-dumbbell" />
          <p className="text-xl font-semibold text-white ">Gustavo Silva</p>
        </div>
        <div className="flex flex-row pr-48 space-x-8">
          <p className="text-base text-white cursor-pointer ">Início</p>
          <p className="text-base text-white cursor-pointer ">Depoimentos</p>
          <p className="text-base text-white cursor-pointer ">Sobre Mim</p>
          <p className="text-base text-white cursor-pointer ">Contato</p>
        </div>
      </div>
    </div>
  )
}
