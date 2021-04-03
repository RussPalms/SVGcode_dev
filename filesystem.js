import { fileOpen, fileSave, supported } from 'browser-fs-access';
import { canvasMain } from './preprocess.js';
import { inputImage } from './ui.js';
import { outputMonochrome } from './monochrome.js';
import { outputColor } from './color.js';

const fileOpenButton = document.querySelector('.open');
const saveImageButton = document.querySelector('.save-image');
const saveMonochromeSVGButton = document.querySelector('.save-bw-svg');
const saveColorSVGButton = document.querySelector('.save-color-svg');
const dropContainer = document.querySelector('.drop');

const canvasToBlob = async (canvas, mimeType = 'image/png') => {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob);
    }, mimeType);
  });
};

fileOpenButton.addEventListener('click', async () => {
  try {
    const file = await fileOpen({
      mimeTypes: ['image/*'],
      description: 'Image files',
    });
    const blobURL = URL.createObjectURL(file);
    inputImage.src = blobURL;
    inputImage.dispatchEvent(new Event('load'));
  } catch (err) {
    console.error(err.name, err.message);
  }
});

dropContainer.addEventListener('dragover', (event) => {
  // Prevent navigation.
  event.preventDefault();
  // Style the drag-and-drop as a "copy file" operation.
  event.dataTransfer.dropEffect = 'copy';
});

dropContainer.addEventListener('drop', async (event) => {
  // Prevent navigation.
  event.preventDefault();
  const item = event.dataTransfer.items[0];
  if (item.kind === 'file') {
    if (supported) {
      const entry = await item.getAsFileSystemHandle();
      if (entry.kind === 'directory') {
        return;
      } else {
        const file = await entry.getFile();
        inputImage.src = URL.createObjectURL(file);
      }
    } else {
      const file = item.getAsFile();
      inputImage.src = URL.createObjectURL(file);
    }
  }
});

saveImageButton.addEventListener('click', async () => {
  try {
    const blob = await canvasToBlob(canvasMain);
    await fileSave(blob, { fileName: '', description: 'PNG file' });
  } catch (err) {
    console.error(err.name, err.message);
  }
});

saveMonochromeSVGButton.addEventListener('click', async () => {
  try {
    const blob = new Blob([outputMonochrome.innerHTML], {
      type: 'image/svg+xml',
    });
    await fileSave(blob, { fileName: '', description: 'SVG file' });
  } catch (err) {
    console.error(err.name, err.message);
  }
});

saveColorSVGButton.addEventListener('click', async () => {
  try {
    const blob = new Blob([outputColor.innerHTML], {
      type: 'image/svg+xml',
    });
    await fileSave(blob, { fileName: '', description: 'SVG file' });
  } catch (err) {
    console.error(err.name, err.message);
  }
});
