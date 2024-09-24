
//Tamil Text copy Script
function copy() {
  let textarea = document.getElementById("transliterateDiv");
  textarea.select();
  document.execCommand("copy");
}

function copy1() {
  let textarea = document.getElementById("textout");
  textarea.select();
  document.execCommand("copy");
}


//Save Text File Script


let saveFile = () => {

  // Get the data from each element on the form.

  const msg = document.getElementById('transliterateDiv');

  // This variable stores all the data.
  let data = '' + msg.value;

  // Web Link

  data += "\r\n";
  data += "\r\n";
  var about_link = 'This Document Typed/Converted by thonsi';
  data = data + about_link;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'Tamil.txt';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}


let saveFile1 = () => {

  // Get the data from each element on the form.

  const msg = document.getElementById('textout');

  // This variable stores all the data.
  let data = '' + msg.value;

  // Web Link

  data += "\r\n";
  data += "\r\n";
  var about_link = 'This Document Typed/Converted by Thonsi';
  data = data + about_link;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'Tamil.txt';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}


//Save Doc File Script


let saveDocAsFile = () => {

  // Get the data from each element on the form.

  const msg = document.getElementById('transliterateDiv');

  // This variable stores all the data.
  let data = '' + msg.value;

  // Web Link

  data += "\r\n";
  data += "\r\n";
  var about_link = 'This Document Typed/Converted by Thonsi';
  data = data + about_link;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/Doc' });
  const sFileName = 'Tamil.doc';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}


let saveDocAsFile1 = () => {

  // Get the data from each element on the form.

  const msg = document.getElementById('textout');

  // This variable stores all the data.
  let data = '' + msg.value;

  // Web Link

  data += "\r\n";
  data += "\r\n";
  var about_link = 'This Document Typed/Converted by Thonsi';
  data = data + about_link;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/Doc' });
  const sFileName = 'Tamil.doc';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}

//Print Script

function printTextArea() {
  childWindow = window.open('', 'childWindow', 'location=yes, menubar=yes, toolbar=yes');
  childWindow.document.open();
  childWindow.document.write('<html><head></head><body>');
  childWindow.document.write(document.getElementById('transliterateDiv').value.replace(/\n/gi, '<br>'));
  childWindow.document.write('<br><br>This Document Typed/Converted by Thonsi');
  childWindow.document.write('</body></html>');
  childWindow.print();
  childWindow.document.close();
  childWindow.close();
}


function printTextArea1() {
  childWindow = window.open('', 'childWindow', 'location=yes, menubar=yes, toolbar=yes');
  childWindow.document.open();
  childWindow.document.write('<html><head></head><body>');
  childWindow.document.write(document.getElementById('textout').value.replace(/\n/gi, '<br>'));
  childWindow.document.write('<br><br>This Document Typed/Converted by Thonsi');
  childWindow.document.write('</body></html>');
  childWindow.print();
  childWindow.document.close();
  childWindow.close();
}

//Whatsapp Share Script


function whatsapp_share() {

  var whatsapp_content = document.getElementById("transliterateDiv").value;

  var url = "https://web.whatsapp.com/send?text="
    + whatsapp_content + "This Document Typed/Converted by Thonsi";

  window.open(url, '_blank').focus();
}


function whatsapp_share1() {

  var whatsapp_content = document.getElementById("textout").value;

  var url = "https://web.whatsapp.com/send?text="
    + whatsapp_content + "This Document Typed/Converted by Thonsi";

  window.open(url, '_blank').focus();
}