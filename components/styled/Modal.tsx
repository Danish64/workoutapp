import { StyleSheet, Text, View, Modal as DefaultModal } from "react-native";
import { PressableText } from "./PressableText";
import { FunctionComponent, useState } from "react";

type ModalProps = {
    activator?: FunctionComponent<
        {
            handleOpen: () => void
        }
    >,
    children: React.ReactNode
} 

export function Modal({
    activator: Activator,
    children
}: ModalProps) {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    return (

        <>
            <DefaultModal 
                    visible={isModalVisible}
                    transparent
                    animationType="none"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.contentView}>
                            {children}
                        </View>
                        <PressableText 
                        text="Close"
                        onPress={() => setIsModalVisible(false)}
                    
                        />

                    </View>
                    
                </DefaultModal>

                {   Activator ? 

                    <Activator 
                        handleOpen={() => setIsModalVisible(true)}
                        /> :
                    <PressableText 
                        text=""
                        onPress={() => setIsModalVisible(true)}
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