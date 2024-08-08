import "./App.css";
import NavBar from "./NavBar";
import Meme from "./Meme";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Meme />
      </div>
    </div>
  );
}
