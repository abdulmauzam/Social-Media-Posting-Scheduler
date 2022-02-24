import React, { useState } from 'react';
import SinglePagePDFViewer from "./pdf/single-page";
import AllPagesPDFViewer from "./pdf/all-pages";
import achievements from "./pdf/achievements.pdf";
import "./../styles.css";

export default function AchievementsPDF(props) {
    const { file_pdf } = props;
    return (
        <div className="App">
            <SinglePagePDFViewer pdf={achievements} />
        {/* <h4>All Pages</h4>
        <div className="all-page-container">
            <AllPagesPDFViewer pdf={samplePDF} />
        </div> */}

        </div>
    );
}