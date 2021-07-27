import { saveAs } from 'file-saver';
import html2pdf from 'html-to-pdf-js';
import HTMLtoDOCX from 'html-to-docx';

class Save {
  // Saves As .txt
  static saveAsTxt = (data) => {
    let dom = document.createElement('div');
    dom.innerHTML = data;
    let str = dom.innerText;
    const blob = new Blob([str], {
      type: 'text/plain; charset=utf-8',
    });
    saveAs(blob, 'static.txt');
    dom.remove();
  };

  // Saves as .pdf
  static saveAsPdf = (data) => {
    let dom = document.createElement('div');
    dom.innerHTML = data;
    html2pdf().from(dom).set({ margin: 1 }).save();
  };

  // Saves as .docx
  static saveAsDoc = async (data) => {
    const fileBuffer = await HTMLtoDOCX(data, null, {}, 'test');
    const url = window.URL.createObjectURL(fileBuffer);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'test.docx';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  };
}

export const saveAsTxt = Save.saveAsTxt;
export const saveAsPdf = Save.saveAsPdf;
export const saveAsDoc = Save.saveAsDoc;
