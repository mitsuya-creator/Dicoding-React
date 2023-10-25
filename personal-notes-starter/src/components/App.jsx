import React from "react";
import Navbar from './Navbar';
import ActionButton from './ActionButton';
import CardList from './CardList';
import Footer from './Footer';
import { AddNote } from './AddNote';
import { getInitialData, showFormattedDate } from "../utils/index";
import { counterByQuery, counterByStatus } from "../utils/counter";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialData: getInitialData(),
            isNoteArchived: false,
            isAddNote: false,
            query: "",
            viewData: function () {
                if (this.query != "") {
                    return counterByQuery(this.initialData, this.isNoteArchived, this.query);
                }
                else {
                    return counterByStatus(this.initialData, this.isNoteArchived);
                }
            }
        }
        this.onChangeArchiveButton = this.onChangeArchiveButton.bind(this);
        this.onDeleteButton = this.onDeleteButton.bind(this);
        this.onNotesActiveButton = this.onNotesActiveButton.bind(this);
        this.onNotesArchivedButton = this.onNotesArchivedButton.bind(this);
        this.isOnAddNote = this.isOnAddNote.bind(this);
        this.onAddNote = this.onAddNote.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onCountedSearchQuery = this.onCountedSearchQuery.bind(this);
    }
    onSearch(e) {
        this.setState({ query: e.target.value })
    }
    onCountedSearchQuery() {
        return {
            query: this.state.query,
            initialData: this.state.initialData,
            isNoteArchived: this.state.isNoteArchived
        }
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
    isOnAddNote() {
        this.setState({ isAddNote: !this.state.isAddNote })
    }
    onAddNote({ title, body }) {
        this.setState(prev => {
            return {
                initialData: [
                    ...prev.initialData,
                    {
                        id: +new Date(),
                        createdAt: new Date().toISOString(),
                        archived: false,
                        title,
                        body
                    }
                ]
            }
        })
    }
    render() {
        console.log("test")
        return (
            <>
                <section className="sticky-top">
                    <Navbar onSearch={this.onSearch} />
                    <ActionButton isActivedNote={this.onNotesActiveButton} isArchivedNote={this.onNotesArchivedButton} isOnAddNote={this.isOnAddNote} onCount={this.onCountedSearchQuery} />
                </section>
                <section className="container-desktop">
                    <div className="parent-card">
                        {
                            this.state.viewData().length != 0 ? this.state.viewData().map(data => <CardList {...data} showDateFormatted={showFormattedDate} key={data.id} onChangeArchiveButton={this.onChangeArchiveButton} onDeleteButton={this.onDeleteButton} />) :
                                <div className="flex justify-center align-center no_notes">
                                    <span>Tidak ada Catatan disini</span>
                                </div>
                        }
                    </div>
                    {this.state.isAddNote ? <AddNote isOnAddNote={this.isOnAddNote} onAddNote={this.onAddNote} /> : null}
                    <Footer />
                </section>
            </>
        )
    }
}

export { App };

