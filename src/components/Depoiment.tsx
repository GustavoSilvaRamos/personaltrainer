export function Depoiment() {
  return (
    <div className="flex flex-col items-center bg-primary-500">
      <h1 className="mt-16 text-5xl tracking-wide text-white">Depoimentos</h1>
      <p className="text-xl leading-none tracking-wide text-gray-500">
        Leia o que meus clientes têm a dizer
      </p>
      <div className="flex flex-row justify-center pt-16 ">
        <div className="flex w-4/12 space-x-3">
          <img className="h-32" src="demo1.png" alt="" />

          <p className="w-8/12 text-lg italic text-white">
            <span className="text-xl not-italic font-semibold text-white">
              Jose da Silva
            </span>{' '}
            <br /> ”Aspernatur aut odit aut fugit sed quia consequuntur magni
            dolores eos qui ratione voluptatem.“
          </p>
        </div>
        <div className="flex w-4/12 space-x-3">
          <img className="h-32" src="demo2.png" alt="" />

          <p className="w-8/12 text-lg italic text-white">
            <span className="text-xl not-italic font-semibold text-white">
              Teresa Magalhães
            </span>{' '}
            <br /> ”Aspernatur aut odit aut fugit sed quia consequuntur magni
            dolores eos qui ratione voluptatem.“
          </p>
        </div>
      </div>
      <div className="pt-20 pb-16">
        <button className="px-8 py-3 text-xl text-white border-2 border-gray-500 rounded-md hover:border-white">
          Outros Depoimentos
        </button>
      </div>
    </div>
  )
}
