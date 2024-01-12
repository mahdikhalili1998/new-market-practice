import { Navigate, Route, Routes } from "react-router-dom";
import DataContext from "./context/DataContext";
import HomePAge from "./pages/HomePAge";
import PageNotFound from "./pages/404";

function App() {
  return (
    <>
      <DataContext>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<HomePAge />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </DataContext>
    </>
  );
}

export default App;
