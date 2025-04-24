import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useChat = () => {
    const { refetch, data: data = [] } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axios.get("https://bloodbond-server.vercel.app/getCommunityChat");
            return res.data.chat;
        }
    })

    return [data, refetch]
};

export default useChat;