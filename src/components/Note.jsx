import React from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import Fab from "@mui/material/Fab";
import Zoom from "@material-ui/core/Zoom";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
        <Fab onClick={handleClick}>
          <DeleteForeverRoundedIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Note;
