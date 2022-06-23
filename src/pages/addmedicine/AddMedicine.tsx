import React, { useEffect, useState } from "react";
import "./AddMedicine.css";

function AddMedicine() {
  let medName = "";
  let medDose = 0;

  let quantity = 0;

  const [meds, setMeds] = useState([
    {
      userId: 0,
      medicine: "",
      medicineDose: 0,
      medicineQuantity: 0,
      email: "",
      password: "",
    },
  ]);

  function UpdateMedName(e: React.ChangeEvent<HTMLInputElement>) {
    medName = e.target.value;
    console.log(medName);
  }

  function UpdateMedDose(e: React.ChangeEvent<HTMLInputElement>) {
    medDose = +e.target.value;
    console.log(medDose);
  }

  function UpdateMedQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    quantity = +e.target.value;
    console.log(quantity);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    fetch(
      "http://medtrack-env.eba-sqq54brs.us-east-1.elasticbeanstalk.com/User/AddMedicine",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          medicne: medName,
          medicineDose: medDose,
          medicineQuantity: quantity,
        }),
      }
    );
  }

  return (
    <>
      {/* <div className="view-container"> */}
      <div></div>
      <br />
      <div className="add-form">
        <form onSubmit={onSubmit}>
          <h2 className="addmed-welcom">
            {" "}
            Please enter your medication informations
          </h2>
          <h2>
            It's important to type in the exact information here to avoid adverse
            side effects
          </h2>
          <div className="inner-form">
            <div className="form-group">
              <label htmlFor="name">name of medicine: </label>
              <input
                className="form-control form-control-md"
                type="text"
                name="medName"
                onChange={UpdateMedName}
              />
            </div>
            <div className="fom-group">
              <label htmlFor="name">Drug dosage: </label>
              <input
                className="form-control form-control-md"
                type="text"
                name="medDose"
                onChange={UpdateMedDose}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name"> Amount of drugs: </label>
              <input
                className="form-control form-control-sm"
                type="text"
                name="quantity"
                onChange={UpdateMedQuantity}
              />
            </div>
            <input type={"submit"} value={"Add"} className="submit-style" />
          </div>
        </form>
      </div>
      {/* </div> */}
    </>
  );
}

export default AddMedicine;
