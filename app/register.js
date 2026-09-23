<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8f01d5270c4fca04ec5236db08c4a6188124f5cb
import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { router } from "expo-router";
import AppButton from "../src/components/AppButton";
import AppInput from "../src/components/AppInput";
<<<<<<< HEAD

=======
=======
import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

import AppInput from "../src/components/AppInput";
import AppButton from "../src/components/AppButton";
import { router } from "expo-router";
>>>>>>> f20662504c4a37dae431d8becaddb4b85c3162ca
>>>>>>> 8f01d5270c4fca04ec5236db08c4a6188124f5cb

export default function Register() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8f01d5270c4fca04ec5236db08c4a6188124f5cb
    const [confirm, setConfirm] = useState("");

    async function handleRegister(){
      //  console.log('Cadastrando usuário',email, password, confirm);
        if(!nome.trim() || !email.trim() || !password.trim() || !confirm.trim() )
            return Alert.alert('Atenção', 'Preencha todos os campos.');
        if(password.lenght<6)
            return Alert.alert('Atenção', 'A senha deve ter no mínimo 6 caracteres.');
        if(password!==confirm)
            return Alert.alert('Atenção', 'As senhas não conferem.')
<<<<<<< HEAD

        try{
            setLoading(true);
            if(error){Alert.alert('Erro no cadastro',error.message)
            console.log('Erro no cadastro',error.message);
            return;
        }   else  {
            Alert.alert('Sucesso!', 'Conta criada com sucessir, faça o login para continuar.');
            router.replace('/');
        }

        }finally{
            setLoading(false);
        }
    };
=======
    };
=======
>>>>>>> f20662504c4a37dae431d8becaddb4b85c3162ca

>>>>>>> 8f01d5270c4fca04ec5236db08c4a6188124f5cb
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <View>
                <Text style={styles.title}>Meu Bolso</Text>

                <Text style={styles.subtitle}>
                    Crie sua conta.
                </Text>

                <AppInput
                    label="Nome"
                    placeholder="Nome completo"
                    autoCapitalize="words"
                    onChangeText={setNome}
                    value={nome}
                />

                <AppInput
<<<<<<< HEAD
                    label="E-mail"
=======
<<<<<<< HEAD
                    label="E-mail"
=======
                    label="Email"
>>>>>>> f20662504c4a37dae431d8becaddb4b85c3162ca
>>>>>>> 8f01d5270c4fca04ec5236db08c4a6188124f5cb
                    placeholder="seu@email.com"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                />

                <AppInput
                    label="Senha"
                    placeholder="******"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <AppButton
                    title="Criar conta"
<<<<<<< HEAD
                    loading={loading} onPress={handleRegister}
=======
<<<<<<< HEAD
                    loading={loading} onPress={handleRegister}
=======
                    loading={loading}
>>>>>>> f20662504c4a37dae431d8becaddb4b85c3162ca
>>>>>>> 8f01d5270c4fca04ec5236db08c4a6188124f5cb
                />

                <TouchableOpacity
                    onPress={() => router.push("/")}
                >
                    <Text style={styles.link}>
                        Entrar na conta
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#f8f9fa",
    },

    title: {
        fontSize: 34,
        fontWeight: "900",
        color: "#2f3540",
        textAlign: "center",
    },

    subtitle: {
        color: "#7f8c9d",
        textAlign: "center",
        marginBottom: 32,
    },

    link: {
        color: "#008f72",
        textAlign: "center",
        marginTop: 20,
        fontWeight: "700",
    },
});
