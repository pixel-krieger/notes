import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
    return (
        <div>
            <Header />
            <div role="main" id="main">
                <Note
                    title="This is a note"
                    text="I'm a paragraph"
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;