import { StyleSheet, View } from 'react-native'
import Typography from '../ui/Typography'
import { Action, Calendar } from '@/app/models/ChallengeData'
import { EmptyEventCard, EventCard } from './EventCard'

interface EventProps {
    month: Calendar
    customerAddress: string
}

export function EventItem({ month, customerAddress }: EventProps) {

    const monthMap = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    }

    return (
        <>
            <Typography text={`${monthMap[month?.month]} ${month?.year}`} weight='bold' size='base' styles={{ marginVertical: 20 }} />

            <View style={styles.actionsContainer}>
                {month.actions.length === 0 ?
                    <EmptyEventCard />
                    :
                    month?.actions?.sort((a, b) => new Date(a.scheduledDate!).getTime() - new Date(b.scheduledDate!).getTime()).map((action: Action) => (
                        <EventCard key={action.id} action={action} customerAddress={customerAddress} />
                    ))
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    actionsContainer: {
        gap: 10
    },
})

