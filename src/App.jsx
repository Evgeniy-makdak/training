import "./App.css";

import Count from './Count';
import Select from './Select'

function App() {
  return (
    <>
      <Count />
      <Select paragraph={'text -это просто пропс.'} />
    </>
  );
}

export default App;
