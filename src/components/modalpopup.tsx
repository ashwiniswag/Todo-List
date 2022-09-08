import React, {useState} from 'react';
import { 
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Animated
} from 'react-native';

const ModalPopUp = ({visible, children, scaleValue}) => {
    // const [showModal, setShowModal] = useState(visible);

    return (
        <Modal transparent visible={visible}>
            <View style={styles.modalBackground}>
                 <Animated.View style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
                    {children}
                 </Animated.View>
            </View>
        </Modal>
    )
}

const styles=StyleSheet.create({
    modalBackground: {
         flex: 1,
         backgroundColor: "rgba(0,0,0,0.5)",
         justifyContent: "center",
         alignItems: "center"
    },
    modalContainer: {
         width: '80%',
         backgroundColor: 'white',
         paddingHorizontal: 2,
         paddingVertical: 30,
         borderRadius: 20,
         elevation: 20,
         borderWidth: 2, 
         borderColor: "#98ddca"
    }
});

export default ModalPopUp; 