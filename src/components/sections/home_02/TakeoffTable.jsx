import { useState } from "react";
import { BeatLoader } from "react-spinners";  // Importing the loader

const TakeoffTable = ({ takeoff, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-8">
        {/* Displaying the loader while fetching data */}
        <BeatLoader size={15} color={"#3498db"} loading={isLoading} />
      </div>
    );
  }

  if (!takeoff || takeoff.length === 0) {
    return <p className="text-center text-gray-500 mt-4">Upload an image for takeoff data.</p>;
  }

  return (
    <div className="mt-8">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Item Description</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Length</th>
            <th className="border p-2">Width</th>
            <th className="border p-2">Height</th>
            <th className="border p-2">Total Qty</th>
          </tr>
        </thead>
        <tbody>
          {takeoff.map((row, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{row.Description || "N/A"}</td>
              <td className="border p-2 text-center">{row.Quantity || "N/A"}</td>
              <td className="border p-2 text-center">{row.Length || "N/A"}</td>
              <td className="border p-2 text-center">{row.Width || "N/A"}</td>
              <td className="border p-2 text-center">{row.Height || "N/A"}</td>
              <td className="border p-2 text-center">{row.Volume || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TakeoffTable;
