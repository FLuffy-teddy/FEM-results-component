"use client";

import Image from "next/image";
import Scores from "../app/api/data.json";

export default function Summary(props:number) {
  console.log(Scores);

  interface ID {
    id: 1;
  }
  interface Score {
    score: 1
  }
  interface ScoreType {
      category: "test";
      score: Score;
      icon: "image";
      [key: number]: ID;
  }

  const typeScore: ScoreType = Scores["scores"];

  return (
    <>
      {Object.entries(typeScore).forEach((score) => {
        <div key={score["id"]}>
          <Image
            src={score["icon"]}
            height={200}
            width={200}
            alt="Score category Image"
          />

          <h2>{score["category"]}</h2>
          <h3>
            {score["score"]}
            <span>/100</span>
          </h3>
        </div>;
      })}
    </>
  );
}
