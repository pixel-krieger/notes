import React, { useState } from "react";

function InputArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function updateTitle(evt) {
        setTitle(evt.target.value);
    }

    function updateContent(evt) {
        setContent(evt.target.value);
    }

    function handleSubmit(evt) {
        const objNote = {
            title: title,
            content: content
        }
        props.onSubmit(objNote);
        evt.preventDefault();
    }

    return (
        <div className="card create-note">
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={updateTitle}
                />
                <textarea
                    name="content"
                    placeholder="This is a note."
                    rows="3"
                    value={content}
                    onChange={updateContent}
                />
                <button
                    onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}

export default InputArea;