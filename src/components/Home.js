export function Home() {
  return (
    <div className="w-full h-24 bg-green-800 mx-auto">

      <div className="absolute mt-2 h-20 w-6/12 bg-[url(https://sanatorioadventista.org.ar/assets/img/footer_logo_sap.png)] bg-no-repeat"></div>

      <div className="mt-3 w-fit h-16 bg-pink-800 ">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-3 h-full">Gestionar Socios</button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-3.5 h-full">Gestionar Adherentes</button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-3.5 h-full">Gestionar Cobros</button>
      </div>
      
    </div>
  )
}

