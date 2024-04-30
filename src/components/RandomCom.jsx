import { useState } from "react";

export default function RandomCom() {
  const [sujet, setSujet] = useState("Votre sujet sera...");
  const sujets = ["Mise en page", "Présentation", "Analyse de données"];

  const exam = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    setSujet(sujets[randomNumber]);
  };

  const reset = () => {
    setSujet("Votre sujet sera...");
  };

  return (
    <>
      <div className="flex justify-center mt-7">
        <button
          className="bg-sky-500 hover:bg-sky-700 p-4 mx-2 text-white uppercase rounded font-sans"
          title="Choix du sujet"
          onClick={exam}
        >
          Choix du sujet
        </button>
        <button
          className="bg-zinc-400 hover:bg-zinc-700 p-4 mx-2 text-white uppercase rounded font-sans"
          title="Choix du sujet"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <p className="text-3xl text-center mt-7 font-bold font-sans">{sujet}</p>
    </>
  );
}
