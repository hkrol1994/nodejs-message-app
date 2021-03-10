const URL = "http://localhost:3000";

const renderMessage = (messages) => {
  const messagesContainer = document.getElementById("messages-container");
  while (messagesContainer.children.length > 0) {
    messagesContainer.lastChild.remove();
  }
  for (let message of messages) {
    const messageContainer = document.createElement("div");
    const messageP = document.createElement("p");
    messageP.innerHTML = `Title: ${message.title}, Body: ${message.body}`;
    messageContainer.appendChild(messageP);
    messagesContainer.appendChild(messageContainer);
  }
};

const getMessages = () => {
  fetch(`${URL}/get-messages`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error();
      }
    })
    .then((resObj) => {
      renderMessage(resObj);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addMessageForm = document.getElementById("add-message");
addMessageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = {
    title: addMessageForm.children[0].value,
    body: addMessageForm.children[1].value,
  };
  fetch(`${URL}/add-message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
    .then((res) => {
      if (res.ok) {
        getMessages();
        addMessageForm.children[0].value = "";
        addMessageForm.children[1].value = "";
      } else {
        throw new Error();
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

getMessages();
