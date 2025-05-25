# Capacitor ML Kit Document Scanner Demo

This project demonstrates the capabilities of the `capacitor-mlkit-doc-scanner` plugin, showcasing its various features for scanning documents in a Capacitor application.

## Features Demonstrated

This demo allows you to test all the functionalities provided by the `capacitor-mlkit-doc-scanner` plugin, including:

- **Default Scan:** Initiates a scan with the default plugin settings.
- **Gallery Import:** Allows importing images from the device gallery for document creation.
- **Page Limit:** Sets a maximum number of pages for a single scan session.
- **Result Formats:**
  - Scan as JPEG.
  - Scan as PDF.
  - Scan as both JPEG and PDF.
- **Scanner Modes:**
  - `BASE`: Basic editing capabilities (crop, rotate, reorder pages, etc.).
  - `BASE_WITH_FILTER`: Adds image filters (grayscale, auto image enhancement, etc.) to the `BASE` mode.
  - `FULL` (default): Adds ML-enabled image cleaning capabilities (erase stains, fingers, etc.) to the `BASE_WITH_FILTER` mode. This mode will also allow future major features to be automatically added along with Google Play services updates, while the other two modes will maintain their current feature sets and only receive minor refinements.
- **Displaying Scanned Images:** Shows the scanned JPEG images within the app.
- **Opening Scanned PDF:** Allows opening the generated PDF using the device's browser or a PDF viewer.

## Plugin Used

- [capacitor-mlkit-doc-scanner](https://www.npmjs.com/package/capacitor-mlkit-doc-scanner)

## Project Setup

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:therealabdi2/demo-mlkit-doc-scanner.git
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Running the Demo

1.  **Build the Android project:**

    ```bash
    npm run build:android
    ```

2.  **Open the project in Android Studio:**

    ```bash
    npx cap open android
    ```

3.  **Run the app on an Android device or emulator from Android Studio.**

    - **Important:** The ML Kit Document Scanner models are dynamically downloaded by Google Play services. Users might have to wait for these to download before the first use. The API requires Android API level 21 or above and a minimum device total RAM of 1.7GB.

## Development Notes

- The main application logic is in `src/app/app.tsx`.
- Styles are in `src/styles.css`.
- Ensure you have Android Studio and the necessary Android SDKs installed.
