const pdfFrames = document.querySelectorAll('.pdf-frame');
const overlay = document.getElementById('pdf-overlay');
const pdfCanvasContainer = document.getElementById('pdf-canvas-container');
const pdfCanvas = document.getElementById('pdf-canvas');
const ctx = pdfCanvas.getContext('2d', { willReadFrequently: true });
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
const scale = 2; // Increased scale for better quality

function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then(function(page) {
        const viewport = page.getViewport({ scale: scale });
        pdfCanvas.height = viewport.height;
        pdfCanvas.width = viewport.width;
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        const renderTask = page.render(renderContext);
        renderTask.promise.then(function() {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });
}

function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

function nextPage() {
    if (pageNum < pdfDoc.numPages) {
        pageNum++;
        queueRenderPage(pageNum);
    }
}

function prevPage() {
    if (pageNum > 1) {
        pageNum--;
        queueRenderPage(pageNum);
    }
}

function openOverlay(pdfUrl) {
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        pageNum = 1;
        renderPage(pageNum);
    });
    overlay.style.display = 'flex';
}

function closeOverlay() {
    overlay.style.display = 'none';
    ctx.clearRect(0, 0, pdfCanvas.width, pdfCanvas.height);
}

pdfFrames.forEach(frame => {
    frame.addEventListener('click', () => {
        const pdfUrl = frame.getAttribute('data-pdf');
        openOverlay(pdfUrl);
    });
});
