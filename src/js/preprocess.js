import { filterInputs, filters, COLORS, SCALE } from './ui.js';
import {
  inputImage,
  canvasMain,
  posterizeCheckbox,
  dpr,
  considerDPRCheckbox,
} from './domrefs.js';
import canvasSize from 'canvas-size';

let preProcessInputImage;
let preProcessMainCanvas;
const supportsOffscreenCanvas =
  'OffscreenCanvas' in window && 'CanvasFilter' in window;

if (supportsOffscreenCanvas) {
  import('./preprocessworker.js?worker').then((module) => {
    const PreProcessWorker = module.default;
    const preProcessWorker = new PreProcessWorker();
    const offscreen = canvasMain.transferControlToOffscreen();
    preProcessWorker.postMessage({ offscreen }, [offscreen]);

    preProcessInputImage = async () => {
      return new Promise(async (resolve) => {
        const channel = new MessageChannel();
        channel.port1.onmessage = ({ data }) => {
          channel.port1.close();
          resolve(data.result);
        };

        const { width, height } = getScaledDimensions();
        preProcessWorker.postMessage(
          {
            inputImageBitmap: await createImageBitmap(inputImage),
            posterize: posterizeCheckbox.checked,
            rgb: {
              r: getRange(filterInputs[COLORS.red]),
              g: getRange(filterInputs[COLORS.green]),
              b: getRange(filterInputs[COLORS.blue]),
            },
            width,
            height,
            dpr,
          },
          [channel.port2],
        );
      });
    };
  });
} else {
  const ctxMain = canvasMain.getContext('2d', { desynchronized: true });
  ctxMain.scale(dpr, dpr);
  ctxMain.imageSmoothingEnabled = true;
  preProcessMainCanvas = () => {
    let { width, height } = getScaledDimensions();
    const factor = considerDPRCheckbox.checked ? dpr : 1;
    // Don't exceed the maximum canvas size.
    let shrinkFactor = 1;
    while (!canvasSize.test({ width, height })) {
      width = Math.floor(width / 2);
      height = Math.floor(height / 2);
      shrinkFactor /= 2;
    }
    canvasMain.width = width;
    canvasMain.height = height;
    ctxMain.clearRect(0, 0, width, height);
    ctxMain.filter = getFilterString();
    ctxMain.drawImage(
      inputImage,
      0,
      0,
      factor * inputImage.naturalWidth * shrinkFactor,
      factor * inputImage.naturalHeight * shrinkFactor,
      0,
      0,
      width,
      height,
    );
    return ctxMain.getImageData(0, 0, width, height);
  };
}

const getScaledDimensions = () => {
  const scaleFactor = Number(filterInputs[SCALE.scale].value) / 100;
  return {
    width: Math.ceil(dpr * inputImage.naturalWidth * scaleFactor),
    height: Math.ceil(dpr * inputImage.naturalHeight * scaleFactor),
  };
};

const getRange = (input) => {
  const value = Number(input.value);
  const array = [];
  for (let i = 0; i <= value; i++) {
    array[i] = ((1 / value) * i).toFixed(1);
  }
  return array;
};

const getPosterizeFilter = () => {
  return `data:image/svg+xml;utf8,<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <filter id="posterize">
        <feComponentTransfer>
          <feFuncR type="discrete" tableValues="${getRange(
            filterInputs[COLORS.red],
          ).join(',')}" />
          <feFuncG type="discrete" tableValues="${getRange(
            filterInputs[COLORS.green],
          ).join(',')}" />
          <feFuncB type="discrete" tableValues="${getRange(
            filterInputs[COLORS.blue],
          ).join(',')}" />
          <feFuncA type="discrete" tableValues="${getRange(
            filterInputs[COLORS.alpha],
          )}" />
        </feComponentTransfer>
      </filter>
    </svg>`
    .replace(/[\r\n]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

const getFilterString = () => {
  let string = `${
    posterizeCheckbox.checked ? `url('${getPosterizeFilter()}#posterize') ` : ''
  }`;
  for (const [filter, props] of Object.entries(filters)) {
    const input = filterInputs[filter];
    if (props.initial === Number(input.value)) {
      continue;
    }
    string += `${filter}(${input.value}${input.dataset.unit}) `;
  }
  return string.trim() || 'none';
};

export { preProcessMainCanvas, preProcessInputImage, supportsOffscreenCanvas };
