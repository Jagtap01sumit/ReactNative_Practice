//Touchable Opacity

import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1646996900738-83771063aa6c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad magni
            maiores voluptatum sapiente distinctio deserunt, obcaecati dolore
            excepturi nostrum culpa optio atque pariatur quo modi. Esse labore
            vel blanditiis fuga. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Commodi eligendi, repellat, minus inventore
            tenetur neque, voluptatibus magnam voluptates magni eum aliquam.
            Aliquam harum ullam odit rerum eos doloremque laudantium
            exercitationem?
          </Text>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://reactnative.dev/docs/touchablewithoutfeedback',
                )
              }>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://reactnative.dev/docs/touchablewithoutfeedback',
                )
              }>
              <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 375,
    height: 370,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },

  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
    margin: 8,
  },
  bodyContainer: {padding: 10},
  footerContainer: {
    padding: 8,
    marginTop:12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 17,
    color:'#000',
    backgroundColor:'#ffffff',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6

  },
});
