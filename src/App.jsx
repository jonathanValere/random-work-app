import "./App.css";
import Description from "./components/Description";

// Components ---
import RandomCom from "./components/RandomCom";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

function App() {
  return (
    <div className="">
      <Title name="Examen pratique Culture et Compétences Numériques" />
      <Description />
      <Subtitle
        name={`Cliquez sur le bouton "Choix du sujet" pour connaître le sujet qui vous sera attribué`}
      />
      <RandomCom />
    </div>
  );
}

export default App;
