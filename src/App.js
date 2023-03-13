import React from "react";
import RaccoonProfile from "./RaccoonProfile";

function App() {
    return (
        <>
        <h1>Raccoon Profiles</h1>
            <RaccoonProfile name='Rocket' faveFood='pizza' />
            <RaccoonProfile name='Bob' faveFood='salmon' />
            <RaccoonProfile name='Rocky' />
            <RaccoonProfile name='Red' faveFood='trash' />
        </>
    )
};

export default App;