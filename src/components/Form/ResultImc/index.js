import React from "react";
import {View, Text, TouchableOpacity, Image, Share} from 'react-native';
// import of style
import styles from "./style";
export default function ResultImc({resultImc, modalVisible}){
    const onShare = async () =>{
        const result = await Share.share({message:`MEU IMC É: ${resultImc}`})
    }
    return(
        <View style={styles.viewinformation}>
           <View style={styles.viewContent}>
            <Text style={styles.imcInfor}>SEU IMC É:</Text>
           <Text style={styles.numberImc}>{resultImc}</Text>
           <Image source={require("../../../assets/tabela_imc.png")} alt="Tabela imc"
           style={styles.imgTab}
           />
           <View style={styles.viewButtons}>
            <TouchableOpacity style={styles.button} onPress={modalVisible}>
                <Text style={styles.textButton}>Voltar</Text>
            </TouchableOpacity>
           <TouchableOpacity style={styles.compartilhar} onPress={() => {onShare()}}>
            <Text style={styles.textCompartilhar}>Compartilhar</Text>
            </TouchableOpacity> 
           </View>
           
           </View>
        </View>
    )
}
