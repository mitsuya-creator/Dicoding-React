import React from "react";

function AddNote({ isAddNote }) {
    return (
        <div>
            <section>
                <button type="button" onClick={() => isAddNote()}>X</button>
            </section>
            <section>
                <h1>Buat Catatan</h1>
                <form>
                    <label htmlFor="judul-catatan">
                        <input type="text" placeholder="Judul catatan" name="judul-catatan" />
                    </label>
                    <span>Sisa karakter: 50</span>
                    <label htmlFor="isi-catatan">
                        <input type="text" placeholder="Isi catatan" name="isi-catatan" />
                    </label>
                    <section>
                        <button type="submit">Tambahkan</button>
                    </section>
                </form>
            </section>
        </div>
    )
}

export default AddNote;