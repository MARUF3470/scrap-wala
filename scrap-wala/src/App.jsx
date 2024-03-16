import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import router from "./router/Route";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
