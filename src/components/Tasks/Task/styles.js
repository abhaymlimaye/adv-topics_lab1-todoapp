import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'column',   
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#dfeaf7',
        marginBottom: 20,
    },  
    description: {
        fontSize: 20,
        marginBottom: 5,
    },  
    id: {
        fontSize: 12,
        color: 'slategray',
    },
    status: {
        padding: 5,
        borderRadius: 15,
        width: 60,
        textAlign: 'center',
    },
    statusOpen: {
        backgroundColor: 'pink',
    },
    statusCompleted: {
        backgroundColor: '#9edba6',
    },
    rowSpreadout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    rowAction: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 5,
        marginTop: 10,
        paddingBottom: 0,
        borderTopColor: 'lightblue',
        borderTopWidth: 1,
    },
    column80: {
        flex: 8,
        
    },
    column20: {
        flex: 2,
        padding: 5,
    },

    modal: {    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        padding: 20,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 20,
    },
    modalBody: {
        flexDirection: 'column',
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    toggleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 10,
    },
    btnRemove: {
        color: 'red',
    },
});

export default styles;