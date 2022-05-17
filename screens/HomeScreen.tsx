import { StyleSheet, Text, View, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WorkoutItem from "../components/WorkoutItem";
import { MontserratText } from "../components/styled/MontserratText";
import { useWorkouts } from "../hooks/useWorkouts";
import { ThemeText } from "../components/styled/Text";


export default function HomeScreen({navigation}: NativeStackHeaderProps) {


    const workouts = useWorkouts();

    
    return (
        <View style={styles.container}>
            {/* <Text style={styles.header}>Workouts</Text> */}
            <ThemeText style={styles.header}>Workouts</ThemeText>
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