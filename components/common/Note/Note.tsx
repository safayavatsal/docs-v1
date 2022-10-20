import React from "react";

import CalloutStyles from "./callout.module.css";
import NoteStyles from "./Note.module.css";

import { ReactComponent as Pin } from "../../../images/icons/pin.svg";

const Note = ({ children }) => {
  return (
    <section className={`${CalloutStyles.Container} ${NoteStyles.Note}`}>
      <span>
        <Pin className={NoteStyles.Icon} />
      </span>
      {children}
    </section>
  );
};

export default Note;
