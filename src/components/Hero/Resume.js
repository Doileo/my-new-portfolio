import React from "react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/documents/Doina_CV.pdf";
    link.download = "Doina_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="btn btn-download-cv" onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default Resume;
