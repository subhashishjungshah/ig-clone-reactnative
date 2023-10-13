import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/ig-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.iconLove}
            source={{
              uri: "https://img.icons8.com/ios/50/null/hearts--v1.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>10</Text>
          </View>
          <Image
            style={styles.iconMessage}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5728/5728145.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLove: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  iconMessage: {
    width: 25,
    height: 25,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3260",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderColor: "white",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
