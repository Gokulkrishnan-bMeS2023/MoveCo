import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { UrlPages } from "./UrlPages";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {UrlPages.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
