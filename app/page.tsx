import Summary from '../components/summaryItems'

export default function Home() {
  return (
    <main className="h-screen bg-slate-100 flex justify-center items-center">
      <div className="grid grid-cols-2  border-1 border-transparent rounded-xl w-8/12">
        <div className="bg-gradient-to-t from-indigo-700 from-40% to-indigo-500 border-1 border-transparent rounded-xl flex flex-col items-center py-8 px-12">
          <h1 className="text-lg text-slate-300">Your Result</h1>
          <div className="rounded-full bg-indigo-700 flex flex-col px-16 py-14 my-2">
            <h2 className="text-2xl text-center">76</h2>
            <h4 className="text-xs text-slate-300">of 100</h4>
          </div>
          <h3 className="text-lg py-2">Great</h3>
          <p className="text-xs text-slate-300 text-center">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="rounded-xl flex flex-col shadow-2xl p-8">
          <h3 className="text-lg text-black pb-4">Summary</h3>
          <Summary
          id={1}
          />
          <div className="flex bg-red-100 p-4 my-2 justify-between">
            <div>
              <h4 className="text-md text-red-400">Reaction</h4>
            </div>
            <div>
              <h4 className="text-md text-black">
                80 <span className="text-slate-500">/ 100</span>
              </h4>
            </div>
          </div>
          <button className="bg-gray-800">Continue</button>
        </div>
      </div>
    </main>
  );
}
