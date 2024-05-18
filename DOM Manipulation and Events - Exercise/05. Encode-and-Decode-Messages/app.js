function encodeAndDecodeMessages() {

    const button = document.querySelectorAll("button");
    const area = document.querySelectorAll("textarea");

    let encodeBtn = button[0];
    let decodeBtn = button[1];
    let encodeArea = area[0];
    let decodeArea = area[1];

    encodeBtn.addEventListener('click', encodeAndSendMessageHandler);
    decodeBtn.addEventListener('click', decodeAndReadMessageHandler);

    function encodeAndSendMessageHandler(event) {
        let text = encodeArea.value;
        let encodeMsg = "";

        for (let char of text) {
            let number = char.charCodeAt();
            number++;
            encodeMsg += String.fromCharCode(number);
        }

        decodeArea.value = encodeMsg;
        encodeArea.value = "";

    }

    function decodeAndReadMessageHandler(event) {
        let value = decodeArea.value;
        let decodeMsg = "";

        for (let char of value) {
            let number = char.charCodeAt();
            number--;
            decodeMsg += String.fromCharCode(number)
        }

        decodeArea.value = decodeMsg;
    }
}