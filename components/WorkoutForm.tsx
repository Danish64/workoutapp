import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { PressableText } from "./styled/PressableText";
import { useForm, Controller } from "react-hook-form";

export type WorkoutFormData = {
    name: string,
}

type WorkoutProps = {
    onSubmit: (form: WorkoutFormData) => void
}


export default function WorkoutForm({
    onSubmit 
}: WorkoutProps){

    const { control, handleSubmit } = useForm();

    return(
        <View style={styles.container}>
            
                <Controller 
                    control={control}
                    rules = {{
                        required: true
                    }}
                    name="name"
                    render={({field : {onChange, value}}) => 
                        <TextInput 
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            placeholderTextColor={"rgba(0,0,0,0.3)"}
                            placeholder="Workout"
                        />
                    }
                />
                <PressableText 
                    text="Confirm"
                    style={{marginTop:10, alignSelf: "center"}}
                    onPress={handleSubmit((data) => {
                        onSubmit(data as WorkoutFormData);
                    })}
                />
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 10
    },
    input:{
        height: 30,
        width: 300,
        margin: 2,
        marginVertical: 3,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderColor: "rgba(0,0,0, 0.4)"
     },
    rowContainer:{
        flexDirection: "row",
    },
    selection: {
        margin: 2,
        padding: 3,
        alignSelf: "center"
    }  

})