import React from "react";

interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaComponent: React.FC<TextareaProps> = ({ value, onChange }) => {
  return (
    <div className="w-full mx-5 p-4">
      <div className="text-gray-100 mb-2">What is on your mind...</div>
      <textarea
        className="w-[95%] mx-auto p-3 whitespace-pre-line outline-none min-h-[100px] rounded-xl"
        placeholder="I hope to be..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextareaComponent;
