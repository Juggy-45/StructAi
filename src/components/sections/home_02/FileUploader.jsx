import { useState } from "react";
import { BeatLoader } from "react-spinners"; // Importing the loader

const FileUploader = ({ setTakeoff }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      if (uploadedFile.type.startsWith("image/")) {
        setPreviewUrl(URL.createObjectURL(uploadedFile));
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    setIsLoading(true); // Start the loader

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok && data.response) {
        let cleanedResponse = data.response;

        // Check if it's a string with markdown JSON formatting
        if (typeof cleanedResponse === "string") {
          cleanedResponse = cleanedResponse.replace(/^```json\n|\n```$/g, ""); // Remove markdown syntax
          try {
            cleanedResponse = JSON.parse(cleanedResponse); // Convert to JS object
          } catch (error) {
            console.error("Failed to parse JSON:", error);
            alert("Invalid JSON response from the server.");
            return;
          }
        }

        // Ensure response has 'takeoff' array
        const parsedTakeoff = cleanedResponse.takeoff || [];
        if (!Array.isArray(parsedTakeoff)) {
          console.error("Unexpected response format:", cleanedResponse);
          alert("Unexpected response format from the server.");
          return;
        }

        setTakeoff(parsedTakeoff); // Update state
        console.log("Takeoff Data Parsed:", parsedTakeoff);
      } else {
        alert(`File upload failed: ${data.error || "Unexpected response format"}`);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    } finally {
      setIsLoading(false); // End the loader once the request is finished
    }
  };

  return (
    <div className="p-8 bg-white" id="takeoff">
      <div className="mb-6">
        <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
          Upload an Image file
        </h2>
      </div>
      <div className="w-[70%]">
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,.gif,.webp"
          onChange={handleFileChange}
          className="mt-[20px] mb-4 w-full p-2 border rounded-lg"
        />
      </div>
      {previewUrl && (
        <div className="mb-4">
          <p className="text-sm text-gray-500">Preview:</p>
          <img src={previewUrl} alt="Uploaded Preview" className="mt-2 w-[40rem] rounded-lg shadow" />
        </div>
      )}
      {file && file.type === "application/pdf" && (
        <p className="text-sm text-gray-600">{file.name}</p>
      )}
      
      {/* Loader while uploading */}
      {isLoading ? (
        <div className="flex justify-center items-center mt-4">
          <BeatLoader size={15} color={"#3498db"} loading={isLoading} />
        </div>
      ) : (
        <button
          onClick={handleUpload}
          className="mt-[20px] text-white inline-flex h-[50px] items-center gap-x-[10px] rounded-[50px] bg-colorViolet px-6 transition-all duration-300 hover:bg-colorOrangyRed"
        >
          Upload & Send
        </button>
      )}
    </div>
  );
};

export default FileUploader;
