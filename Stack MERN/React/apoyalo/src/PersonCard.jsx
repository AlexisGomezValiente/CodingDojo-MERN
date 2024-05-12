import React from "react";
import { useState } from "react";

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);

    const aumentar = () => {
        setAge(age + 1);
    }

    return(
        <div>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={aumentar}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;