import React, { useState } from "react";
import { DeleteIcon } from "./DeleteIcon";

const ImageUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);

      // Read and set the preview URL for the selected image
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    // Reset selected image and preview URL
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  return (
    <div className="relative border-2 border-slate-400 rounded-xl p-2 flex flex-col gap-2 w-fit">
      <label htmlFor="image-upload" className="cursor-pointer">
        <img className='w-6 h-6 object-contain rounded-xl' src="/images/icons/image-01-svgrepo-com.svg" alt="bin" />
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="image-upload"
      />
      {previewUrl && (
        <div className="relative rounded-xl">
          <img className="rounded-xl overflow-hidden w-full h-full object-contain border-2 border-slate-300" src={previewUrl} alt="Preview" style={{ maxWidth: "100%", maxHeight: "200px" }} />
          <button
            className="absolute top-0 right-0 m-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 w-6 h-6"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
