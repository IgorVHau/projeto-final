import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    logOut: {
        justifyContent: 'flex-end',
        fontSize: 20,
        alignItems: 'center',
        width: 100,
        height: 25,
        borderRadius: 10,
        margin: 15
    },
    container: {
        flexDirection: 'row',
        marginTop: '5%',
        height: 130,
        marginRight: '5%',
        marginLeft: '5%',
        backgroundColor: '#F4F5E8',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
    },
    imagem: {
        margin: '1%',
        height: '95%',
        width: '30%',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#2EC93D',
    },
    imagemHeader: {
        width: "100%",
        height: 170,
    },
    nome: {
        marginTop: 20,
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: '800'
    },
    cargocontainer: {
        width: 250,
        flexDirection: 'column',
        alignItems: 'center',
    },
    idadecontainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    cargo: {
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
    },
    button: {  
        borderBottomColor: '#000', 
        marginTop: 20,
        backgroundColor: '#FB955C',
        borderRadius: 5,
        height: 25,
        width: 100,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
    },
    separator: {
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 8,
        alignItems: 'center',
    },   
})

export default styles;