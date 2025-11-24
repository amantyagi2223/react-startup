// from where the app started

import { BrowserRouter, Route, Routes } from "react-router";

// we use routing here
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<>Hello Aman 1</>} />
        <Route path="/about" element={<>Hello about 2</>} />
        <Route path="/aastha" element={<>Hello aastha 3</>} />
        <Route path="/sonali" element={<>Hello sonali 4</>} />
        <Route path="/talib" element={<>Hello talib 5</>} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
