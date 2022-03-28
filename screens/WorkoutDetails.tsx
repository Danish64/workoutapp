import { StyleSheet, Text, View } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import { PressableText } from "../components/styled/PressableText";

type DetailParams = {
    route: {
        params: {
            slug: string
        }
    }
}

type Navigation = NativeStackHeaderProps & DetailParams

export default function WorkoutDetailsScreen({navigation, route}: Navigation) {

    const { slug } = route.params;

    const workout = useWorkoutBySlug(slug);

    if(!workout){
        return null;
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{workout.name}</Text>
            
            <PressableText 
                text="Check Sequence"
                onPress={() => alert("ModalOpening")}
            
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