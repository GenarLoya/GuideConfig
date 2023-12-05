const mdpdf = require("mdpdf");
const fs = require("fs");
const path = require("path");

const folderPath = __dirname;
const mdFiles = fs
  .readdirSync(folderPath)
  .filter((file) => path.extname(file) === ".md");

const commonOptions = {
  styles: path.join(__dirname, "github-style.css"),
  pdf: {
    format: "A4",
    orientation: "portrait",
  },
};

async function convertMdToPdf(mdFileName) {
  const options = {
    ...commonOptions,
    source: path.join(__dirname, mdFileName),
    destination: path.join(
      __dirname,
      `./PDFs/${path.parse(mdFileName).name}.pdf`
    ),
  };

  console.dir(options);

  try {
    const pdfPath = await mdpdf.convert(options);
    console.log(
      `Conversion successful for ${mdFileName}. PDF saved at ${pdfPath}`
    );
  } catch (error) {
    console.error(`Error converting ${mdFileName}:`, error);
  }
}

mdFiles.forEach((mdFile) => {
  convertMdToPdf(mdFile);
});
