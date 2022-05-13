import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { PressableText } from "./styled/PressableText";
import { useForm, Controller } from "react-hook-form";

export type ExerciseFormData = {
    name: string,
    duration: string,
    type: string,
    reps?: number 
}

type WorkoutProps = {
    onSubmit: (form: ExerciseFormData) => void
}

const selectionItems = ["exercise", "stretch", "break"]; 

export default function ExerciseForm({
    onSubmit 
}: WorkoutProps){

    const { control, handleSubmit } = useForm();
    const [isSelectionOn, setIsSelectionOn] = useState(false);

    return(
        <View style={styles.container}>
            <Text>Exercise Form</Text>
            <View>
                <View style={styles.rowContainer}>
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
                                placeholder="Exercise Name"
                            />
                        }
                    />

                    <Controller 
                        control={control}
                        rules = {{
                            required: true
                        }}
                        name="duration"
                        render={({field : {onChange, value}}) => 
                            <TextInput 
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                                placeholder="Exercise Duration"

                            />
                        }
                    />

                </View>
                        
                <View style={styles.rowContainer}>

                    <Controller 
                        control={control}
                        name="reps"
                        render={({field : {onChange, value}}) => 
                            <TextInput 
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                                placeholder="Exercise Repetition"

                            />
                        }
                    />

                    <Controller 
                        control={control}
                        rules = {{
                            required: true
                        }}
                        name="type"
                        render={({field : {onChange, value}}) => 
                        <View style={{flex:1}}>

                            {
                                isSelectionOn ? 
                                <View>
                                    {selectionItems.map((selection => <PressableText 
                                        text={selection} 
                                        key={selection} 
                                        onPressIn={() => {
                                            onChange(selection);
                                            setIsSelectionOn(false);
                                        }}  
                                        style={styles.selection}

                                        />))}

                                    
                                    

                                </View> : 

                                <TextInput 
                                    onPressIn={() => setIsSelectionOn(true)}
                                    style={styles.input}
                                    placeholder="Exercise Type"
                                    value={value}
                                />
                            }

                            
                        </View>
                        }
                    />

                </View>


                <PressableText 
                    text="Submit"
                    onPress={handleSubmit((data) => {
                        onSubmit(data as ExerciseFormData);
                    })}
                />
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 10
    },
    input:{
        flex: 1,
        height: 30,
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