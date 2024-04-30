import "./App.css";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Components ---
import RandomCom from "./components/RandomCom";
import Subtitle from "./components/Subtitle";

function App() {
  return (
    <div className="">
      <Header />
      <main className="w-5/6 m-auto">
        <Description />
        <RandomCom />
      </main>
      <Footer />
    </div>
  );
}

export default App;
