import React from "react";
import UploadButton from "./UploadButton";
import MonthTile from "./_components/MonthTile";

const Upload = () => {
  return (
    <div className="m-3 flex space-x-4">
      <UploadButton />
      <MonthTile />
    </div>
  );
};

export default Upload;
