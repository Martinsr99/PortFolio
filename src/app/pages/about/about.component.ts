import { Component } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  public pdfShown: boolean = false;
    public pdfLoaded: boolean = false;
  private canvas: HTMLCanvasElement;

  viewCV() {
    this.pdfShown = true;
    this.pdfLoaded = false; // Set initial value
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      '../../../assets/pdfjs/pdf.worker.js';
    const pdfUrl = '../../../assets/MartinSiles_SoftwareEngineer-1.pdf';

    // Asynchronously load the PDF
    pdfjsLib.getDocument(pdfUrl).promise.then((pdfDoc: any) => {
      // Get the first page of the PDF
      pdfDoc.getPage(1).then((page: any) => {
        const viewport = page.getViewport({ scale: 1 });

        // Set canvas dimensions to match the PDF page
        this.canvas = document.getElementById('pdfCanvas') as HTMLCanvasElement;
        this.canvas.width = viewport.width;
        this.canvas.height = viewport.height;

        // Render the PDF page on the canvas
        page.render({ canvasContext: this.canvas.getContext('2d'), viewport }).promise.then(() => {
          this.canvas.classList.add('complete');
        });
      });
    });
  }

  closeCV() {
    this.pdfShown = false;
    this.pdfLoaded = false;
  }

  downloadCV() {
    // Logic to download the CV
    console.log('Download CV clicked');
    // You can create a download link or perform a file download using a server API
  }
}
