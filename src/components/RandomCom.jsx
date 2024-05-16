import { useState } from "react";
import { motion } from "framer-motion";

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
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-emerald-600 hover:bg-emerald-900 p-4 mx-2 text-white uppercase rounded font-sans"
          title="Choix du sujet"
          onClick={exam}
        >
          Choix du sujet
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-zinc-400 hover:bg-zinc-700 p-4 mx-2 text-white uppercase rounded font-sans"
          title="Remettre à zéro"
          onClick={reset}
        >
          Reset
        </motion.button>
      </div>
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="text-4xl text-center mt-7 mb-40 font-bold font-sans"
      >
        {sujet}
      </motion.p>
    </>
  );
}
