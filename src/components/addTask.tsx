import React, { useState} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import store from '../store';
import { taskAdded } from '../actions';



const AddTask = ({navigation}) => {

    const [task,setTask] = useState('');
    const [description,setDescription] = useState('');

    const addItem = () => {
        if(!task) return;
        store.dispatch(taskAdded(task, description));
        setTask('');
        setDescription('');
        navigation.navigate('To-Do-List');
    }

    return (
        <View style={styles.addWork} >
            <TouchableOpacity style={styles.savebtn} onPress={() => addItem()}>
                <Image 
                    style={{height: 50, width: 50}}
                    source={require('../../image/check.png')}
                />
            </TouchableOpacity>
            
            <TextInput 
            style={styles.tasktxt}
            defaultValue= {task}
            onChangeText={setTask}
            placeholder='Task...' 
            value={task} 
            />
            <TextInput 
            style={styles.desctxt}
            defaultValue= {description}
            onChangeText={setDescription}
            placeholder='Task Description...' 
            value={description}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    addWork:{
        flex: 1,
      },
      tasktxt: {
        flex: 1,
        fontSize: 20,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'white',
        minHeight: 50,
        maxHeight: 50,
        borderBottomColor: '#113456',
        borderBottomWidth: 0.8
      },
      desctxt: {
        flex: 1,
        fontSize: 15,
        textAlignVertical: 'top',
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'white',
        minHeight: 50,
      },
      savebtn: {
        position: 'absolute',
        zIndex: 1,
        bottom: 25,
        right: 30
      }
});

export default AddTask;