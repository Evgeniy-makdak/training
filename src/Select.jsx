import { useState } from "react";

const Select = ({ paragraph }) => {
  const titles = ["React", "Angular", "Vue"];
  const [selectedTitle, setSelectedTitle] = useState("React");

  const handleSelectChange = (event) => {
    setSelectedTitle(event.target.value); // обновляем состояние при изменении выбора
  };

  return (
    <>
      <select
        value={selectedTitle} // контролируемое значение
        onChange={handleSelectChange} // обработчик изменений
        style={{
          width: "300px",
          height: "40px",
          fontSize: "20px",
          padding: "8px",
          border: "2px solid #ccc",
          borderRadius: "4px",
        }}
      >
        {titles.map((title, index) => (
          <option key={index} value={title}>
            {title}
          </option>
        ))}
      </select>
      <h2>{paragraph}</h2>
      <h2>{selectedTitle}</h2>
    </>
  );
};

export default Select;
