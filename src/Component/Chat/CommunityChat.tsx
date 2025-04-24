import axios from "axios";
import { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import moment from "moment";

interface ChatItem {
  time: string;
  user: string;
  message: string;
}

const CommunityChat = () => {
  const message = useRef<HTMLInputElement>(null);
  const [data, refetch] = useChat();
  const auth = useAuth();

  if (!auth) {
    return;
  }
  const { user } = auth;

  const handleSendMessage = () => {
    const chat = message.current?.value;
    const data = {
      date: moment().format(),
      user: user?.displayName,
      message: chat,
    };

    if (chat) {
      console.log(data);
      axios
        .post("https://bloodbond-server.vercel.app/createCommunityChat", data)
        .then((res) => {
          console.log(res);
          refetch();
        })
        .catch((error) => console.log(error.message));
      if (message.current) {
        message.current.value = "";
      }
    }
  };
  refetch();

  return (
    <div>
      <div className="min-h-screen my-5 ">
        <h1 className="text-3xl font-bold text-center mb-4 text-white">
          Chat With People
        </h1>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4 bg-gray-200 rounded-md">
            <ul>
              {data.map((item: ChatItem) => (
                <li key={item.time} className="bg-gray-300 p-2 mb-2 rounded-md">
                  <span className="text-blue-700"> {item.user}</span> :{" "}
                  {item.message}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex p-2 bg-white rounded-md">
            <input
              type="text"
              ref={message}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-md mr-2"
            />
            <button onClick={handleSendMessage} className="btn btnStyle">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityChat;
