export function Footer() {
  return (
    <div className="flex items-center justify-around w-full h-20 bg-white">
      <div>
        <p className="text-sm text-gray-700">
          © 2020 Gustavo S. Rua dos Lirios 317, Mirassol 15130-000
        </p>
        <p className="text-sm text-gray-700">
          Desenvolvido Por{' '}
          <span className="underline cursor-pointer">Gustavo</span>
        </p>
      </div>
      <div className="flex flex-row space-x-3 cursor-pointer">
        <i className="text-sm text-gray-700 fas fa-arrow-up" />
        <p className="text-sm text-gray-700">Voltar ao topo</p>
      </div>
    </div>
  )
}
