function solve(input) {
    let message = input.shift();
    let command = input.shift();
  
    while (command != "Buy") {
      const [action, ...args] = command.split("?");
  
      switch (action) {
        case "TakeEven": {
            let newMessage = "";
  
            for (let i = 0; i < message.length; i += 2) {
              newMessage += message[i];
            }
  
            message = newMessage;
            console.log(message);
          }
          break;
        case "ChangeAll": {
          const [subs, replacement] = args;
            message = message.split(subs).join(replacement);
            console.log(message);
          }
          break;
        case "Reverse": {
            const [subs] = args;
            let index = message.indexOf(subs);
  
            if (index !== -1) {
              const reversedSubs = subs.split("").reverse().join("");
              message =
                message.substring(0, index) +
                message.substring(index + subs.length) +
                reversedSubs;
  
              console.log(message);
            } else {
              console.log("error");
            }
          }
          break;
      }
      command = input.shift();
    }
  
    console.log(`The cryptocurrency is: ${message}`);
  }