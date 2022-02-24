import React, { useState } from 'react';
import SinglePagePDFViewer from "./pdf/single-page";
import AllPagesPDFViewer from "./pdf/all-pages";
import clientele from "./pdf/clientele.pdf";
import "./../styles.css";

export default function ClientelePDF(props) {
    const { file_pdf } = props;
    return (
        <div className="App">
            <SinglePagePDFViewer pdf={clientele} />
        {/* <h4>All Pages</h4>
        <div className="all-page-container">
            <AllPagesPDFViewer pdf={samplePDF} />
        </div> */}

        </div>
    );
}