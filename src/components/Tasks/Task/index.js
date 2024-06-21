import { View, Text, Pressable, Modal, Switch, Alert } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

export default function Task(props) {
    const [showModal, setShowModal] = useState(false);

    const handleRemovePress = () => {
        Alert.alert(
            "Remove Task",
            "Are you sure? This action cannot be undone!", 
            [{
                text: 'Confirm',
                onPress: () => {
                    props.onTaskRemoval(props.id);
                    setShowModal(false);
                }
            },
            { text: 'Cancel' }]
        );
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.rowSpreadout}>
                    <View style={styles.column80}>
                        <Text style={styles.description}> {props.description} </Text>
                        <Text style={styles.id}> Id: {props.id} </Text>
                    </View>

                    <View style={styles.column20}>      
                        <Text 
                            style={[styles.status, props.isDone ? styles.statusCompleted : styles.statusOpen]}> 
                                {props.isDone ? "Done" : "Due"} 
                        </Text>
                    </View>  
                </View>

                <View style={styles.rowAction}>         
                    <Pressable onPress={handleRemovePress}><FontAwesome5 style={styles.btnRemove} name="trash" size={20}/></Pressable> 
                    <Switch value={props.isDone} onValueChange={()=>props.onStatusChange(props.id)}/> 
                </View>
            </View>
        </>   
    )
}