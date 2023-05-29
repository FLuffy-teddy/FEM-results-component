import Image from "next/image";
import Scores from "../app/api/data.json";

interface ID {
  id: number;
  bgColor: string;
  textColor: string;
}
interface TestID {
  id: number;
  category: string;
  score: number;
  icon: string;
}

interface TestScore extends Array<TestID> {}

export default function Summary({ id, bgColor, textColor }: ID) {
  function filterById(jsonObject: TestScore, id: number) {
    return jsonObject.filter(function (jsonObject) {
      return jsonObject["id"] == id;
    })[0];
  }

  var selectedObject = filterById(Scores["scores"], id);

  return (
    <div
      className={`flex ${bgColor} p-4 my-2 justify-between rounded-xl`}
      key={selectedObject.id}
    >
      <div className="flex items-center">
        <Image
          src={selectedObject.icon}
          height={30}
          width={30}
          alt="Score category Image"
        />

        <h4 className={`text-md ${textColor} pl-2`}>
          {selectedObject.category}
        </h4>
      </div>
      <div className="flex items-center">
        <h4 className="text-md text-black pr-1">{selectedObject.score}</h4>

        <span className="text-slate-500">/ 100</span>
      </div>
    </div>
  );
}
