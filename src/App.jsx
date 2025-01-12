import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Details from "./pages/Details";

const queryClient = new QueryClient();
const App = () => {
  return (
    <div>
      <React.StrictMode>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
};

export default App;
