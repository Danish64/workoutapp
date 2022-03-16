import { View, Text, StyleSheet, Pressable } from "react-native";
import { Workout } from "../types/data";
import { formatSec, secToMin } from "../utils/time";

export default function WorkoutItem({item, onPress}: {item: Workout, onPress: () => void}){

    return (
        <Pressable
            onPress={onPress}
            >
            <View style={styles.container}> 
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.duration}>Duration: {formatSec(item.duration)}</Text>
                <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
            </View>
        </Pressable>
    );

}

const styles = StyleSheet.create({
    container:{

        borderRadius: 10,
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        padding: 10,
        marginBottom:10,
        backgroundColor: "#ffffff",

    },
    name: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
        fontFamily: "montserrat-bold"
    },

    difficulty: {
        fontSize: 15,
        fontFamily: "montserrat"
    },

    duration: {
        fontSize: 15,
        fontFamily: "montserrat"
    }
})