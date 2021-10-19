import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import background from "./bg.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
