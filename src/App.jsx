import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "../src/pages/Home";
import Details from '../src/pages/Details';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;