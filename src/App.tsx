import { Provider } from "react-redux";

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
