import React, { useState } from 'react';
import SinglePagePDFViewer from "./pdf/single-page";
import AllPagesPDFViewer from "./pdf/all-pages";
import erp_pdf from "./pdf/erp.pdf";
import "./../styles.css";

export default function ERPPDF(props) {
    const { file_pdf } = props;
    return (
        <div className="App">
            <SinglePagePDFViewer pdf={erp_pdf} />
        {/* <h4>All Pages</h4>
        <div className="all-page-container">
            <AllPagesPDFViewer pdf={samplePDF} />
        </div> */}

        </div>
    );
}