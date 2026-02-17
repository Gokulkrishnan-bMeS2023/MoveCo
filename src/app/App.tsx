import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { UrlPages } from "./UrlPages";
import NotFound from "../pages/NotFound";
import AppLoader from "../animations/AppLoader";

const App = () => {
  return (
    <>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          {UrlPages.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
