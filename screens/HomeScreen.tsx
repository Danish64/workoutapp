import { StyleSheet, Text, View, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import { MontserratText } from "../components/styled/MontserratText";
import { useEffect, useState } from "react";
import { getWorkouts } from "../storage/workout";

export default function HomeScreen({navigation}: NativeStackHeaderProps) {


    const [workouts, setWorkouts] = useState<Workout[]>([])

    useEffect(() => {
        async function getData() {
            const _workouts = await getWorkouts();
            setWorkouts(_workouts);

        }
        getData();

    }, []);

    
    return (
        <View style={styles.container}>
            {/* <Text style={styles.header}>Workouts</Text> */}
            <MontserratText style={styles.header}>Workouts</MontserratText>
            <FlatList 
                data={workouts}
                keyExtractor={item => item.slug}
                renderItem = {({item}) => {
                    return (
                        <WorkoutItem
                            item={item}
                            onPress={() => navigation.navigate('WorkoutDetail', {slug: item.slug})}
                        />
                     )}}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex: 1,
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontFamily: "montserrat-bold"
    }
})