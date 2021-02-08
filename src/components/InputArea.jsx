import React, { useState } from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function InputArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [wasClicked, setWasClicked] = useState(false);

    function updateTitle(evt) {
        setTitle(evt.target.value);
    }

    function updateContent(evt) {
        setContent(evt.target.value);
    }

    function handleClick(params) {
        setWasClicked(true);
    }

    function handleSubmit(evt) {
        const objNote = {
            title: title,
            content: content
        }

        props.onSubmit(objNote);
        setTitle("");
        setContent("");
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
                    hidden={!wasClicked}
                />
                <textarea
                    name="content"
                    placeholder="This is a note."
                    rows={wasClicked ? "3" : "1"}
                    onClick={handleClick}
                    value={content}
                    onChange={updateContent}
                />
                <Zoom in={wasClicked}>
                <Fab type="submit" onClick={handleSubmit}>
                    <AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default InputArea;