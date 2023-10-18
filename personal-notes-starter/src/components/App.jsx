import React from "react";
import Navbar from './Navbar';
import ActionButton from './ActionButton';
import CardList from './CardList';
import Footer from './Footer';
import AddNote from './AddNote';
import { getInitialData, showFormattedDate } from "../utils";

export default function App() {
    const initialData = getInitialData();
    return (
        <>
            <Navbar />
            <ActionButton />
            <div className="parent-card">
                {
                    initialData.map(data => <CardList title={data.title} body={data.body} createdAt={data.createdAt} archive={data.archived} showDateFormatted={showFormattedDate} key={data.id} />)
                }
            </div>
            <AddNote />
            <Footer />
        </>
    )
}

