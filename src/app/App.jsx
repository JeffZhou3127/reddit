import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import AppLayout from "./AppLayout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<AppLayout />} />
  </Route>
));

const App = () => <RouterProvider router={router} />;

export default App;
