import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { UrlPages } from "./UrlPages";
import NotFound from "../pages/NotFound";
import AppLoader from "../animations/AppLoader";
import { Toaster } from "../components/ui/toaster";
import ProtectedRoute from "./ProtectedRoute";

const App = () => (
  <>
    <Toaster />
    <Suspense fallback={<AppLoader />}>
      <Routes>
        {UrlPages.map(
          ({ path, component: Component, protected: isProtected }) => (
            <Route
              key={path}
              path={path}
              element={
                isProtected ? (
                  <ProtectedRoute>
                    <Component />
                  </ProtectedRoute>
                ) : (
                  <Component />
                )
              }
            />
          ),
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
