import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./store/store";
import MainPage from "./pages/main-page/Main-page";
import Level from "./pages/level-page/Level";

function App() {

  return (
      <Provider store = {store}>
          <PersistGate loading={null} persistor={persistor}>
              <Router>
                  <Routes>
                      <Route path="/" element={<MainPage/>} />
                      <Route path="/level" element={<Level/>} />
                  </Routes>
              </Router>
          </PersistGate>
      </Provider>
  );
}

export default App;
