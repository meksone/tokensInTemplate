# 🪙 tokensInTemplate 
very simple Google Apps Script function to replace text inside HTML template

##Usage
Copy this function to your Google Apps Script project, then create a simple HTML template.
Then, use it like
  tokensInTemplate('name_of_your_html_template_without_.html',{token1Name: token1Value, token2Name: token2Value ... });

Due to a Google Apps Script Bug, **you can't use this function inside a library**, so you must copy all the code inside your script and execute from here.
More info here https://stackoverflow.com/questions/65364534/google-apps-script-html-service-from-library-cant-execute-any-functions-poten
(see comment 2 from Tanaike)
