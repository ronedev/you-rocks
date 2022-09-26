import React, { useEffect, useState } from "react";
import JsonFormatter from "react-json-formatter";
import { apiCall } from "../../services/product";
import copyIcon from "./../../images/icons/copying.png";

const ApiInput = () => {
  const [inputValue, setInputValue] = useState("product/get");
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState("");

  const URL = "https://you-rocks-backend.vercel.app/";

  const copyUrlToClipboard = () =>
    navigator.clipboard.writeText(URL + inputValue);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await apiCall(URL + inputValue);
    if (response.status === 200) {
      setData(response.data);
    } else {
      setAlert(response.message);
      setTimeout(() => setAlert(null), 5000);
    }
  };

  const handleLinks = async (e) => {
    setInputValue(e.target.innerText)
    const response = await apiCall(URL + e.target.innerText);
    if (response.status === 200) {
      setData(response.data);
    } else {
      setAlert(response.message);
      setTimeout(() => setAlert(null), 5000);
    }
  };

  useEffect(() => {
    async function loadData() {
      try {
        const response = await apiCall(URL + inputValue);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);

  const jsonStyle = {
    propertyStyle: { color: "#C2FF0A", fontSize: "1.7rem" },
    stringStyle: { color: "white", fontSize: "1.5rem" },
    numberStyle: { color: "#dcff71", fontSize: "1.5rem" },
    bracketStyle: { color: "#696969", fontSize: "2rem" },
    braceStyle: { fontSize: "1.8rem" },
    booleanStyle: { color: "white", fontSize: "1.5rem" },
  };

  return (
    <section className="api-input">
      <h3>¡Intentalo!</h3>
      <form className="api-form" onClick={handleSubmit}>
        <label>https://you-rocks-backend.vercel.app/</label>
        <input type="text" onChange={handleInputChange} value={inputValue} />
        <div className="btn-flex">
          <button className="btn" onClick={copyUrlToClipboard}>
            <img src={copyIcon} alt="Copiar URL" id="copy" />
          </button>
          <button className="btn btn-background">Enviar</button>
        </div>
      </form>
      <p>
        Intenta con <span onClick={handleLinks}>product/get-offered</span> para
        obtener los productos ofertados, o{" "}
        <span onClick={handleLinks}>product/get-male</span> para los productos
        masculinos, o{" "}
        <span onClick={handleLinks}>product/search/?q=remera</span> para obtener
        una busqueda en especifico
      </p>
      {alert && <p>{alert}</p>}
      <section className="response">
        <div className="jsonContainer">
          <JsonFormatter
            json={JSON.stringify(data)}
            tabWith={4}
            jsonStyle={jsonStyle}
          />
        </div>
      </section>
    </section>
  );
};

export default ApiInput;
