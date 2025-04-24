import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useChat = () => {
    const { refetch, data: data = [] } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/getCommunityChat");
            return res.data.chat;
        }
    })

    return [data, refetch]
};

export default useChat;