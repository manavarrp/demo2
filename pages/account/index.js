import { PlusIcon } from '@heroicons/react/24/solid';

export default function Account() {
  return (
    <>
      <p className="text-gray-dark text-3xl mb-16 font-bold">Account</p>
      <div className="grid lg:grid-cols-1 gap-5 w-48 items-center mb-20">
        <div className="bg-white rounded h-20 shadow-sm m-auto">
          <div className="items-center m-auto pt-5 mr-3">
            <span className="sm:ml-3 m-auto pt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-darkBlue text-white shadow-sm hover:bg-indigo-700 focus:outline-none p-1"
                onClick={() => setOpen(true)}
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Agregar Usuario
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white h-96 shadow-sm">
        <div className="overflow-x-auto md:col-span-3">
          <h1 className="mb-4 text-xl">Users</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full w-auto ">
              <thead className="border-b  bg-darkBlue">
                <tr>
                  <th className="px-5 text-left">ID</th>
                  <th className="p-5 text-left">NOMBRE</th>
                  <th className="p-5 text-left">EMAIL</th>
                  <th className="p-5 text-left">ADMIN</th>
                  <th className="p-5 text-left">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className=" p-5 ">1</td>
                  <td className=" p-5 ">Martha Perez Trujillo</td>
                  <td className=" p-5 ">martha@gmail.com</td>
                  <td className=" p-5 ">No</td>
                  <td className=" p-5 ">
                    <button
                      type="button"
                      className="bg-darkBlue border rounded-sm text-white p-3"
                    >
                      Editar
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="bg-red border rounded-sm text-white p-3"
                    >
                      Eliminar
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
