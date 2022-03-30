import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./EmailList.css";
import InboxIcon from "@mui/icons-material/Inbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";
function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList-setting">
        <div className="emailList-setting-left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList-setting-left">
          <Checkbox />
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList-sections">
        <Section Icon={InboxIcon} title="primary" color="red" selected />
        <Section Icon={PeopleIcon} title="social" color="blue" />
        <Section Icon={LocalOfferIcon} title="promations" color="green" />
      </div>
      <div className="emailList-list">
        <EmailRow
          title="twitch"
          subject="hey follow stream"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey follow stream"
          description="this is a test and a best guy and a bad boy and he is doing a great job"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
