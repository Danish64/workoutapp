import { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import ExerciseForm, { ExerciseFormData } from "../components/ExerciseForm";
import { SequenceItem, SequenceType } from "../types/data";
import slugify from "slugify";
import ExerciseItem from "../components/ExerciseItem";
import { PressableText } from "../components/styled/PressableText";




export default function PlannerScreen({navigation}: NativeStackHeaderProps) {

    const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

    const handleFormSubmit = (formData: ExerciseFormData) => {
        const sequenceItem: SequenceItem = {
            slug: slugify(formData.name + " " + Date.now(), {lower: true}),
            name: formData.name,
            duration: Number(formData.duration),
            type: formData.type as SequenceType,
        }

        if(formData.reps){
            sequenceItem.reps = Number(formData.reps);
        }

        setSeqItems([...seqItems, sequenceItem]);
    }

    

    return (
        <View style={styles.container}>
            <FlatList 
                data={seqItems}
                keyExtractor={item => item.slug}
                renderItem={({item, index}) => 
                    <ExerciseItem item={item}>
                        <PressableText 
                            text="Remove"
                            onPressIn={() => {
                                const items = [...seqItems];
                                items.splice(index, 1);
                                setSeqItems(items);
                            }}
                        />
                    </ExerciseItem>
                }
            />
            <ExerciseForm
                onSubmit={handleFormSubmit}
            />
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
});