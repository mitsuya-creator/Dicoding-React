import React from "react";

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onChange(e) {
        this.setState(() => {
            if (e.target.name === "judul-catatan") {
                return {
                    title: e.target.value
                }
            } else {
                return {
                    body: e.target.value
                }
            }
        })
    }
    onSubmitHandler(e) {
        e.preventDefault();
        this.props.onAddNote(this.state);
        this.setState({
            title: "",
            body: ""
        })
    }
    render() {
        return (
            <div className="addnote">
                <section className="close-addnote">
                    <button type="button" onClick={() => this.props.isOnAddNote()} className="button-primary">X</button>
                </section>
                <section className="form">
                    <h1>Buat Catatan</h1>
                    <form onSubmit={e => this.onSubmitHandler(e)}>
                        <label htmlFor="judul-catatan">
                            <input type="text" placeholder="Judul catatan" name="judul-catatan" onChange={e => this.onChange(e)} maxLength={50} value={this.state.title} />
                        </label>
                        <p>Sisa karakter: {50 - this.state.title.length}</p>
                        <label htmlFor="isi-catatan">
                            <textarea type="text" placeholder="Isi catatan" name="isi-catatan" onChange={e => this.onChange(e)} value={this.state.body} />
                        </label>
                        <section>
                            <button type="submit" className="button-submit">Tambahkan</button>
                        </section>
                    </form>
                </section>
            </div>
        )
    }
}

export { AddNote };