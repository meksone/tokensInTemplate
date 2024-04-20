/**
 * Replace token defined in args in HTML template
 * The tokens must be provided in form { token1name: 'token1Value', token2Name: 'token2Value' ...}
 *
 * @param {*} filename
 * @param {...{}} args
 * @returns {*}
 */
function tokensInTemplate(filename, ...args) {
  // Ensure the first argument is a string
  if (typeof filename !== 'string') {
    throw new Error('First argument must be a string; be sure to write the template name correctly, without ending .html');
  }

  // Merge all objects into one
  let replacements = Object.assign({}, ...args);

  // Create a template from a file
  let template = HtmlService.createTemplateFromFile(filename);

  // Replace tokens in the template with replacements
  for (let key in replacements) {
    template[key] = replacements[key];
  }

  // Evaluate the template and return the result
  return template.evaluate().getContent();
}
