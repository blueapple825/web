import { LlamaCpp } from "./llama.js";

function getLlama(model, onModelLoaded, onMessageChunk, onComplete) {
  return new LlamaCpp(
    model,
    onModelLoaded,
    onMessageChunk,
    onComplete,
  );
}

window.getLlama = getLlama;
