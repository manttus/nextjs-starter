"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [["bold", "image", "code"]],
};

const formats = ["bold", "code", "image"];

function Quill(props: { value: string; handler: (value: string) => void }) {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    [],
  );

  return (
    <div className="h-20">
      <ReactQuill
        value={props.value}
        onChange={(data) => props.handler(data)}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}

export default Quill;
