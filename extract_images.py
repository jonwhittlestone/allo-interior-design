#!/usr/bin/env python3
from PIL import Image
import os

# Create images directory if it doesn't exist
os.makedirs("images", exist_ok=True)

# Define the images to extract
# Format: (source_file, output_file, (x, y, width, height))
images_to_extract = [
    # From design 1.png - Navigation logo
    ("design/a life less ordinary/1.png", "images/allo-logo.png", (40, 20, 80, 80)),
    # From design 2.png - About us image
    ("design/a life less ordinary/2.png", "images/about-us.png", (400, 150, 350, 500)),
    # From design 3.png - Service images
    (
        "design/a life less ordinary/3.png",
        "images/service-consultation.png",
        (100, 200, 150, 150),
    ),
    (
        "design/a life less ordinary/3.png",
        "images/service-moodboard.png",
        (300, 200, 150, 150),
    ),
    (
        "design/a life less ordinary/3.png",
        "images/service-sourcing.png",
        (500, 200, 150, 150),
    ),
    (
        "design/a life less ordinary/3.png",
        "images/service-project-management.png",
        (100, 400, 150, 150),
    ),
    (
        "design/a life less ordinary/3.png",
        "images/service-accessorising.png",
        (300, 400, 150, 150),
    ),
    (
        "design/a life less ordinary/3.png",
        "images/service-help.png",
        (500, 400, 150, 150),
    ),
    # From design 4.png - Home staging image
    (
        "design/a life less ordinary/4.png",
        "images/home-staging.png",
        (100, 200, 300, 400),
    ),
    # From design 6.png - Testimonial icons
    (
        "design/a life less ordinary/6.png",
        "images/testimonial-icon-1.png",
        (200, 150, 80, 80),
    ),
    (
        "design/a life less ordinary/6.png",
        "images/testimonial-icon-2.png",
        (300, 150, 80, 80),
    ),
    (
        "design/a life less ordinary/6.png",
        "images/testimonial-icon-3.png",
        (400, 150, 80, 80),
    ),
    # From design 7.png - Contact page images
    (
        "design/a life less ordinary/7.png",
        "images/contact-image.png",
        (100, 200, 400, 500),
    ),
    (
        "design/a life less ordinary/7.png",
        "images/allo-logo-dark.png",
        (600, 500, 80, 80),
    ),
    (
        "design/a life less ordinary/7.png",
        "images/facebook-icon.png",
        (550, 400, 40, 40),
    ),
    (
        "design/a life less ordinary/7.png",
        "images/instagram-icon.png",
        (600, 400, 40, 40),
    ),
]


# Function to extract an image
def extract_image(source_file, output_file, crop_params):
    try:
        # Open the source image
        img = Image.open(source_file)

        # Convert (x, y, width, height) to (left, upper, right, lower)
        x, y, width, height = crop_params
        crop_box = (x, y, x + width, y + height)

        # Extract the region
        cropped_img = img.crop(crop_box)

        # Save the extracted image
        cropped_img.save(output_file)

        print(f"Extracted {output_file}")
        return True
    except Exception as e:
        print(f"Error extracting {output_file}: {e}")
        return False


# Extract all images
success_count = 0
for source_file, output_file, crop_box in images_to_extract:
    if extract_image(source_file, output_file, crop_box):
        success_count += 1

print(f"\nExtracted {success_count} of {len(images_to_extract)} images")
print("Note: The coordinates used are estimates and may need adjustment.")
print("Please check the extracted images and adjust the coordinates if needed.")
