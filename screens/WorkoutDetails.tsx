import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import { PressableText } from "../components/styled/PressableText";
import { Modal } from "../components/styled/Modal";
import { formatSec } from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";
import WorkoutItem from "../components/WorkoutItem";
import { SequenceItem } from "../types/data";
import useCountDown from "../hooks/useCountDown";

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
    const [sequence, setSequence] = useState<SequenceItem[]>([]);
    const [trackerIdx, setTrackerIdx] = useState(-1);   
    const workout = useWorkoutBySlug(slug);

    const countDown = useCountDown(
        trackerIdx,
        trackerIdx >= 0 ? sequence[trackerIdx].duration : -1
    );
    
    useEffect(() => {
        console.log(countDown);
        if(!workout) { return; }

        if(trackerIdx === workout.sequence.length - 1) { return; }

        if(countDown === 0){
            addItemToSequence(trackerIdx + 1);
        }
    }, [countDown]);

    

    const addItemToSequence = (idx: number) => {
        setSequence([...sequence, workout!.sequence[idx]]);
        setTrackerIdx(idx);
    }



    if(!workout){
        return null;
    }
    

    const hasReachedEnd = sequence.length === workout.sequence.length && countDown === 0;

    return (
        <View style={styles.container}>
            <WorkoutItem 
                item={workout}
                childStyles={{ marginTop: 10 }}
            >
            
                <Modal activator = {({handleOpen}) => 
                    <PressableText 
                        text="Check Sequence"
                        onPress={handleOpen}
                    />}
                >
                    <View>
                        {
                            workout.sequence.map((item, idx) => 
                                <View 
                                    style={styles.sequenceItem}
                                    key={item.slug}>
                                    <Text>
                                        {item.name} | {item.type} | {formatSec(item.duration)}
                                    </Text>
                                    {
                                        idx !== workout.sequence.length -1 && 
                                        <FontAwesome 
                                            name="arrow-down"
                                            size={20}
                                        />
                                    }
                                    
                                </View>

                                )
                        }

                    </View>

                </Modal>
            </WorkoutItem>
            <View style={styles.centerView}>
                {
                    sequence.length === 0 &&
                    <FontAwesome 
                        name="play-circle-o"
                        size={100}
                        onPress={() => addItemToSequence(0)}
                    />
                }

                {
                    sequence.length > 0 && countDown >= 0 && 
                    <View>
                        <Text style={styles.countDownText}>
                            {countDown}
                        </Text>
                    </View>
                }
                
            </View>
            <View>
                <Text>
                    {
                        sequence.length === 0 ? 
                         "Prepare" : 
                        hasReachedEnd ? 
                        "Great Job" : sequence[trackerIdx].name 
                    }
                </Text>
            </View>
            
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
    },
    modalContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    sequenceItem:{
        alignItems: 'center'
    },
    centerView:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 20
    },
    countDownText: {
        fontSize: 55
    }
})