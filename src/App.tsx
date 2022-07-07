import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
    </Provider>
  );
}

export default App;
