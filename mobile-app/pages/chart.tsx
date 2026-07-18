import React from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { Appbar } from 'react-native-paper';
import DrawChart from '../components/drawChart';
import HttpService from '../services/httpService';
import { formatChartData, formatTimeZoneForApi, ChartResponse, ChartProps, fallbackChartData, isChartData } from '../utils/chartPage';
import { useKundliStore } from '../store/kundliStore';
const { width } = Dimensions.get('window');

const apiService = new HttpService('http://192.168.1.10:9393');

export default function Chart({ onBack }: ChartProps) {
  const { latitude, longitude, year, month, day, hour, minute, timeZone } = useKundliStore();
  const [chartData, setChartData] = React.useState<
    Record<number, { rashi: string; planets: string[] }>
  >(fallbackChartData);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const params = {
          latitude,
          longitude,
          year,
          month: month.padStart(2, '0'),
          day: day.padStart(2, '0'),
          hour,
          min: minute,
          sec: '0',
          time_zone: formatTimeZoneForApi(timeZone),
          dst_hour: '0',
          dst_min: '0',
          nesting: '0',
          varga: 'D1',
          infolevel: 'basic,panchanga,transit',
        };
        const response = await apiService.get<ChartResponse>('/api/calculate', params);
        const formattedData = formatChartData(response.data.chart);
        if (response.ok && response.data?.chart) {
          setChartData(formattedData);
          console.log('Chart data fetched successfully:', formattedData);
        }

        if (!cancelled) setLoading(false);

        // console.log('Fetching chart data:', response.data);
      } catch (error) {
        console.log('Error fetching chart data:', error);
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [latitude, longitude, year, month, day, hour, minute, timeZone]);

  if (loading) {
    return (
      <View style={styles.wrapper}>
        <Appbar.Header>
          <Appbar.BackAction onPress={onBack} />
          <Appbar.Content title="Birth Chart" />
        </Appbar.Header>
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Appbar.Header>
        <Appbar.BackAction onPress={onBack} />
        <Appbar.Content title="Birth Chart" />
      </Appbar.Header>
      <View style={styles.container}>
        <DrawChart chartData={chartData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: { flex: .5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
});
