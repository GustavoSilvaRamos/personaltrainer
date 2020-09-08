export function Contact() {
  return (
    <div className="relative items-center w-full fundo2">
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-50" />
      <div className="flex flex-col items-center">
        <h1 className="z-20 w-8/12 pt-20 text-5xl font-light tracking-wide text-center text-white">
          Comece a batalha para um corpo saudável
        </h1>
      </div>
      <div className="flex justify-center pt-20 pb-20">
        <button className="z-20 px-8 py-4 text-xl tracking-wide text-white border-2 border-gray-500 rounded-md hover:border-white">
          Faça um orçamento agora
        </button>
      </div>
    </div>
  )
}
