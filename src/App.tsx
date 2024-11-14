import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes/index";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <MyRoutes />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
