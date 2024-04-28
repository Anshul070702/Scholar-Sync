import { sendMessage } from "../utils/chatApi";
import { useContext, useState } from "react";
import MessageContext from "../context/MessageContext";
import { Socketcontext } from "../context/SocketContext";
const SendMessage = () => {
  const [sentMessage, setSentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setMessages } = useContext(MessageContext);
  const { currentFriendId } = useContext(Socketcontext);
  const handleClick = async () => {
    console.log("clicked");
    if (sentMessage === "" || currentFriendId === null) {
      // stop request
      return;
    }
    setIsLoading(true);
    try {
      const accessToken = localStorage.getItem("token");
      const response = await fetch(sendMessage + currentFriendId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ message: sentMessage }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const responseData = await response.json();
        console.log("Message sent data:", responseData);
        setSentMessage("");
        setMessages((prevMessages) => [...prevMessages, responseData.data]);
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-[10%] justify-between bg-white">
      <input
        type="text"
        placeholder=" Type Something..."
        className="h-full w-[80%] outline-none"
        value={sentMessage}
        onChange={(e) => setSentMessage(e.target.value)}
      />
      <div className="">
        <button
          className="mx-4 my-2 rounded-sm bg-blue-400 px-2 py-1 text-white"
          onClick={handleClick}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};
export default SendMessage;
