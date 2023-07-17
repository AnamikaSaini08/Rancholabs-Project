import { Provider } from "react-redux";
import store from "./utils/store";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="overflow-y-hidden h-screen w-screen absolute">
          <Home />
        </div>
      </Provider>
    </>
  );
}

export default App;
