import React from "react";
import Navbar from './Navbar';
import ActionButton from './ActionButton';
import CardList from './CardList';
import Footer from './Footer';
import AddNote from './AddNote';
import { getInitialData, showFormattedDate } from "../utils";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialData: getInitialData(),
            isNoteArchived: false,
            isAddNote: false,
            viewData: function () {
                return this.initialData.filter(data => data.archived === this.isNoteArchived)
            }
        }
        this.onChangeArchiveButton = this.onChangeArchiveButton.bind(this);
        this.onDeleteButton = this.onDeleteButton.bind(this);
        this.onNotesActiveButton = this.onNotesActiveButton.bind(this);
        this.onNotesArchivedButton = this.onNotesArchivedButton.bind(this);
        this.onAddNote = this.onAddNote.bind(this)
    }
    onChangeArchiveButton(id) {
        const updateData = this.state.initialData.map(data => {
            if (data.id == id) {
                return { ...data, archived: !data.archived };
            } else {
                return data;
            }
        })
        this.setState({ initialData: updateData })
    }
    onDeleteButton(id) {
        const updateData = this.state.initialData.filter(data => data.id !== id);
        this.setState({ initialData: updateData });
    }
    onNotesActiveButton() {
        this.setState({ isNoteArchived: false });
    }
    onNotesArchivedButton() {
        this.setState({ isNoteArchived: true });
    }
    onAddNote() {
        this.setState({ isAddNote: !this.state.isAddNote })
    }
    render() {
        return (
            <>
                <Navbar />
                <section className="container">
                    <ActionButton isActivedNote={this.onNotesActiveButton} isArchivedNote={this.onNotesArchivedButton} isAddNote={this.onAddNote} />
                    <div className="parent-card">
                        {
                            this.state.viewData().length != 0 ? this.state.viewData().map(data => <CardList {...data} showDateFormatted={showFormattedDate} key={data.id} onChangeArchiveButton={this.onChangeArchiveButton} onDeleteButton={this.onDeleteButton} />) : <span>Tidak ada Catatan disini</span>
                        }
                    </div>
                    {this.state.isAddNote ? <AddNote isAddNote={this.onAddNote} /> : null}
                </section>
                <Footer />
            </>
        )
    }
}

export { App };

