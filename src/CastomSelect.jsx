import { useState } from "react";

const CastomSelect = () => {
  const typeOfVehicles = [
    "",
    "Паровозе",
    "Автобусе",
    "Троллейбусе",
    "Трамвае",
  ];
  const [desideVehicle, setDesideVehicle] = useState("Метро");

  const handleChange = (event) => {
    setDesideVehicle(event.target.value);
  };

  return (
    <>
      <select
        value={desideVehicle}
        onChange={handleChange}
        style={{
          width: "200px",
          height: "50px",
        }}
      >
        {typeOfVehicles.map((type, index) => (
          <option key={index} value={type}>
            {type || ""}
          </option>
        ))}
      </select>
      <h3>Сегодня я поеду на: </h3>
      <h3>{desideVehicle || "Метро"}</h3>
    </>
  );
};

export default CastomSelect;
