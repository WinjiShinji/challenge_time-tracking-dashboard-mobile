import { ScrollView, StyleSheet, View } from "react-native"
import CardProfile from "../components/CardProfile"
import { AppProvider } from "@/context/AppContext"
import { SafeAreaView } from "react-native-safe-area-context"
import data from "../data/data.json"
import CardComponent from "@/components/CardComponent"

export default function Index() {
  const activityData = data[0]

  return (
    <SafeAreaView>
      <ScrollView style={styles.main}>
        <AppProvider>
          <CardProfile />
          <CardComponent
            data={activityData.work}
            image={require("../assets/images/icon-work.png")}
            color={"hsl(15, 100%, 70%)"}
          />
          <CardComponent
            data={activityData.play}
            image={require("../assets/images/icon-play.png")}
            color={"hsl(195, 74%, 62%)"}
          />
          <CardComponent
            data={activityData.study}
            image={require("../assets/images/icon-study.png")}
            color={"hsl(348, 100%, 68%)"}
          />
          <CardComponent
            data={activityData.exercise}
            image={require("../assets/images/icon-exercise.png")}
            color={"hsl(145, 58%, 55%)"}
          />
          <CardComponent
            data={activityData.social}
            image={require("../assets/images/icon-social.png")}
            color={"hsl(264, 64%, 52%)"}
          />
          <CardComponent
            data={activityData.selfcare}
            image={require("../assets/images/icon-self-care.png")}
            color={"hsl(43, 84%, 65%)"}
          />
        </AppProvider>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "hsl(226, 43%, 10%)",
  },
})