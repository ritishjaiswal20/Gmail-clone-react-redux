import { Checkbox, Icon, IconButton } from "@mui/material";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import {useDispatch } from "react-redux"
import { selectMail } from "./features/mailSlice";
function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch=useDispatch();
  const openMail=()=>{
     dispatch(
       selectMail({
         id,
         title,
         subject,
         description,
         time,
       })
     );
    history.push("/mail");
    };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}
          {""} <span className="emailRow-description">-{description}</span>
        </h4>
      </div>
      <div className="emailRow-time">{time}</div>
    </div>
  );
}

export default EmailRow;
