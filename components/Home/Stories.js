import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { users } from "../../data/users";

export default function Stories() {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((user, index) => {
          return (
            <React.Fragment key={index}>
              <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{ uri: user.image }} />
                <Text style={styles.avatarName}>
                  {user.name.length > 10
                    ? user.name.slice(0, 10) + "..."
                    : user.name}
                </Text>
              </View>
            </React.Fragment>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  storyContainer: {
    flexDirection: "row",
  },
  avatarContainer: {
    margin: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    height: 70,
    width: 70,
    padding: 5,
    borderColor: "#ff8501",
    borderWidth: 3,
    borderRadius: 50,
  },
  avatarName: {
    paddingTop: 5,
    color: "black",
    fontWeight: "600",
  },
});
