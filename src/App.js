import MeusDados from "./01MeusDados";
import MeusDados02 from "./02MeusDados";
import Temp from "./03Temperatura";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <MeusDados></MeusDados>
      <MeusDados02 />
      <Temp />
    </div>
  );
}
