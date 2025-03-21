function downloadFile(format) {
    const link = document.createElement("a");
    if (format === "pdf") {
        link.href = "beaches-info.pdf";
        link.download = "BeachesInfo.pdf";
    } else {
        link.href = "beaches-info.doc";
        link.download = "BeachesInfo.doc";
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
