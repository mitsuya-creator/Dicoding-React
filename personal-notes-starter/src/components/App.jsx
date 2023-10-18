import React from "react";
import Navbar from './Navbar';
import ActionButton from './ActionButton';
import CardList from './CardList';
import Footer from './Footer';
import AddNote from './AddNote';

export default function App() {
    return (
        <>
            <Navbar />
            <ActionButton />
            <CardList />
            <AddNote />
            <Footer />
        </>
    )
}