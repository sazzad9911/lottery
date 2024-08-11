declare module 'pdfjs-dist/build/pdf' {
    export type PDFDocumentProxy = {
        numPages: number;
        getPage: (pageNumber: number) => Promise<any>;
        // Add more methods from the actual PDFDocumentProxy interface as needed
    };

    export type PDFPageProxy = {
        // Define the properties and methods you need
    };

    export const getDocument: (src: string | Uint8Array | any) => any;
}

declare module 'pdfjs-dist/build/pdf.worker.entry';
