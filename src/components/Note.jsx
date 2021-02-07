import React from "react";

function Note(props) {
    return (
        <div className="card note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button
                className="delete"
                onClick={() => {
                    props.delete(props.uid);
                }}>
                Delete
            </button>
        </div>
    );
}

export default Note;