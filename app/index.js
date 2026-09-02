import { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    return(
        <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':undefined}>
          <View>
            <Text>Meu Bolso</Text>
            <Text>Controle suas finanças</Text>
          </View>
        </KeyboardAvoidingView>
    );
}