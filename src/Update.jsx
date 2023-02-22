const Update = () => {
  return (
    <>
      <div className="w-full max-w-xs bg-white shadow-md rounded px-3 pt-6 pb-8 mb-4">
        <h1 className="text-slate-800 text-2xl text-center">Update Detais</h1>
        <form action="" className="">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mb"
            >
              MB :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mb"
              type="text"
              placeholder="MBs : "
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bill"
            >
              bill per month :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bill"
              type="text"
              placeholder="Bill : "
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Last Paid Dated :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="text"
              placeholder="Last Paid Dated : "
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rbill"
            >
              Remaing Bill(if any) :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rbill"
              type="text"
              placeholder="Remaining : "
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-800 text-white font-semibold hover:text-white py-2 px-4  rounded"
          >
            update
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
