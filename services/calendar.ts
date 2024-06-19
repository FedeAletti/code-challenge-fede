import { ChallengeData } from "@/app/models/ChallengeData";
import axios, { AxiosResponse } from "axios";



export const fetchCalendar = async (): Promise<ChallengeData | null> => {
    try {
        const response: AxiosResponse<ChallengeData> = (await axios.get("https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge"))
        return response.data
    } catch (error) {
        console.error('Error fetching the calendar:', error);
        return null;
    }
};