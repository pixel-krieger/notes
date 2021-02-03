import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    var noteComponents = notes.map(note => (
        <Note
            key={note.key}
            title={note.title}
            content={note.content}
        />
    ));
    return (
        <div>
            <Header />
            <div role="main" id="main">
                <div className="notes-container">
                    {noteComponents}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;