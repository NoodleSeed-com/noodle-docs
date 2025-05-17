import {
  ArrowUpTrayIcon,
  DocumentIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { createClient } from "../utils/supabase";

const AIMediaAnalyzer = ({
  instructions,
  output_schema,
  file,
  onResult,
  onError,
  onLoadingChange,
  onFileChange,
  onFileUrlChange,
  buttonText = "Upload File",
}: {
  instructions: string;
  output_schema: string;
  file?: File;
  buttonText?: string;
  onResult: (result: any) => void;
  onError: (error: string) => void;
  onLoadingChange: (loading: boolean) => void;
  onFileChange?: (file: File) => void;
  onFileUrlChange?: (url: string) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Function to upload to Supabase
  const uploadToSupabase = async (file: File): Promise<string> => {
    const supabase = await createClient();

    // Generate a unique filename
    const fileExt = file.name.split(".").pop();
    const fileName =
      Math.random().toString(36).substring(2, 15) +
      "_" +
      Date.now() +
      "." +
      fileExt;

    // Upload file to the media-analyzer bucket
    const { data, error } = await supabase.storage
      .from("media-analyzer")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Error uploading to Supabase:", error);
      throw error;
    }

    // Get the public URL for the uploaded file
    const { data: urlData } = supabase.storage
      .from("media-analyzer")
      .getPublicUrl(fileName);

    return urlData.publicUrl;
  };

  useEffect(() => {
    const fileToAnalyze = uploadedFile || file;
    if (instructions && output_schema && fileToAnalyze) {
      uploadFileToAnalyze(fileToAnalyze);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instructions, output_schema, file, uploadedFile]);

  const uploadFileToAnalyze = async (fileToAnalyze: File) => {
    if (!instructions || !output_schema || !fileToAnalyze) {
      return;
    }

    try {
      // Use Supabase for uploads
      const link = await uploadToSupabase(fileToAnalyze);
      console.log(link);

      // Send the direct URL back to the parent component
      if (onFileUrlChange) onFileUrlChange(link);

      setIsLoading(true);
      if (onLoadingChange) onLoadingChange(true);

      const payLoad = {
        instructions,
        output_schema,
        file_url: link,
        file_type: fileToAnalyze.type,
      };

      const response = await fetch(
        "https://noodle-python-apis.vercel.app/analyze_content",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payLoad),
        }
      );

      if (!response.ok) {
        throw new Error("API error:" + response.status);
      }

      const data = await response.json();

      // Extract content between <Noodle_Response> tags, handling nested code blocks
      const responseText = data.response || "";
      const startTag = "<Noodle_Response>";
      const endTag = "</Noodle_Response>";
      const startPos = responseText.indexOf(startTag);
      const endPos = responseText.indexOf(endTag);

      if (startPos !== -1 && endPos !== -1) {
        // Extract just the content between tags
        const content = responseText
          .substring(startPos + startTag.length, endPos)
          .trim();
        try {
          const jsonResult = JSON.parse(content);
          if (onResult) onResult(jsonResult);
        } catch {
          if (onResult) onResult(content);
        }
      } else {
        const errorMsg =
          "The API response did not contain properly formatted results.";
        if (onError) onError(errorMsg);
      }
    } catch (err) {
      const errorMsg = "Error analyzing content:" + (err as Error).message;
      if (onError) onError(errorMsg);
    } finally {
      setIsLoading(false);
      if (onLoadingChange) onLoadingChange(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setUploadedFile(selectedFile);
      if (onFileChange) onFileChange(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setUploadedFile(e.dataTransfer.files[0]);
      if (onFileChange) onFileChange(e.dataTransfer.files[0]);
    }
  };

  const clearFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    // Also notify parent component that file was cleared
    if (onFileChange) onFileChange(null);
    if (onFileUrlChange) onFileUrlChange(null);
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) {
      return <PhotoIcon className="h-5 w-5" />;
    }
    return <DocumentIcon className="h-5 w-5" />;
  };

  return (
    <div className="w-full">
      {uploadedFile ? (
        <div className="mb-4 flex items-center justify-between rounded-md border p-3">
          <div className="flex items-center gap-2">
            {getFileIcon(uploadedFile)}
            <span className="max-w-[250px] truncate text-sm">
              {uploadedFile.name}
            </span>
          </div>
          <button
            className="bg-transparent p-2 text-sm disabled:opacity-50"
            onClick={clearFile}
            disabled={isLoading}
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div
          className="mb-4 rounded-md border-2 border-dashed p-6 text-center transition-colors hover:bg-gray-50"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <button
            className="inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            onClick={() => fileInputRef.current?.click()}
          >
            <ArrowUpTrayIcon className="mr-2 h-4 w-4" />
            {buttonText}
          </button>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*,.pdf,.doc,.docx,.txt"
        disabled={isLoading}
      />

      {isLoading && (
        <div className="py-2 text-center">
          <p className="text-sm text-gray-600">Analyzing content...</p>
        </div>
      )}
    </div>
  );
};

export default AIMediaAnalyzer;
