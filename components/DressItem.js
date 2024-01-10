import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const DressItem = ({ item }) => {
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#f8f8f8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 14,
        }}
      >
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: item.image }}
          />
        </View>

        <View>
          <Text>{item.name}</Text>
          <Text>${item.price}</Text>
        </View>

        <Pressable>
          <Text>Add</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({});
