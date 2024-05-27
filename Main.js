import { useState, useRef, useEffect } from "react";

const Main = () => {
  const [Name, setName] = useState([]);
  const renderCount = useRef(0);

  const handelFirstName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        name="FirstName"
        id="FirstName"
        onChange={handelFirstName}
      />
      <h2>{Name}</h2>
      <h3>{renderCount.current}</h3>
    </div>
  );
};

export default Main;
