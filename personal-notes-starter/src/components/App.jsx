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
        }
        this.onChangeArchiveButton = this.onChangeArchiveButton.bind(this);
        this.onDeleteButton = this.onDeleteButton.bind(this);
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
        console.log(this.state.initialData);
    }
    onDeleteButton(id) {
        const updateData = this.state.initialData.filter(data => data.id !== id);
        this.setState({ initialData: updateData });
    }

    render() {
        return (
            <>
                <Navbar />
                <section className="container">
                    <ActionButton />
                    <div className="parent-card">
                        {
                            this.state.initialData.map(data => <CardList {...data} showDateFormatted={showFormattedDate} key={data.id} onChangeArchiveButton={this.onChangeArchiveButton} onDeleteButton={this.onDeleteButton} />)
                        }
                    </div>
                    <AddNote />
                </section>
                <Footer />
            </>
        )
    }
}

export { App };

