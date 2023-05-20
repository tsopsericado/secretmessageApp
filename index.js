let encodeBtn = document.querySelector("#btn");
let message = document.querySelector("#msg");
let normal = document.querySelector("#normalText");
let chunk = document.querySelector("#chunkText");
let encode = document.querySelector("#encodeText");
let err = document.querySelector("#pText");

encodeBtn.addEventListener("click", function () {
  if (!message.value) {
    err.innerText = "Message Required";
  } else if (
    message.value.trim().length < 2 &&
    message.value.trim().length < 50
  ) {
    err.innerText = "Message must be between 2 to 50 characters";
  }

  const secretMsg = () => {
    // (A) Global variables
    // (1) The input is normalized: the spaces and punctuation are removed from the English text and the message is downcased
    var input = message.value
      .match(/[A-Za-z0-9]*/g)
      .join("")
      .toLowerCase();

    // (2) The input is then organized into a rectangle;
    var col = Math.ceil(Math.sqrt(input.length));
    var row = Math.floor(Math.sqrt(input.length));
    let firstrec = [];
    for (let i = 0; i < input.length; i += col) {
      firstrec.push(input.slice(i, i + col));
    }

    const recTwoThree = () => {
      let msg = "";
      const encoded = firstrec;
      const arr = [];
      // return encoded[0][1]
      for (let a = 0; a < encoded[0].length; a++) {
        for (let b = 0; b < encoded.length; b++) {
          if (encoded[b][a]) {
            msg += encoded[b][a];
          }
        }
      }
      for (let c = 0; c < msg.length; c += row) {
        arr.push(msg.slice(c, c + row));
      }
      return arr;
    };
    recTwoThree();

    const normalizedRectangle = () => {
      let normalizedRec = String(firstrec).replace(/,/g, "\n");
      normal.innerText = normalizedRec;
    };
    normalizedRectangle();

    const encodedChunk = () => {
      let enc = String(recTwoThree()).replace(/,/g, " ");
      chunk.innerText = enc;
      return enc;
    };
    encodedChunk();

    const encodedRectangle = () => {
      let encRec = String(recTwoThree()).replace(/,/g, "\n");
      encode.innerText = encRec;
      return encRec;
    };
    encodedRectangle();
  };
  secretMsg();
});
