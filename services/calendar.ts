import { Action, ChallengeData } from "@/app/models/ChallengeData";
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

export const postChanges = async (payload: { id: string, name: string }) => {
    try {
        const URL = "https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge"

        const response = await fetchCalendar() as ChallengeData

        const action = response.calendar.map(month => {
            month.actions.map(action => {
                if (action.id === payload.id) {
                    action.name = payload.name
                }
                return action
            })
            return month
        })

        let updatedAction = {
            ...response,
            calendar: [
                ...action
            ]
        }

        await axios.post(URL,
            updatedAction
        )

        console.log("Everything is fine");

    } catch (error) {
        console.error('Error fetching the calendar:', error);
    }
}