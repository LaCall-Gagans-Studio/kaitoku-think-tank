const mammoth = require("mammoth");

mammoth
  .extractRawText({ path: "第2回次世代自治共創会議_260420（案内版）.docx" })
  .then(function (result) {
    var text = result.value;
    console.log(text);
  })
  .catch(function (error) {
    console.error(error);
  });
