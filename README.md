# QR Image Generator

This project is a QR Image Generator web application that allows users to enter a URL and generate a corresponding QR code. Users can then download the QR image or preview the website directly from the QR code.

## Project Description

The QR Image Generator is a simple web application that lets users generate QR codes for any URL. Users can enter a URL, click the "Generate" button, and the application will create a QR code for that URL. The generated QR code can be downloaded as an image or used to preview the website.

## Features

- Enter a URL to generate a QR code.
- Download the generated QR code image.
- Preview the website of that URL.

## Technologies Used

- **Front-end:** HTML, CSS, EJS (Embedded JavaScript)
- **Back-end:** Node.js, Express.js
- **QR Code Generation:** `qr-image` Node.js package

## Try It on Your Own Server

Follow these steps for set up locally:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/shreyaspangavhane/localrepo.git
    cd localrepo
    ```

2. **Install dependencies:**
    ```sh
    npm i
    ```

3. **Start the server:**
    ```sh
    node index.js
    ```

4. **Open the application:**
    Open web browser and Search `http://localhost:3000` and Enter.

## Usage

1. **Navigate to the application:**
   Open your web browser and visit `http://localhost:3000`.

2. **Generate a QR code:**
   - Enter the URL you want to generate a QR code.
   - Click the "Generate" button.
   
3. **Scan /Download the QR code /Preview the website:**
   - "Scan" the QR Image from Mobile Phone.
   - Click the "Download QR Image" button to download the QR code as an image.
   - Click the "Preview Website" button to open the URL in a new tab.

## File Structure

```plaintext
QR-Image-Generator/
├── views/
│   └── index.ejs
├── public/
│   ├── css/
│   │   └── main.css
├── index.js
├── package.json
└── README.md
