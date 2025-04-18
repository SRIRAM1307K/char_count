
      var textArea = document.getElementById("textArea");
      var charCount = document.getElementById("charCount");
      var warningMsg = document.getElementById("warningMsg");
      var maxChars = 200;
      textArea.addEventListener("input", function () {
        var currentLen = textArea.value.length;
        charCount.textContent = `${currentLen} / ${maxChars} Character Typed`;

        if (currentLen >= maxChars) {
          warningMsg.textContent = "You have reached the character limit!";
        }
        else {
          warningMsg.textContent = "";
        }
      });