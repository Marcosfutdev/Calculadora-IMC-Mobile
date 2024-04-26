import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Vibration, Modal,} from 'react-native';
// import of component
import ResultImc from './ResultImc/';
// import style
import styles from './style'
export default function Form(){
    const [height, setHeight] = React.useState(null); // altura
    const [weight, setWeight] = React.useState(null); // peso
    const [resultImc, setResultImc] = useState(null); // resultado
    const [textbutton, setTextButton] = useState("Calcular"); //button calcular
    const [errorIncompletedField1, setErrorIncompletedField1] = React.useState(null); // campo obrigatório
    const [errorIncompletedField2, setErrorIncompletedField2] = React.useState(null); // campo obrigatório
    const [modalVisible, setModalVisible] = React.useState(false); // visualizar Modal
    function imcCalculation(){
        let heightReplace = height.replace(",", ".")
       return (setResultImc(weight / (heightReplace ** 2).toFixed(1)))
      
    }
    function verificationFieldIfisCompleted(){
     if(resultImc !== null){
        setErrorIncompletedField1(null);
        setErrorIncompletedField2(null);
     }
     else{
     setErrorIncompletedField1("Campo obrigatório*");
     setErrorIncompletedField2("Campo obrigatório*");
     }
    }
    
    function validation(){
        if(height != null && weight != null){
            Vibration.vibrate();
            imcCalculation();
            setHeight(null);
            setWeight(null); 
            setTextButton("Calcular novamente")
            setModalVisible(true);
        }
         else{
            verificationFieldIfisCompleted();
            setResultImc(null);
            setTextButton("Calcular");
           
         }
       }
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput placeholder='Ex. 1.80' keyboardType="numeric"
                onChangeText={setHeight}
                value={height}
                style={styles.formTextInput}
                />
                <Text style={styles.alertaText}>{errorIncompletedField1}</Text>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput placeholder='Ex. 89.5' keyboardType="numeric"
                onChangeText={setWeight}
                value={weight}
                 style={styles.formTextInput}
                />
                <Text style={styles.alertaText}>{errorIncompletedField2}</Text>
               <TouchableOpacity style={styles.ButtonCaculator} onPress={() => {validation()}}>
                <Text style={styles.textbuttonCaculator}>{textbutton}</Text>
               </TouchableOpacity>
            </View>
           <Modal visible={modalVisible} transparent={true}>
           <ResultImc resultImc={resultImc} modalVisible={() =>{setModalVisible(false)}}/>
           </Modal>
        </View>
    )
}