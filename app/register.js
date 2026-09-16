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

export default function Register() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState("");

    async function handleRegister(){
      //  console.log('Cadastrando usuário',email, password, confirm);
        if(!nome.trim() || !email.trim() || !password.trim() || !confirm.trim() )
            return Alert.alert('Atenção', 'Preencha todos os campos.');
        if(password.lenght<6)
            return Alert.alert('Atenção', 'A senha deve ter no mínimo 6 caracteres.');
        if(password!==confirm)
            return Alert.alert('Atenção', 'As senhas não conferem.')
    };

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
                    label="E-mail"
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
                    loading={loading} onPress={handleRegister}
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
