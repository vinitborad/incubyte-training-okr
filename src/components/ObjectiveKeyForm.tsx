import React, { useState } from 'react'

const ObjectiveKeyForm = () => {
  const [objective, setObjective] = useState('')
  const [key, setKey] = useState('')

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ objective, key })
  }

  const handleClear = () => {
    setObjective('')
    setKey('')
  }

  return (
    <div
      className={
        'flex flex-col justify-center items-center w-full max-w-md h-auto p-8 gap-8 bg-white rounded-3xl shadow-xl border border-gray-100'
      }
    >
      <h1 className={'text-3xl font-bold text-gray-800'}>Add Objectives!</h1>

      <form
        className={'flex flex-col w-full items-center justify-center gap-5'}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Objective"
          value={objective}
          required
          className={
            'w-full p-3 px-4 outline-none border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-gray-700 placeholder-gray-400'
          }
          onChange={(e) => setObjective(e.target.value)}
        />

        <input
          type="text"
          placeholder="Key"
          value={key}
          required
          className={
            'w-full p-3 px-4 outline-none border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-gray-700 placeholder-gray-400'
          }
          onChange={(e) => setKey(e.target.value)}
        />

        <div className={'flex justify-center gap-4 w-full mt-2'}>
          <button
            className={
              'flex-1 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-500/20 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95'
            }
            type="submit"
          >
            Save
          </button>
          <button
            className={
              'flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 hover:text-gray-800 hover:border-gray-300 active:bg-gray-100'
            }
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default ObjectiveKeyForm
