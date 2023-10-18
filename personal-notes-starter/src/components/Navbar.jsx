import React from "react";
import SearchBox from "./SearchBox";

function Navbar() {
    return (
        <>
            <nav className="flex-justify-start nav">
                <h1>Notes</h1>
                <section>
                    <SearchBox />
                </section>
            </nav>
        </>
    )
}

export default Navbar;