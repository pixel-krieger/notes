import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(objNote) {
        objNote.uid = notes.length;
        setNotes(prevNotes => {
            return [...prevNotes, objNote];
        })
    }

    function deleteNote(noteId) {
        setNotes(prevNotes => {
            return prevNotes.filter(note => {
                return note.uid !== noteId;
            })
        });
    }

    return (
        <div>
            <Header />
            <div role="main" id="main">
                <InputArea onSubmit={addNote} />
                <div className="notes-container">
                    {
                        notes.map((note, index) => (
                            <Note
                                key={index}
                                uid={note.uid}
                                title={note.title}
                                content={note.content}
                                delete={deleteNote}
                            />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;