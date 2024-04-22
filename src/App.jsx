import "./App.css";

// Components ---
import RandomCom from "./components/RandomCom";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Title name="Examen pratique Culture et Compétences Numériques" />
      <Subtitle
        name={`Cliquez sur le bouton "Choix du sujet" pour connaître le sujet qui vous sera attribué`}
      />
      <RandomCom />
    </>
  );
}

export default App;
