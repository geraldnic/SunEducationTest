import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box pb={"90px"}>
          <Navbar />
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route
            path="/profile/:email"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
