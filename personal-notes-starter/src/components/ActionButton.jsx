import React from "react";

function ActionButton({ isActivedNote, isArchivedNote, isOnAddNote, onCount }) {
    const counted = onCount();
    let actived = "", archived = "";
    if (counted.query != "") {
        actived = counted.initialData.filter(data => data.archived === false).filter(data => data.title.toLowerCase().includes(counted.query.toLocaleLowerCase())).length;
        archived = counted.initialData.filter(data => data.archived === true).filter(data => data.title.toLowerCase().includes(counted.query.toLocaleLowerCase())).length;
    }
    return (
        <section className="flex-justify-start">
            <button type="button" onClick={() => isOnAddNote()}>+ Tambah Catatan</button>
            <button type="button" onClick={() => isActivedNote()}>Catatan aktif {actived}</button>
            <button type="button" onClick={() => isArchivedNote()}>Catatan arsip {archived}</button>
        </section>
    )
}

export default ActionButton;