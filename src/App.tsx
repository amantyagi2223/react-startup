// from where the app started

import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreateBlogPage from "./pages/CreateBlogPage";

// we use routing here
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<HomePage />} />
        <Route path="/create" element={<CreateBlogPage />} />

        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
