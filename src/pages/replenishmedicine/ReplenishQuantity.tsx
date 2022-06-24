import React, { useEffect, useState } from 'react';
import "./ReplenishQuantity.css";

function ReplenishQuantity() {
    let medicineQuantity = 0;
        let medicineDose = 0
    
        const [medicine, setMeds] = useState([
            {
                medID: 0,
                medName: "",
                medDose: 0,
                quantitiy: 0,
                userID: 0,
            },
        ]);
    
    
    
    function UpdateMedQuantity(e: any) {
        medicineQuantity = e.target.value;
        console.log(medicineQuantity);
    }
    
    function UpdateMedDose(e: any) {
        medicineDose = e.target.value;
        console.log(medicineDose);
    }
    
        // submit event handler
    function onSubmit(e: React.ChangeEvent<HTMLInputElement>) {
        // stop page from refreshing
        e.preventDefault();
    
    
        fetch(
            "http://medtrack-env.eba-sqq54brs.us-east-1.elasticbeanstalk.com/User/ReplenishQuantity",
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    
                    quantity: medicineQuantity,
                    dose: medicineDose, 
                    
                }),
            }
        );
    }   

  return (
    <>
        <div className="Maindiv">
            <div className="ReplenishQuantity">
                <div>Thank you for Chosing MedTrack as your refilling option.</div>
            </div>
            <div className="form-group col-md-4 ">
                    <label htmlFor="inputName">Medicine Name</label>
                    <div>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Medicine name" />
                    </div>
                </div>
        </div>
    </>
  )
}

export default ReplenishQuantity

