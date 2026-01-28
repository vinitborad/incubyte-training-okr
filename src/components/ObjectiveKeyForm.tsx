const ObjectiveKeyForm = () => {
  return (
    <div
      className={
        'flex flex-col justify-center items-center w-full max-w-md h-auto p-8 gap-8 bg-white rounded-3xl shadow-xl border border-gray-100'
      }
    >
      <h1 className={'text-3xl font-bold text-gray-800'}>Add Objectives!</h1>
      <form
        className={'flex flex-col w-full items-center justify-center gap-5'}
      >
        <input
          className={
            'w-full p-3 px-4 outline-none border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-gray-700 placeholder-gray-400'
          }
          type="text"
          placeholder={'Objective'}
          name={'objective'}
          required={true}
        />
        <input
          className={
            'w-full p-3 px-4 outline-none border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-gray-700 placeholder-gray-400'
          }
          type="text"
          placeholder={'Key'}
          name={'keys'}
          required={true}
        />
        <div className={'flex justify-center gap-4 w-full mt-2'}>
          <button
            className={
              'flex-1 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-500/20 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95'
            }
          >



            Save
          </button>
          <button
            className={
              'flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 hover:text-gray-800 hover:border-gray-300 active:bg-gray-100'
            }
            type={'reset'}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}
export default ObjectiveKeyForm
