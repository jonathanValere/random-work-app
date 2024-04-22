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
    <div>
      <p>{sujet}</p>
      <button className="" title="Choix du sujet" onClick={exam}>
        Choix du sujet
      </button>
      <button title="Choix du sujet" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
