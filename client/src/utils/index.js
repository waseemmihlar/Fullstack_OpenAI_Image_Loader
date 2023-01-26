import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

export const getrandomPrompt = (currentText) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomText = surpriseMePrompts[randomIndex];

  if (randomText === currentText) return getrandomPrompt(currentText);

  return randomText;
};

export const downloadImage = async (_id, image) => {
  FileSaver.saveAs(image, `download-${_id}.jpg`);
};
