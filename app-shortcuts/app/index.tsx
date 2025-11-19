import { Text, View } from "react-native";
import { Platform } from "react-native";
import * as QuickActions from "expo-quick-actions";
import { useQuickActionCallback } from "expo-quick-actions/hooks";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Index() {

  useQuickActionCallback((action) => {
    console.log("action", action);
    if (action.id === "0") {
      router.push("/helper");
    } else if (action.id === "1") {
      router.push("/shortcut");
    }
  });
  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Helper!",
        subtitle: "Helper is here to help",
        icon: Platform.OS === "ios" ? "symbol:person.crop.circle.badge.questionmark" : "helper",
        id: "0",
        params: { href: "/helper" },
      },
      {
        title: "Shortcut!",
        subtitle: "Shortcut is here to help",
        icon: Platform.OS === "ios" ? "symbol:person.crop.circle.badge.questionmark" : "shortcut",
        id: "1",
        params: { href: "/shortcut" },
      },
    ]);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
