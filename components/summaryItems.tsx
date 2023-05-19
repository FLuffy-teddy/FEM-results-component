"use client";

import Image from "next/image";
import Scores from "../app/api/data.json";

export default function Summary(props: any) {

  console.log(Object.entries(Scores));

  return (
    <>
     {Object.entries(Scores).map((key, i) => {
        <div key={i}>
          <Image
            src={scores.icon}
            height={200}
            width={200}
            alt="Score category Image"
          />

          <h2>{score.category}</h2>
          <h3>
            {score.score}
            <span>/100</span>
          </h3>
        </div>;
      })}
    </>
  );
}
