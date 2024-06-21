import { View, Text, TextInput, Switch, Button, Keyboard } from 'react-native';
import { useState } from 'react';
import styles from './styles';

export default function Form(props) {
    const [description, setDescription] = useState("");
    const [isDone, setIsDone] = useState(false);
    const [isError, setIsError] = useState(false);
    const [disableAction, setDisableAction] = useState(false);
    const [btnText, setBtnText] = useState("Add");

    const handleOnAddPress = () => {
        if(description) {
            props.onAddTask(description, isDone);

            setDisableAction(true);
            setBtnText("Saved ✓");

            setTimeout(() => {
                setDisableAction(false);
                setBtnText("Add");
                setIsError(false);
                setDescription("");
                setIsDone(false);
            }, 1500);

            Keyboard.dismiss();
        }
        else setIsError(true);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter a Task Title"
                maxLength={100}
                value={description}
                onChangeText={setDescription}
                editable={!disableAction}
            ></TextInput>

            {isError && <Text style={styles.error}> Description is required! </Text>}

            <View style={styles.taskStatus}>
                <Text>Completed:</Text>
                <Switch
                    onValueChange={setIsDone}
                    value={isDone}
                    disabled={disableAction}
                />
            </View>

            <Button title={btnText} onPress={handleOnAddPress} disabled={disableAction}/>
        </View>
    )
}