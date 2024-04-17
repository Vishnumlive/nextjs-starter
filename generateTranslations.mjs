import translate from 'translate';
import fs from 'fs-extra';
import path from 'path';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));


// Function to recursively translate values of nested objects
async function translateNestedObject(object, targetLanguage, existingTranslations) {
  const translatedObject = {};

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (typeof value === 'object') {
        // Ensure that existingTranslations[key] is an object
        const existing = existingTranslations[key] || {};
        translatedObject[key] = await translateNestedObject(value, targetLanguage, existing);
      } else {
        // Check if the key already exists in the existing translations
        if (existingTranslations.hasOwnProperty(key)) {
          // If the key already exists, use the existing translation
          translatedObject[key] = existingTranslations[key];
        } else {
          // If the key doesn't exist, translate the value 
          if (process.env.DEEPL_LANGUAGES.includes(targetLanguage)) {
            console.log("deepl translator")
            translate.engine = "deepl";
            translate.key = process.env.DEEPL_API_KEY;
          } else if (process.env.GOOGLE_LANGUAGES.includes(targetLanguage)) {
            console.log("use google translator")
            translate.engine = "google";
            translate.key = process.env.GOOGLE_API_KEY;
          } else {
            console.log("nothing to do")
            continue;
          }
          translatedObject[key] = await translate(value, targetLanguage);
        }
      }
    }
  }

  return translatedObject;
}



// Function to translate a single JSON file
async function translateJSONFile(sourceFilePath, targetLanguage) {
  const sourceTranslations = await fs.readJson(sourceFilePath);
  let targetTranslations;

  // Read existing translations from the target file, if it exists
  const targetFilePath = join(sourceDir, '..', targetLanguage, path.basename(sourceFilePath));
  let existingTranslations = {};

  // Ensure that existingTranslations is properly initialized for nested keys
  if (await fs.pathExists(targetFilePath)) {
    existingTranslations = await fs.readJson(targetFilePath);
  } else {
    existingTranslations = {};
  }

  // Check if the JSON file contains nested objects or simple key-value pairs
  if (Object.values(sourceTranslations).some(value => typeof value === 'object')) {
    // If the JSON file contains nested objects, translate them recursively
    targetTranslations = await translateNestedObject(sourceTranslations, targetLanguage, existingTranslations);
  } else {
    // If the JSON file contains simple key-value pairs, translate them directly
    targetTranslations = {};

    for (const key in sourceTranslations) {
      if (Object.hasOwnProperty.call(sourceTranslations, key)) {
        // Check if the key already exists in the target translations
        if (existingTranslations.hasOwnProperty(key)) {
          // If the key already exists, use the existing translation
          targetTranslations[key] = existingTranslations[key];
        } else {
          // If the key doesn't exist, translate the value 
          if (process.env.DEEPL_LANGUAGES.includes(targetLanguage)) {
            console.log("deepl translator")
            translate.engine = "deepl";
            translate.key = process.env.DEEPL_API_KEY;
          } else if (process.env.GOOGLE_LANGUAGES.includes(targetLanguage)) {
            console.log("use google translator")
            translate.engine = "google";
            translate.key = process.env.GOOGLE_API_KEY;
          } else {
            console.log("nothing to do")
            continue;
          }
          targetTranslations[key] = await translate(sourceTranslations[key], targetLanguage);
        }
      }
    }
  }

  return targetTranslations;
}




// Function to translate all JSON files in a directory
async function translateAllJSONFiles(sourceDir, targetDir, targetLanguage) {
  // Read all JSON files from the source directory
  const sourceFiles = await fs.readdir(sourceDir);

  // Translate each file and write translated versions to the target directory
  for (const file of sourceFiles) {
    const sourceFilePath = join(sourceDir, file);
    const targetFilePath = join(targetDir, file);
    const targetTranslations = await translateJSONFile(sourceFilePath, targetLanguage);
    // Write translated data to file
    await fs.writeJson(targetFilePath, targetTranslations, { spaces: 2 });
    console.log(`Translation file for ${targetLanguage} generated successfully at ${targetFilePath}`);
  }
}

// Translate all JSON files from 'en' directory to 'de' and 'es' directories
const sourceDir = join(__dirname, 'src', 'app', 'i18n', 'locales', 'en');
const targetLanguages = process.env.TRANSLATION_LANGUAGES.split(',');
console.log("targetLanguages..", targetLanguages)
for (const targetLanguage of targetLanguages) {
  const targetDirPath = join(sourceDir, '..', targetLanguage);
  await fs.ensureDir(targetDirPath); // Create target directory if it doesn't exist
  await translateAllJSONFiles(sourceDir, targetDirPath, targetLanguage);
} 