import { EventItem } from '@/components/event/EventItem';
import useFetch from '@/hooks/useFetch';
import { fetchCalendar } from '@/services/calendar';
import { FlatList, View } from 'react-native';
import { ChallengeData } from '../models/ChallengeData';

export default function CalendarPage() {

  const { data } = useFetch<ChallengeData | null>(fetchCalendar)

  return (
    <View style={{ paddingHorizontal: 20 }}>
      {data && <FlatList
        data={data.calendar}
        renderItem={({ item }) => <EventItem month={item} customerAddress={data.customer.street} />}
        keyExtractor={(item) => item.month.toString()}

      />}
    </View>
  );
}
