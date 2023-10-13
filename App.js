import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "./components/Home/Header";
import Stories from "./components/Home/Stories";
import Post from "./components/Home/Post";
import BottomTabIcons from "./components/Home/BottomTabs";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Post />
        <Post />
      </ScrollView>
      <BottomTabIcons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
