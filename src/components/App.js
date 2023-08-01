import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
    const [buyer, setBuyer] = useState(null);

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((buyer) => setBuyer(buyer));
            }
        });
    }, []);

    return (
        <>
            <NavBar buyer={buyer} setBuyer={setBuyer} />
            <main>
                {buyer ? (
                    <Switch>
                        <Route path="/">
                            {/* <HomePage buyer={buyer} />
                            <ProductList buyer={buyer} /> */}
                        </Route>
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/signup">
                            {/* <SignUp setBuyer={setBuyer} /> */}
                        </Route>
                        <Route path="/login">
                            {/* <Login setBuyer={setBuyer} /> */}
                        </Route>
                        <Route path="/">
                            {/* <HomePage /> */}
                        </Route>
                    </Switch>
                )}
            </main>
        </>
    );
}

export default App;