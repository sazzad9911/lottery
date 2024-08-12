import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

interface PDFViewerProps {
  fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoad = (e: any) => {
    const pdf: pdfjs.PDFDocumentProxy = e.doc;
    setNumPages(pdf.numPages);
  };
  //   return (
  //     <Viewer
  //       fileUrl={fileUrl}
  //       plugins={[defaultLayoutPluginInstance]}
  //       onDocumentLoad={onDocumentLoad}
  //     />
  //   );

  return (
    <div className="w-full h-full">
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
      >
        <Viewer
          fileUrl={fileUrl}
          plugins={[defaultLayoutPluginInstance]}
          onDocumentLoad={onDocumentLoad}
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;
