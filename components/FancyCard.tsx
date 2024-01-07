import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Nature View</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            iste voluptatem laudantium perspiciatis odit dolore dignissimos,
            autem ipsam totam facere.
          </Text>
          <Text style={styles.cardFooter}>Pink City, Jaipur</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {

    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,

  },
  card: {
    width:375,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16,
    alignContent: 'center',
    // justifyContent:'center'
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12,
  },
  cardImage: {
    height: 200,
    marginBottom:8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
  },
  cardTitle: {
    color:'#000000',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:4,
  },
  cardLabel: {
    color:'#000000',
    fontSize:14,
    marginBottom:6,
  },
  cardDescription: {
    color:'#000000',
    fontSize:12,
    marginBottom:4,
    marginTop:6,
    flexShrink:1,
  },
  cardFooter: {},
  cardElevated: {
    backgroundColor:'#FFFFFF',
    elevation:3,
    shadowOffset:{
        width:1,
        height:1,
    },
  },
});
