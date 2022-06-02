import React from "react";
import { Heading, NativeBaseProvider, VStack } from "native-base";
import { MainProvider } from "./src/context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Home } from "./src/view";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <MainProvider>
            <NativeBaseProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{ title: "Accueil" }}
                        />
                        <Stack.Screen
                            name="poke_details"
                            component={Details}
                            options={{ title: "Détails pokémon" }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </MainProvider>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
