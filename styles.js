import {StyleSheet} from "react-native";

export default StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    container: {
        flex:1,
        paddingTop: 35,
        backgroundColor: '#F5FCFF',
    },
    map:{
        flex: 1,
        paddingTop: 5,
        width: '100%',
        height: '100%',
    },
    brow:{
        flex:0,
        paddingTop: 35,
    },
    welcome: {

        height: 51,
        width: 342,
        color: '#FFFFFF',
         fontFamily: 'Helvetica',

        fontSize: 32,
        fontWeight: '300',
        lineHeight: 49,


        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#61de17',
        marginBottom: 5,
    },
    bg: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0,
        height: 1000,
        width: 454,

    },
    logo: {
        margin: 20,
        height: 73,
        width: 73,
    },
    buttonFacebook: {

        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 50,
        backgroundColor: '#4267B2',

    },
    facebook: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 72,
    fontWeight: "bold",
    lineHeight: 74,

}
});
