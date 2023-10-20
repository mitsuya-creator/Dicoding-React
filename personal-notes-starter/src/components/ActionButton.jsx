import React from "react";

function ActionButton({ isActivedNote, isArchivedNote, isAddNote }) {
    return (
        <section className="flex-justify-start">
            <button type="button" onClick={() => isAddNote()}>+ Tambah Catatan</button>
            <button type="button" onClick={() => isActivedNote()}>Catatan aktif</button>
            <button type="button" onClick={() => isArchivedNote()}>Catatan arsip</button>
        </section>
    )
}

export default ActionButton;