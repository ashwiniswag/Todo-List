import React, {useState, useRef} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated
} from 'react-native';

import store from './src/store';
import { taskDelete, taskDone } from './src/actions';
import { useSelector, Provider } from 'react-redux';
import ModalPopUp from './src/components/modalpopup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTask from './src/components/addTask';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Stack = createNativeStackNavigator();

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='To-Do-List' component={App} />
          <Stack.Screen name='Create' component={AddTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const App = ({navigation}) => {

  const data = useSelector(state => state);
  const [visible,setVisible] = useState(false);
  const [chooseTaskDesc,setChooseTaskDesc] = useState({});
  const scaleValue = useRef(new Animated.Value(0)).current;

  const createTaskbtn = () => {
    navigation.navigate('Create');
  }
  const removeItem = (id: number) => {
    // console.log("Task done id: " + id);
    store.dispatch(taskDelete(id));
  }

  const updateStatus = (item) => {
    if(item.status === 'Incomplete')
      store.dispatch(taskDone(item.id));
    else
      removeItem(item.id);
  }

  const showDesc = (description: {}) => {
    setChooseTaskDesc(description);
    setVisible(true);
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      friction: 2000,
    }).start();
  }

  const modalExit = () => {
    
    setTimeout(()=> setVisible(false), 200);
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  const rightSwipe = () => {
     <View style={styles.deleteBox}>
       <Text>Delete</Text>
     </View>
  }

  const renderItem = ({item}) => {
    return (
    // <Swipeable 
    //           renderRightActions={rightSwipe}
    //         >
        <View style={styles.list}>
          <TouchableOpacity onPress={() => updateStatus(item)} style={styles.img}>
            <Image style={{height: 20, width: 20}} source={item.status==='Incomplete'? require('./image/radioButton.png'):require('./image/tick.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 4}} onPress={() => showDesc(item)}>
            <Text style={styles.listtxt} >{item.task}</Text>
          </TouchableOpacity>
        </View>
      // </Swipeable>
  )};

  return (
    <View style={styles.container}>
      <ModalPopUp visible={visible} scaleValue={scaleValue}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => modalExit()}>
              <Image source={require('./image/close.png')} style={{height: 15, width: 15, marginRight: 10 }}/>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginVertical: 10}}>{chooseTaskDesc.task}</Text>
        <Text style={{marginVertical: 10, fontSize: 20, textAlign: 'center'}}>{chooseTaskDesc.description}</Text>
      </ModalPopUp>
      <TouchableOpacity style={styles.addbtn} onPress={() => createTaskbtn()}>
        <Image style={{height:50, width: 50}} source={require('./image/plus.png')} />
      </TouchableOpacity>
      <View style={styles.showList} >
        <FlatList 
          data={store.getState()}
          renderItem = {renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEFEC'
  },
  navbar: {
    flex: 1,
    backgroundColor: '#98ddca',
    maxHeight: 50
  },
  navTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#627296',
    textAlign: 'center'
  },
  addbtn: {
    position: 'absolute',
    zIndex: 1,
    bottom: 25,
    right: 30
  },
  header: {
    alignItems: 'flex-end',
    width: '100%',
    height: 30,
    justifyContent: 'center'
  },
  showList: {
    flex: 4,
  },
  list: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    maxHeight: 50,
    minHeight: 50,
    borderBottomWidth: 0.8,
    borderTopColor: '#113456',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listtxt: {
    flex: 4,
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlignVertical: 'center',
  },
  img: {
    flex: 2,
    paddingLeft: 5,
    borderRadius: 5,
    maxHeight: 20,
    maxWidth: 20
  },
  listView: {
    flex: 1
  },
  deleteBox: {
    backgroundColor: 'red'
  }
});

export default AppWrapper;
