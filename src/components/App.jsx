import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import noteData from "../notes"

function App() {
    return ( 
        <div>
        <Header /> 
        {noteData.map(entry => (<Note key = {entry.key} title = {entry.title} content = {entry.content} />) )} 
        <Footer />
        </div>
    );
}

export default App;