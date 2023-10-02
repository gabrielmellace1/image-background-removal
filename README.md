# Image Background removal Service

This service provides a simple way to upload images and have their backgrounds removed using a combination of Node.js for the server backend and a Python script for image processing.

## Description

This application allows users to:

Upload images via a web interface or API.
Process these images to remove their backgrounds using a Python script.
View the processed images.
Delete any processed image from the server.
## Setup & Installation

### Prerequisites:

Node.js
Python 3
pip (Python package installer)
rembg Python package
### Steps:

**Clone the repository:**
```bash
git clone https://github.com/gabrielmellace1/image-background-removal
cd image-background-removal
```

**Install Node.js dependencies:**
```bash
npm install
```

**Setup Python environment and install dependencies:**
Ensure you have pip installed. Then:
```bash
pip install rembg
```

**Start the Node.js server:**
```bash
npm start
```

This will start the server, typically on http://localhost:8000/. Open this URL in a web browser to use the application.

## Usage

**Uploading Images:**
Navigate to the main page http://localhost:8000/.
Use the "Upload" button to select and submit an image.
Once processed, the image without its background will be displayed on the page.
**Deleting Processed Images:**
The backend API provides an endpoint to delete processed images. It can be used as follows:
```bash
curl -X DELETE http://localhost:8000/images/processed/<image_name>
```
## Contributing

If you'd like to contribute to this project, please create a pull request with your changes.

## License

This project is open-sourced and available under the MIT License.
