import Summary from '../components/summaryItems'

export default function Home() {
  return (
    <main className="h-screen bg-slate-100 flex justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 border-1 border-transparent rounded-xl w-8/12">
        <div className="bg-gradient-to-t from-indigo-700 from-40% to-indigo-500 border-1 border-transparent rounded-xl flex flex-col items-center py-8 px-12">
          <h1 className="text-lg text-slate-300">Your Result</h1>
          <div className="rounded-full bg-indigo-700 flex flex-col px-16 py-14 my-2">
            <h2 className="text-7xl text-center">76</h2>
            <h4 className="text-xs text-center text-slate-300">of 100</h4>
          </div>
          <h3 className="text-lg py-2">Great</h3>
          <p className="text-xs text-slate-300 text-center px-5">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="rounded-xl flex flex-col shadow-2xl p-8">
          <h3 className="text-lg text-black pb-4">Summary</h3>
          <Summary id={1} color={'red'} />
          <Summary id={2} color={'yellow'} />
          <Summary id={3} color={'green'} />
          <Summary id={4} color={'blue'} />
          <button className="bg-gray-800 mt-2 rounded-full py-3">Continue</button>
        </div>
      </div>
    </main>
  );
}
