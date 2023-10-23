import React from "react";
import SearchBox from "./SearchBox";

function Navbar(props) {
    return (
        <>
            <nav className="flex-justify-start nav">
                <h1 className="text-color-white">Notes</h1>
                <section>
                    <SearchBox onSearch={props.onSearch} />
                </section>
            </nav>
        </>
    )
}

export default Navbar;