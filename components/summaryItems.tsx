"use client";

import Image from "next/image";

export default function Summary(props: any) {
  const scores = props.scores;

  return (
    <>
      {scores.map((score:any) => {
        <div key={score.id}>
          <Image
            src={score.icon}
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