import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from './Typography';

interface TabTitleProps {
    title: string
}

export function TabTitle({ title }: TabTitleProps) {

    const { top } = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <Typography text={title} weight='bold' />
            <View style={styles.divider} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 110,
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        width: "70%",
        height: .5,
        marginTop: 10,
        backgroundColor: '#DCDCDC',
    }
})