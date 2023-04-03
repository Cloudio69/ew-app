import { Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components/UI";

// Pages
import { Home } from "./pages";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="app--wrapper">
        <Sidebar />
        <div className="app--container">
          <Header />
          <div className="app--route">
            <Routes>
              <Route path="/app" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
