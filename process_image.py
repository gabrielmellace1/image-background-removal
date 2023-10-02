import sys
from rembg import remove
from PIL import Image
from io import BytesIO

def remove_background(input_path, output_path):
    with open(input_path, 'rb') as f:
        image_data = f.read()
    
    output_image = remove(image_data)
    
    with open(output_path, 'wb') as f:
        f.write(output_image)

if __name__ == "__main__":
    input_path = sys.argv[1]
    output_path = sys.argv[2]
    remove_background(input_path, output_path)
