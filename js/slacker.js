var output = '';
document.getElementById('results').style.display = "none";

// Convert text to use letter images
function spooky() {
  output = '';  
  output = createResponse(getRequest(), 'spooky');  
  document.getElementById('code').value = output;
}

// Add clap emojis between words
function clap() {
  output = '';  
  output = createResponse(getRequest(), 'clap');  
  document.getElementById('code').value = output;
}

// Spongebob Casing
function sassy() {
  output = '';
  output = createResponse(getRequest(), 'sassy');
  document.getElementById('code').value = output;
}

// Get text from input
function getRequest() {
  document.getElementById('results').style.display = "block";
  return document.getElementById('inputText').value;
}

// Returns response from respective get calls
function createResponse(input, formatType) {
  if (formatType == 'spooky')
    return getSpookyResponse(input);
  else if (formatType == 'clap')
    return getClapResponse(input);  
  else if (formatType == 'sassy')
    return getSassyResponse(input);
}

function getSassyResponse(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] == 'i' || input[i] == 'I')
      output += 'i'; // i's should never be capitalized
    else if (input[i] == 'l' || input[i] == 'L')
      output += 'L'; // L's should never be lower case
    else if (i % 2 == 0)
     output += input[i].toUpperCase();
   else
     output += input[i];
  }
  
  return output;
}

// Split text by spaces; add in spaces and clap emojis
function getClapResponse(input) {
  output = input.split(" ").join(" 👏 ");
  return output.toUpperCase();
}

// Convert each character to text for spooky letters in slack
function getSpookyResponse(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] == ' ')
      output += ':xspace1:'
    else if (input[i] == '!')
      output += ':xexclamation1:'
    else if (input[i] == ',')
      output += ':xcomma1:'
    else if (input[i] == '#')
      output += ':xoctothorpe1:'
    else if (input[i] == '?')
      output += ':xquestion1:'
    else if (input[i] == '\'')
      output += ':xapostrophe1:'
    else if (input[i] == '.')
      output += ':xperiod1:'
    else
      output += ':x' + input[i] + '1:'
  }  
  return output;
}

// Call getSpookyResponse
// Then replace spaces with clap emojis
function spookyClap() {
  output = '';
  output = createResponse(getRequest(), 'spooky');
  output = output.split(':xspace1:').join(' 👏 ').toUpperCase();
  document.getElementById('code').value = output;
}

function sassyClap() {
  output = '';
  output = createResponse(getRequest(), 'sassy').split(" ").join(" 👏 ");
  document.getElementById('code').value = output;
}

// Copy text in output field
function copyText() {
  var copyText = document.getElementById("code");
  copyText.select();
  document.execCommand("copy");
}

// Removes emojis from input
function fixText() {
  document.getElementById('results').style.display = "block";
  
  var fixedText = removeEmojis(document.getElementById('inputText').value);
  
  document.getElementById('code').value = fixedText;  
}

// Locates emojis in string;
// Replaces them with empty string
function removeEmojis (string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|[\ud83c[\ude50\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

  return string.replace(regex, '');
}