
import './app.css';
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from './components/RightPanel/RighPanel';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <LeftPanel />
        <RightPanel />
      </div>
    </BrowserRouter>
  );
}

export default App;
