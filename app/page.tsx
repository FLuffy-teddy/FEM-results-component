import Image from "next/image";
import { Inter } from "next/font/google";
import Summary from '../components/summaryItems';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen bg-slate-100 flex justify-center items-center">
      <div className="grid grid-cols-2  border-1 border-transparent rounded-xl w-8/12">
        <div className="bg-indigo-400 border-1 border-transparent rounded-xl flex flex-col items-center p-8">
          <h1 className="text-lg">Your Result</h1>
          <div className="rounded-full bg-indigo-500 flex flex-col">
            <h2 className="text-2xl">76</h2>
            <h4 className="text-sm">of 100</h4>
          </div>
          <h3 className="text-lg">Great</h3>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="rounded-xl flex flex-col shadow-2xl p-8">
          <Summary/>
          <h3 className="text-lg">Summary</h3>
          <div className="flex bg-red-100 p-4 my-2">
            <div>
              <h4 className="text-md">Reaction</h4>
            </div>
            <div>
              <h4 className="text-md">
                80 <span>/ 100</span>
              </h4>
            </div>
          </div>
          <button className="bg-black-200">Continue</button>
        </div>
      </div>
    </main>
  );
}
