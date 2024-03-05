import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const exportContent = () => {
    const preHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>`;
    const postHtml = '</body></html>';

    let html = '';
    const element = document?.getElementById('export-content');
    const pageBreak = `<br style="page-break-before: always">`;
    if (element) {
      html = `${preHtml}${pageBreak}${element.innerHTML}${postHtml}`;
    }

    var url =
      'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);

    downloadLink.href = url;
    downloadLink.download = 'document-name.doc';
    downloadLink.click();

    document.body.removeChild(downloadLink);

    // setHiddenButtons(false);
  };

  return (
    <>
      <div id="export-content">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </div>

      {/* export content button */}
      <div className="card">
        <button onClick={exportContent}>Click here to export content</button>
      </div>
    </>
  );
}

export default App;
