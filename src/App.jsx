import { Navigate, Route, Routes } from "react-router-dom";
import DataContext from "./context/DataContext";
import HomePAge from "./pages/HomePAge";
import PageNotFound from "./pages/404";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <DataContext>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace />} />
            <Route path="/homepage" element={<HomePAge />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </DataContext>
    </>
  );
}

export default App;
