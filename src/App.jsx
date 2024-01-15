import { Navigate, Route, Routes } from "react-router-dom";
import DataContext from "./context/DataContext";
import InfoCardContext from "./context/CardContext";
import HomePAge from "./pages/HomePAge";
import PageNotFound from "./pages/404";
import Layout from "./layout/Layout";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <InfoCardContext>
        <DataContext>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/homepage" replace />} />
              <Route path="/homepage" element={<HomePAge />} />
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/detail-page:id" element={<DetailPage />} />
            </Routes>
          </Layout>
        </DataContext>
      </InfoCardContext>
    </>
  );
}

export default App;
