import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
viewinformation:{
alignItems:"center",
backgroundColor:"rgba(24, 24, 24, 0.6)",
height:"100%",
width:"100%",
},
viewContent:{
    backgroundColor:"white",
    width:"97%",
    height:"auto",
    alignItems:"center",
    justifyContent:"center",
    marginTop:258,
    borderRadius:8,
},
numberImc:{
    color:"red",
    fontSize:24,
    fontWeight:"bold"

},
imcInfor:{
    fontSize:22,
    marginTop:10
},
viewButtons:{
    flexDirection:"row",
    marginTop:10,
    width:"100%",
   alignItems:"center",
   justifyContent:"center",
   marginBottom:10,
   gap:20,
},
button:{
    borderRadius:8,
    padding:10,
    backgroundColor:"transparent",
},
textButton:{
color:"black",
fontWeight:"bold",
fontSize:15,
},
imgTab:{
    height:175,
    width:"98%",
    marginBottom:5,
},
compartilhar:{
    borderRadius:8,
    padding:10,
    backgroundColor:"red",
    alignItems:"center",
},
textCompartilhar:{
color:"white",
fontWeight:"bold",
fontSize:15,
}
})
export default styles