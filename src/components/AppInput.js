import { Text, TextInput, View } from "react-native";

export default function AppInput(
    {label, error, ...props}
){
    return (
        <View>
            {label &&<Text>{label}</Text>}
            <TextInput {...props} />
            {error && <Text>{error}</Text>}
        </View>
    )
}