import AppRoutes from "./routes/AppRoutes";
// import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div>
          {/* <Home /> */}
          <AppRoutes />
        </div>
    </BrowserRouter>
  );
}

export default App;