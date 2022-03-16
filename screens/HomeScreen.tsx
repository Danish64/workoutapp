import { StyleSheet, Text, View, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from '../data.json';
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import { MontserratText } from "../components/styled/MontserratText";

export default function HomeScreen({navigation}: NativeStackHeaderProps) {

    
    return (
        <View style={styles.container}>
            {/* <Text style={styles.header}>Workouts</Text> */}
            <MontserratText style={styles.header}>Workouts</MontserratText>
            <FlatList 
                data={data as unknown as Workout[]}
                keyExtractor={item => item.slug}
                renderItem = {WorkoutItem}
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