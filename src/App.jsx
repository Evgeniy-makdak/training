import "./App.css";

import Count from './Count';
import Select from './Select'
import CastomSelect from "./CastomSelect";

function App() {
  return (
    <>
      <Count />
      <Select paragraph={'text -это просто пропс'} />
      <CastomSelect />
    </>
  );
}

export default App;
