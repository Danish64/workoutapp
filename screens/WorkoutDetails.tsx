import { StyleSheet, Text, View } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

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
    

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{slug}</Text>
        
            
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