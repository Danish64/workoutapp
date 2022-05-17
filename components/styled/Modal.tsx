import { StyleSheet, Text, View, Modal as DefaultModal } from "react-native";
import { PressableText } from "./PressableText";
import { FunctionComponent, useState } from "react";

type ModalProps = {
    activator?: FunctionComponent<
        {
            handleOpen: () => void
        }
    >,
    children: FunctionComponent<
    {
        handleOpen: () => void,
        handleClose: () => void,
    }
>
} 

export function Modal({
    activator: Activator,
    children
}: ModalProps) {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleOpen = () => setIsModalVisible(true);
    const handleClose = () => setIsModalVisible(false);

    return (

        <>
            <DefaultModal 
                    visible={isModalVisible}
                    animationType="none"
                >
                    <View style={styles.modalContainer}>

                        <View style={styles.contentView}>

                            {children({handleOpen, handleClose})}
                            
                        </View>

                        <PressableText 
                            text="Close"
                            onPress={handleClose}
                        />

                    </View>
                    
                </DefaultModal>

                {   Activator ? 

                    <Activator 
                        handleOpen={handleOpen}
                        /> :
                    <PressableText 
                        text=""
                        onPress={handleOpen}
                    />

                }
                
            </>
            
    );
}

const styles = StyleSheet.create({
    
    modalContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    contentView:{
        marginBottom: 20
    }
})