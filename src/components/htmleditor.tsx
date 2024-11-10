import React, { useState } from "react";
import Editor from "@monaco-editor/react";

interface HTMLEditorProps {
  onCodeChange: (value: string) => void;
}

export default function HTMLEditor({ onCodeChange }: HTMLEditorProps) {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ESP32 Web Server</title>
</head>
<body>
    <h1>Welcome to ESP32 Web Server</h1>
</body>
</html>
`);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setHtmlCode(value);
      onCodeChange(value); // Pass the updated code back to the parent
    }
  };

  return (
    <Editor
      height="60vh"
      defaultLanguage="html"
      value={htmlCode}
      onChange={handleEditorChange}
    />
  );
}
