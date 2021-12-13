import { StyleSheet, Dimensions } from "react-native"

const deviceWidth = Math.round(Dimensions.get("window").width)

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
        paddingTop: 10,
        flexDirection: 'row',
        width: deviceWidth - 50,
        height: "auto",
        margin: "auto",
        textAlign: "center",
        alignSelf: "center",
        flexWrap: "wrap",
    },
    cardContainer:{
        width: "100%",
        borderRadius: 50,
        height: 350,
        borderWidth: 2,
        borderColor: '#000',
        marginBottom: '5%',
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            heigth: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9
        
    },
    imagem: {
        resizeMode: "contain",
        height: 200,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50

    },
    nome: {
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: '800',
        textAlign: "center"
    },

    title: {
        fontSize: 25,
        width: "100%",
    },
    desc:{
        paddingBottom: 5,
        paddingTop: 5,
        fontSize: 15,
        width: "100%",
        textAlign: "center"
    },
    price:{
        fontSize: 20,
        width: "100%",
        textAlign: "center",
        paddingBottom: 10
    },
    button: {   
        backgroundColor: '#1FB550',
        borderRadius: 5,
        height: 25,
        width: 100,
        margin: "auto",
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
        alignSelf: "center",
    },

})

export default styles;