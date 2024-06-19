import { Action } from "@/app/models/ChallengeData";
import { getDay } from "@/utils/getDay";
import { StyleSheet, View } from "react-native";
import { ScheduledIcon, FilledCheckIcon, LocationIcon } from "../icons";
import Typography from "../ui/Typography";
import { Colors } from "@/constants/Colors";

const StatusIcon = ({ status }: { status: string }) => {
    if (status === "Scheduled") return <ScheduledIcon />
    return <FilledCheckIcon />
}

export const EventCard = ({ action, customerAddress }: { action: Action, customerAddress: string }) => {

    const cardStyle = createStyles(action.status);

    const dayMap = {
        0: "SUN",
        1: "MON",
        2: "TUE",
        3: "WED",
        4: "THU",
        5: "FRI",
        6: "SAT",
    }

    if (action.status === "Scheduled" || action.status === "Completed") return (
        <View style={cardStyle.container}>
            <View style={cardStyle.dateContainer}>
                <Typography text={dayMap[getDay(new Date(action.scheduledDate!))]} weight='bold' size='sm' color={Colors.light.grey} />
                <Typography text={new Date(action.scheduledDate!).getDate().toString()} weight='black' size='lg' />
                <StatusIcon status={action.status} />
            </View>
            <View style={cardStyle.eventCard}>
                <View style={cardStyle.eventDetails}>
                    <Typography text={action.name} weight='bold' color='white' />
                    <Typography text={action.vendor?.vendorName!} size='sm' color='white' />
                    <Typography text={action.vendor?.phoneNumber!} weight='bold' size='sm' color='white' />
                </View>
                <View style={cardStyle.eventDetails}>
                    <View style={cardStyle.eventLocation}>
                        <LocationIcon />
                        <Typography text={customerAddress} weight='bold' size='sm' color='white' />
                    </View>
                    <Typography text={action.status} weight='bold' size='sm' color='white' />
                </View>
            </View>
        </View>
    )

    if (action.status === "Unscheduled") return (
        <View style={cardStyle.container}>
            <View style={cardStyle.dateContainer}>
                <Typography text='TBD' weight='bold' size='sm' color={Colors.light.grey} />
            </View>
            <View style={cardStyle.eventCard}>
                <View style={cardStyle.eventDetails}>
                    <Typography text={action.name} weight='bold' color='white' />
                </View>
                <View style={cardStyle.eventDetails}>
                    <View style={cardStyle.eventLocation}>
                        <LocationIcon />
                        <Typography text={customerAddress} weight='bold' size='sm' color='white' />
                    </View>
                    <Typography text="Schedule date & time TBD" weight='bold' size='sm' color='white' />
                </View>
            </View>
        </View>
    )
}

export const EmptyEventCard = () => {
    const cardStyle = createStyles("none");

    return (
        <View style={cardStyle.container}>
            <View style={cardStyle.dateContainer} />
            <View style={[cardStyle.eventCard]}>
                <Typography text="No Maintenance Scheduled" weight='bold' color='white' />
            </View>
        </View>
    )
}

const createStyles = (status: string) => {
    let color = ""

    switch (status) {
        case "Scheduled":
            color = Colors.light.scheduledStatus
            break;
        case "Completed":
            color = Colors.light.completeStatus
            break;
        case "Unscheduled":
            color = Colors.light.unscheduledStatus
            break;
        default:
            color = Colors.light.noneStatus
            break;
    }

    return StyleSheet.create({
        eventCard: {
            padding: 20,
            borderRadius: 4,
            backgroundColor: color,
            flex: 1,
            gap: 14,
            alignItems: 'flex-start',
            justifyContent: 'center'
        },
        container: {
            flexDirection: 'row',
            gap: 10,
            minHeight: status === "none" ? 0 : 111
        },
        dateContainer: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex: .1,
            gap: 6,
        },
        eventDetails: {
            gap: 6,
        },
        eventLocation: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6
        }
    })
}