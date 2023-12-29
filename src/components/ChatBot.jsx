import CHATBOT_ICON from "@/assets/chatbot.png";
import PROFILE_ICON from "@/assets/profile.png";
import { Fragment, useReducer, useRef, useState } from "react";
import BigChatBox from "@components/BigChatBox.jsx";
import SentencePrintAtInterval from "@components/SentencePrintAtInterval.jsx";
import { Api } from "@api/Api.js";

export default function ChatBot() {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [isChatsAvailable, setIsChatAvailable] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(true);
  const [isShowBigChatBox, setIsShowBigChatBox] = useState(false);

  const chatBoxId = useRef(null);
  const messageInputBoxId = useRef(null);

  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const setSuggestionToInputMessageBox = (event, suggestion) => {
    setTextMessage(suggestion);
    messageInputBoxId.current.focus();
    return;
  };

  function sendMessage() {
    let chatMessages = [...chats];

    let userMessage = {
      result: [],
      suggestions: [],
      user_name: "User",
      text: textMessage.trim(),
    };

    chatMessages.push(userMessage);
    setChats(chatMessages);
    setIsChatAvailable(true);

    setTextMessage("");
    setIsBotTyping(true);

    if (chatBoxId.current !== "undefined" || chatBoxId.current !== null) {
      setTimeout(() => {
        chatBoxId.current.scrollTo(0, chatBoxId.current.scrollHeight);
      }, 180);
    }

    let payload = {
      parameters: {
        user_message: textMessage.trim(),
      },
    };

    Api.post("/chat_bot", payload)
      .then((res) => {
        let previousScrollHeight = chatBoxId.current.scrollHeight;
        chatMessages.push({user_name: "Chatbot", text: res.data.result});
        setChats(chatMessages);
        displayChats();
        setIsBotTyping(false);

        if (chatBoxId.current !== "undefined" || chatBoxId.current !== null) {
          let scrolledHeight =
            chatBoxId.current.scrollHeight - previousScrollHeight;
          setTimeout(() => {
            chatBoxId.current.scrollTo(
              0,
              chatBoxId.current.scrollHeight - scrolledHeight
            );
          }, 180);
        }

        forceUpdate();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function displayChats() {
    let allChats = [];

    if (chats.length) {
      chats.map((chat, index) => {
        if (chat.user_name === "Chatbot") {
          allChats.push(
            <div className="flex items-start mb-4" key={index}>
              <div className="flex-none flex flex-col items-center space-y-1 mr-2">
                <img className="rounded-full w-8 h-8" src={CHATBOT_ICON} />
              </div>
              <div className="max-w-lg bg-blue-500 text-white p-2 rounded-tr-lg rounded-br-lg rounded-bl-lg mb-2 relative">
                <SentencePrintAtInterval sentence={chat.text} />
              </div>
            </div>
          );
        } else {
          allChats.push(
            <div className="flex items-start flex-row-reverse mb-4" key={index}>
              <div className="flex-none flex flex-col items-center space-y-1 ml-2">
                <img
                  className="rounded-full w-8 h-8 opacity-80"
                  src={PROFILE_ICON}
                />
              </div>
              <div className="bg-blue-100 text-gray-800 p-2 rounded-tl-lg rounded-bl-lg rounded-br-lg mb-2 relative">
                <p>{chat.text}</p>
              </div>
            </div>
          );
        }
      });

      return allChats;
    }

    return;
  }

  return (
    <Fragment>
      <BigChatBox
        open={isShowBigChatBox}
        onClose={() => setIsShowBigChatBox(false)}
      >
        <div className={`w-full h-full text-sm flex flex-col bg-white`}>
          {!isChatsAvailable && (
            <div className="mt-20 h-full">
              <img
                src={CHATBOT_ICON}
                alt="chatbot-icon"
                className="w-32 h-32 mx-auto"
              />
              <div className="font-medium text-center mx-4">
                <p className="text-gray-600">Hello there,</p>
                <p className="text-gray-600">
                  I am your AI assistant and here to help you out.
                </p>
                <p className="text-gray-600">
                  Let me know. I will be around here.
                </p>
              </div>
            </div>
          )}

          {isChatsAvailable && (
            <div
              ref={chatBoxId}
              className="mt-12 flex-1 px-4 py-4 overflow-y-auto"
            >
              {displayChats()}
              {isBotTyping && (
                <div className="flex items-start mb-4">
                  <div className="flex-none flex flex-col items-center space-y-1 mr-2">
                    <img className="rounded-full w-8 h-8" src={CHATBOT_ICON} />
                  </div>
                  <div className="mt-2 inline-block bg-blue-300 text-white pt-1.5 pb-1 px-4 rounded-tr-md rounded-br-md rounded-bl-md">
                    <div className="typing">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="bg-white w-full px-2 py-4 border-t border-gray-300">
            <div className="flex justify-center border border-gray-300 hover:border-gray-400 rounded-full">
              <input
                ref={messageInputBoxId}
                className="pl-5 pr-4 py-4 w-full outline-none rounded-full"
                type="text"
                placeholder="Type your message..."
                autoFocus
                value={textMessage}
                onChange={(e) => setTextMessage(e.target.value)}
                onKeyDown={(e) => {
                  e.key === "Enter" && sendMessage();
                }}
              />
              {textMessage !== "" && (
                <button
                  className="px-3 m-1 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-full"
                  type="button"
                  onClick={() => setTextMessage("")}
                >
                  <i className="fa-solid fa-times fa-fw fa-lg"></i>
                </button>
              )}
              <button
                className="px-3 py-1.5 m-1 hover:bg-green-400 rounded-full"
                type="button"
                onClick={sendMessage}
              >
                <i className="fa-regular fa-paper-plane fa-fw fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </BigChatBox>

      <div
        className={`fixed bottom-0 right-0 z-40 w-80 ${
          isChatBoxOpen ? "h-96" : "h-12"
        } text-xs flex flex-col border shadow-xl bg-white/80 backdrop-blur rounded-tl-lg rounded-tr-lg duration-150`}
      >
        <div
          className="py-1 px-2 flex items-center justify-between border-b shadow cursor-pointer"
          onClick={() => setIsChatBoxOpen(!isChatBoxOpen)}
        >
          <div className="flex items-center">
            <img className="rounded-full w-10 h-10" src={CHATBOT_ICON} />
            <div className="pl-2">
              <div className="font-semibold">
                <p className="text-sm">Bot</p>
              </div>
              <div className="text-gray-600 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>Online
              </div>
            </div>
          </div>
          <div>
            <button
              className="inline-flex hover:bg-blue-50 rounded-full px-2 py-2"
              onClick={() => setIsShowBigChatBox(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
          </div>
        </div>

        {!isChatsAvailable && (
          <div className="my-4 h-full">
            <img
              src={CHATBOT_ICON}
              alt="chatbot-icon"
              className="w-32 h-32 mx-auto"
            />
            <div className="font-medium text-center mx-4">
              <p className="text-gray-600">Hello there,</p>
              <p className="text-gray-600">
                I am your AI assistant and here to help you out.
              </p>
              <p className="text-gray-600">
                Let me know. I will be around here.
              </p>
            </div>
          </div>
        )}

        {isChatsAvailable && (
          <div ref={chatBoxId} className="flex-1 px-4 py-4 overflow-y-auto">
            {displayChats()}
            {isBotTyping && (
              <div className="flex items-start mb-4">
                <div className="flex-none flex flex-col items-center space-y-1 mr-2">
                  <img className="rounded-full w-8 h-8" src={CHATBOT_ICON} />
                </div>
                <div className="mt-2 inline-block bg-blue-300 text-white pt-1.5 pb-1 px-4 rounded-tr-md rounded-br-md rounded-bl-md">
                  <div className="typing">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="p-2 border-t">
          <div className="flex justify-center border border-gray-200 hover:border-gray-300 rounded-full">
            <input
              ref={messageInputBoxId}
              className="pl-3 pr-2 py-2 w-full text-xs outline-none rounded-full"
              type="text"
              placeholder="Type your message..."
              autoFocus
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
              onKeyDown={(e) => {
                e.key === "Enter" && sendMessage();
              }}
            />
            {textMessage !== "" && (
              <button
                className="px-2 m-0.5 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-full"
                type="button"
                onClick={() => setTextMessage("")}
              >
                <i className="fa-solid fa-times fa-fw"></i>
              </button>
            )}
            <button
              className="px-2 py-1.5 m-0.5 hover:bg-green-400 rounded-full"
              type="button"
              onClick={sendMessage}
            >
              <i className="fa-regular fa-paper-plane fa-fw"></i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
