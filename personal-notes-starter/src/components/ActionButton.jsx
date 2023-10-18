import React from "react";

function ActionButton() {
    return (
        <section className="flex-justify-start">
            <button type="button">+ Tambah Catatan</button>
            <button type="button">Catatan aktif</button>
            <button type="button">Catatan arsip</button>
        </section>
    )
}

export default ActionButton;