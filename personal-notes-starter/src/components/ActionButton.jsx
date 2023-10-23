import React from "react";
import { counterByQuery, counterByStatus } from "../utils/counter";

function ActionButton({ isActivedNote, isArchivedNote, isOnAddNote, onCount }) {
    const counted = onCount();
    const maxWidthScreen = 428;
    let activedCount = "", archivedCount = "";
    if (counted.query != "") {
        activedCount = counterByQuery(counted.initialData, false, counted.query).length;
        archivedCount = counterByQuery(counted.initialData, true, counted.query).length;
    } else {
        activedCount = counterByStatus(counted.initialData, false).length;
        archivedCount = counterByStatus(counted.initialData, true).length;
    }
    return (
        <section className="action-button flex-justify-around">
            <button type="button" onClick={() => isOnAddNote()} className="button-secondary">+ {window.screen.width > maxWidthScreen ? "Tambah catatan" : ""}</button>
            <button type="button" onClick={() => isActivedNote()} className="button-primary"><span className={counted.isNoteArchived === false ? "active" : ""}>Catatan aktif</span><sup> {activedCount}</sup></button>
            <button type="button" onClick={() => isArchivedNote()} className="button-primary"><span className={counted.isNoteArchived === true ? "active" : ""}>Catatan arsip</span><sup> {archivedCount}</sup></button>
        </section>
    )
}

export default ActionButton;