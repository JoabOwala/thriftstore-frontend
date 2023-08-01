import React from "react";
import { Link } from "react-router-dom";

function NavBar({ buyer, setBuyer }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setBuyer(null);
            }
        });
    }

    return (
        <>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                {buyer ? (
                    <button onClick={handleLogoutClick}>Logout</button>
                ) : (
                    <>
                        <Link to="/aboutus">AboutUs</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </div>
        </>
    );
}

export default NavBar;
