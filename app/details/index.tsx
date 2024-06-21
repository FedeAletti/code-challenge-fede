import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Action } from '../models/ChallengeData'
import { useLocalSearchParams } from 'expo-router'
import Typography from '@/components/ui/Typography'
import { getDay } from '@/utils/getDay'
import { monthMap } from '@/constants/months'
import { Colors } from '@/constants/Colors'
import { postChanges } from '@/services/calendar'

const DetailsPage = (props) => {

    const { action, customerAddress } = useLocalSearchParams()

    const actionObj = JSON.parse(action as string)

    let dateString = `${monthMap[new Date(actionObj.scheduledDate!).getDate().toString()]}, ${new Date(actionObj.scheduledDate!).getFullYear()}`

    const [name, setName] = useState(actionObj.name)

    const sendData = async () => {
        await postChanges({ id: actionObj.id, name: name })
    }


    return (
        <View style={{ paddingHorizontal: 20, backgroundColor: 'white', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Typography text={dateString} weight='bold' size='lg' />
                <Typography text={actionObj.status} weight='bold' size='lg' />
            </View>

            <View style={{ marginVertical: 20 }}>
                <Typography text="Service name" size='base' weight='bold' />

                <TextInput placeholder={name} value={name} onChangeText={(e) => setName(e)} />
            </View>

            <View style={{ marginVertical: 20, gap: 6 }}>
                <Typography text="Provided by" size='base' weight='bold' />
                <Typography text={actionObj.vendor?.vendorName} size='base' />
                <Typography text={actionObj.vendor?.phoneNumber} size='base' color={Colors.light.tint} />
            </View>

            <Pressable onPress={sendData}>
                <Typography text="Save changes" size='base' color={Colors.light.tint} />
            </Pressable>
        </View>
    )
}

export default DetailsPage