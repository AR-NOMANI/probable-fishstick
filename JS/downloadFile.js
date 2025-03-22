function downloadFile(format) {
    const link = document.createElement("a");
    const fileMap = {
        pdf: { href: "beaches-info.pdf", download: "BeachesInfo.pdf" },
        doc: { href: "beaches-info.doc", download: "BeachesInfo.doc" }
    };
    const file = fileMap[format];
    if (file) {
        link.href = file.href;
        link.download = file.download;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        console.error(`Unsupported format: ${format}`);
    }
}