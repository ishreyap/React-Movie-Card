import React, { useState } from "react";

export default function RecipetBook() {
  const [recipetTitle, setRecipetTitle] = useState("");
  const [Ingredients, setIngredients] = useState("");
  const [Instructions, setInstructions] = useState("");
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    storeDataToObject();
    alert("Recipet Submitted Successful!!!");
    setShow(false);
    setRecipetTitle("");
    setIngredients("");
    setInstructions("");
  };

  const storeDataToObject = () => {
    const recipetData = { recipetTitle, Ingredients, Instructions };
    const existingData = JSON.parse(localStorage.getItem("Form Data")) || [];
    const updatedData = [...existingData, recipetData];
    localStorage.setItem("Form Data", JSON.stringify(updatedData, null, 2));
    setData(updatedData);
  };

  const display = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const deleteData = (e) => {
    e.preventDefault();
    const updatedData = data.filter(
      (item) => item.recipetTitle !== recipetTitle
    );
    localStorage.setItem("Form Data", JSON.stringify(updatedData, null, 2));
    setData(updatedData);
    setShow(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Recipet Titls: </label>
        <input
          type="text"
          placeholder="Recipet Titles"
          value={recipetTitle}
          onChange={(e) => setRecipetTitle(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <br />
        <br />
        <label>Ingredients: </label>
        <input
          type="text"
          placeholder="Enter your Ingredients"
          value={Ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.Ingredients && (
          <p style={{ color: "red" }}>{errors.Ingredients}</p>
        )}
        <br />
        <br />
        <label>Instructions: </label>
        <input
          type="text"
          placeholder="Enter Your Instructions"
          value={Instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        {errors.Instructions && (
          <p style={{ color: "red" }}>{errors.Instructions}</p>
        )}
        <br />
        <br />
        <button type="submit" style={{ backgroundColor: "green" }}>
          Submit
        </button>{" "}
        <button onClick={display} style={{ backgroundColor: "red" }}>
          Show Data
        </button>
        <button onClick={deleteData} style={{ backgroundColor: "red" }}>
          Delete Data
        </button>
        {data && show && <pre>{localStorage.getItem("Form Data")}</pre>}
      </form>
    </div>
  );
}
