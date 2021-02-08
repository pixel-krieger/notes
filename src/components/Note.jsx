import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

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
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;