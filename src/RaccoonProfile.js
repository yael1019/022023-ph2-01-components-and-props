import React from "react";

function RaccoonProfile({ name, faveFood = 'pizza'}) {
    // console.log(props.faveFood);
    // const name = props.name;
    // const faveFood = props.faveFood;

    // const { name, faveFood } = props;

    return (
        <div>
            <h2>Name: { name }</h2>
            <p>Favorite Food: { faveFood }</p>
        </div>
    )
}

export default RaccoonProfile;

