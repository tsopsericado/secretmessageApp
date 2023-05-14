let encodeBtn = document.querySelector("#btn");
let message = document.querySelector("#msg");
let normal = document.querySelector("#normalText");
let chunk = document.querySelector("#normalText");
let encode = document.querySelector("#encodeText");
let err = document.querySelector("#pText");

encodeBtn.addEventListener("click", function () {
  if (!message.value) {
    err.innerHTML = "Message Required";
  } else if (
    message.value.trim().length < 2 &&
    message.value.trim().length < 50
  ) {
    err.innerHTML = "Message must be between 2 to 50 characters";
  }

  const secretMsg = () => {
    // Global variables
    //(1) The input is normalised: the spaces and punctuation are removed from the english text and the message is downcased

    var input = message.value
      .match(/[A-Za-z0-9]*/g)
      .join("")
      .toLowerCase();


      //(2) The input is then organised into a rectangle

      var col = Math.ceil(Math.sqrt(input.length))
      var row = Math.floor(Math.sqrt(input.length))
          let firstrec = [];
          for (let i = 0; i <input.length; i += col){
            firstrec.push(input.slice(i, i + col))
                const recTwoThree = () => {
                    let msg = "";
                    const encoded = firstrec
                    const arr = []

                    // return encoded[0][1]
                    
                }
            
          }
  };
});
