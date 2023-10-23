import React from "react";

function SearchBox(props) {
    return (
        <>
            <div className="search-container flex-justify-start">
                <input type="search" placeholder="Cari catatan..." onChange={e => props.onSearch(e)} />
            </div>
        </>
    )
}

export default SearchBox;