import React from "react";
import RaccoonProfile from "./RaccoonProfile";
import { raccoons } from './raccoons.js';

function App() {
    const mappedRaccoons = raccoons.map(raccoonObj => {
        return (
            <RaccoonProfile
                key={ raccoonObj.id }
                name={raccoonObj.name}
                faveFood={raccoonObj.favFood} />
        )
    })
    return (
        <>
            <h1>Raccoon Profiles</h1>

            {mappedRaccoons}
        </>
    )
};

export default App;