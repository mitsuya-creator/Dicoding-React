import React from "react";
import { counterByQuery, counterByStatus } from "../utils/counter";

function ActionButton({ isActivedNote, isArchivedNote, isOnAddNote, onCount }) {
    const counted = onCount();
    let actived = "", archived = "";
    if (counted.query != "") {
        actived = counterByQuery(counted.initialData, false, counted.query).length;
        archived = counterByQuery(counted.initialData, true, counted.query).length;
    } else {
        actived = counterByStatus(counted.initialData, false).length;
        archived = counterByStatus(counted.initialData, true).length;
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