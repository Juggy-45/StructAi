import React, { useState } from "react";
import TakeoffTable from "./TakeoffTable";
import FileUploader from "./FileUploader";

const BlueprintUploader = () => {
  const [takeoff, setTakeoff] = useState([]); // Lift state here

  return (
    <div className="p-6 mb-[200px] w-[80%] m-auto">
        {/* Pass setTakeoff to FileUploader */}
        <FileUploader setTakeoff={setTakeoff} />
      <div className="p-4 bg-gray-100 border rounded-lg">
        <h3 className="text-xl font-semibold">AI Takeoff Results:</h3>
        {/* Takeoff Table Component */}
        <TakeoffTable takeoff={takeoff} />
      </div>
    </div>
  );
};

export default BlueprintUploader;
