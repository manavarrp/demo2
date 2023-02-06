export default function Home() {
  return (
    <>
      <p className="text-gray-dark text-3xl mb-16 font-bold">Dashboard</p>
      <div className="grid lg:grid-cols-1 gap-5 mb-16">
        <div className="bg-white rounded h-20 shadow-sm ">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-2"
            for="file_input"
          >
            Upload file
          </label>
          <input
            className="ml-2 block w-full text-sm text-gray rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <p
            className="ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>
      </div>

      <div className="bg-white h-auto shadow-sm">
        <div className="overflow-x-auto md:col-span-3">
          <h1 className="mb-4 text-xl">Users</h1>
          <div className="overflow-x-auto items-center">
            <table className="min-w-full">
              <thead className="border-b bg-darkBlue">
                <tr>
                  <th className="px-5 text-left">ID</th>
                  <th className="p-5 text-left">NOMBRE</th>
                  <th className="p-5 text-left">EMAIL</th>
                  <th className="p-5 text-left">EMPRESA</th>
                  <th className="p-5 text-left">TELEFONO</th>
                  <th className="p-5 text-left">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className=" p-5 ">1</td>
                  <td className=" p-5 ">Olga Ramirez </td>
                  <td className=" p-5 ">olga@gmail.com</td>
                  <td className=" p-5 ">Peptio</td>
                  <td className=" p-5 ">212 448980</td>
                  <td className=" p-5 ">
                    <button
                      type="button"
                      className="bg-darkBlue border rounded-sm text-white p-3"
                    >
                      Editar
                    </button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className=" p-5 ">2</td>
                  <td className=" p-5 ">Juan Palacio</td>
                  <td className=" p-5 ">juan@gmail.com</td>
                  <td className=" p-5 ">Peptio</td>
                  <td className=" p-5 ">220 448980</td>
                  <td className=" p-5 ">
                    <button
                      type="button"
                      className="bg-darkBlue border rounded-sm text-white p-3"
                    >
                      Editar
                    </button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className=" p-5 ">3</td>
                  <td className=" p-5 ">Luisa Gomez </td>
                  <td className=" p-5 ">luisa@gmail.com</td>
                  <td className=" p-5 ">Santana</td>
                  <td className=" p-5 ">302 44528</td>
                  <td className=" p-5 ">
                    <button
                      type="button"
                      className="bg-darkBlue border rounded-sm text-white p-3"
                    >
                      Editar
                    </button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className=" p-5 ">4</td>
                  <td className=" p-5 ">Martha Perez Trujillo</td>
                  <td className=" p-5 ">martha@gmail.com</td>
                  <td className=" p-5 ">Peptio</td>
                  <td className=" p-5 ">515 85945</td>
                  <td className=" p-5 ">
                    <button
                      type="button"
                      className="bg-darkBlue border rounded-sm text-white p-3"
                    >
                      Editar
                    </button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className=" p-5 ">5</td>
                  <td className=" p-5 ">Luis fernando Perez </td>
                  <td className=" p-5 ">fernando@gmail.com</td>
                  <td className=" p-5 ">Peptio</td>
                  <td className=" p-5 ">415 448980</td>
                  <td className=" p-5 ">
                    <button
                      type="button"
                      className="bg-darkBlue border rounded-sm text-white p-3"
                    >
                      Editar
                    </button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className=" p-5 ">6</td>
                  <td className=" p-5 ">Carlos Palza Perez </td>
                  <td className=" p-5 ">carlos@gmail.com</td>
                  <td className=" p-5 ">Santana</td>
                  <td className=" p-5 ">415 448980</td>
                  <td className=" p-5 ">
                    <button
                      type="button"
                      className="bg-darkBlue border rounded-sm text-white p-3"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
