import { View, ScrollView } from 'react-native';
import styles from './styles';
import Task from './Task';

export default function Tasks(props) {
    return (
        <ScrollView style={styles.container}>
            { props.tasks.map((task, index) => 
                <Task key={index} id={task.id} description={task.description} isDone={task.isDone} onStatusChange={props.onStatusChange} onTaskRemoval={props.onTaskRemoval}/>
            )}
        </ScrollView> 
    )
}