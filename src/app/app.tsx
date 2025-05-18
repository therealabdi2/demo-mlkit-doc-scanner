import { useState } from 'react';
import { Capacitor } from '@capacitor/core';
import {
  MlkitDocScanner,
  ScanOptions,
  ScanResult,
} from 'capacitor-mlkit-doc-scanner';
import './app.module.css';

function App() {
  const [scanResults, setScanResults] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startScan = async (options: ScanOptions) => {
    setError(null);
    setScanResults(null);
    try {
      const result = await MlkitDocScanner.scanDocument(options);
      console.log('Scan successful:', result);
      setScanResults(result);
    } catch (e: unknown) {
      console.error('Scan failed:', e);
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred during scanning.');
      }
    }
  };

  return (
    <div className="container">
      <h1>Capacitor ML Kit Document Scanner Demo</h1>

      <div className="scan-options">
        <h2>Scan Options:</h2>
        <button onClick={() => startScan({})}>Default Scan</button>
        <button onClick={() => startScan({ galleryImportAllowed: true })}>
          Scan with Gallery Import
        </button>
        <button onClick={() => startScan({ pageLimit: 2 })}>
          Scan with Page Limit (2)
        </button>
        <button onClick={() => startScan({ resultFormats: 'JPEG' })}>
          Scan as JPEG
        </button>
        <button onClick={() => startScan({ resultFormats: 'PDF' })}>
          Scan as PDF
        </button>
        <button
          onClick={() =>
            startScan({ resultFormats: 'JPEG_PDF', scannerMode: 'BASE' })
          }
        >
          Scan as JPEG & PDF (Base Mode)
        </button>
        <button
          onClick={() =>
            startScan({
              galleryImportAllowed: true,
              scannerMode: 'BASE_WITH_FILTER',
            })
          }
        >
          Scan with Gallery (Base with Filter Mode)
        </button>
      </div>

      {error && (
        <div className="error">
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}

      {scanResults && (
        <div className="results">
          <h2>Scan Results:</h2>
          {scanResults.scannedImages &&
            scanResults.scannedImages.length > 0 && (
              <div className="image-results">
                <h3>Scanned Images (JPEG):</h3>
                <ul>
                  {scanResults.scannedImages.map(
                    (uri: string, index: number) => (
                      <li key={index}>
                        <img
                          src={Capacitor.convertFileSrc(uri)}
                          alt={`Scanned content ${index + 1}`}
                        />
                        <p>
                          URI:{' '}
                          <a
                            href={uri}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {uri}
                          </a>
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          {scanResults.pdf && (
            <div className="pdf-results">
              <h3>Scanned PDF:</h3>
              <p>
                PDF URI:{' '}
                <a
                  href={scanResults.pdf.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {scanResults.pdf.uri}
                </a>
              </p>
              <p>Page Count: {scanResults.pdf.pageCount}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
