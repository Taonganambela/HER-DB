import { useRef, useState } from "react";

// const fileTypes = ["JPG", "PNG", "GIF"];

function DragDropFileUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file || null);
  };

  const handleUpload = () => {
    if (fileInputRef.current?.files?.length) {
      const file = fileInputRef.current.files[0];
      // You can do something with the file here, like sending it to a server
      console.log('File submitted:', file.name);
    } else {
      console.error('No file selected');
    }
  
  };
  return (
    <div
    className="border border-dashed border-gray-400 p-4 rounded-md text-center"
    onDrop={handleDrop}
    onDragOver={handleDragOver}
  >
    <input
      type="file"
      className="hidden"
      onChange={handleFileInputChange}
      accept=".jpg,.jpeg,.png,.gif,.pdf"
    />
    <div className="mb-2">
      {selectedFile ? (
        <p>Selected file: {selectedFile.name}</p>
      ) : (
        <p>Drag & Drop or click to select a file</p>
      )}
    </div>
    <button
    
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleUpload} 
    >
      Upload
    </button>
  </div>
 

  )
}

export default DragDropFileUploader;

