import { Text } from "native-base";
import { StyleSheet } from "react-native";

const Badge = ({ type }) => {
    return <Text style={styles.text}>{type}</Text>;
};

const styles = StyleSheet.create({
    text: {
        padding: 5,
        borderColor: "red",
        borderWidth: 2,
        marginEnd: 5,
        // width: 50,
    },
});

export default Badge;
