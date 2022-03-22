import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import Menu from '../component/Menu';

const Home = (props) => {
  const description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. ";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Text style={styles.sub}>Home</Text>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/home3.png")}
        />

        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: "#4c5dab",
            },
          ]}
        >
          {props.softwareName}
        </Text>

        <Text style={styles.paraStyle}>{description} </Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle, { marginVertical: 10 }]}></View>
      </View>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  sub: {
    fontSize: 18,
    backgroundColor: "blue",
    height: "100%",
    width: "100%",
    justifyContent:"center",
    alignItems:"center"
  },

  homeTop: {
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: -40,
    borderRadius: 20,
  },

  mainHeader: {
    marginTop: -2,
    fontSize: 40,
    color: "#344055",
    textTransform: "uppercase",
    // fontFamily: "Nunito_600SemiBold",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
    // fontFamily: "JosefinSans_400Regular",
  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
});