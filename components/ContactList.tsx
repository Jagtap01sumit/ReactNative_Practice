import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'doremon dora',
      status: 'Just an extra ordinary teacher',
      imageUrl:
        'https://w7.pngwing.com/pngs/255/370/png-transparent-doraemon-war-tank-television-doraemon-doraemon-cartoon-flower-fictional-character.png',
    },
    {
      uid: 2,
      name: 'Nobita nobi',
      status: 'Student learning new Things',
      imageUrl:
        'https://i.pinimg.com/originals/c5/03/b8/c503b89ab9612d4fa69285e1324b165f.png',
    },
    {
      uid: 3,
      name: 'Shizuka shizu',
      status: 'Student learning new Things',
      imageUrl:
        'https://w7.pngwing.com/pngs/313/179/png-transparent-shizuka-minamoto-doraemon-nobita-nobi-film-television-doraemon-doraemon-nobi-film-thumbnail.png',
    },
    {
      uid: 4,
      name: 'Gian gada',
      status: 'Student learning new Things',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWwh6-D9jyMYfrGhIvG3yKSz2h6l9dKPqOA&usqp=CAU',
    },
    {
      uid: 5,
      name: 'Dekisuzi deki',
      status: 'Student learning new Things',
      imageUrl:
        'https://i.pinimg.com/1200x/95/bb/80/95bb800280494c8dfd5eafcb0fe50604.jpg',
    },
    {
      uid: 6,
      name: 'Suneo mc',
      status: 'Student learning new Things',
      imageUrl:
        'https://i.pinimg.com/474x/7c/6a/c6/7c6ac62a1ead905bf4fe4dcf1ca08d56.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.heading}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(t => (
          <View key={t.uid} style={styles.userCard}>
            <Image source={{uri: t.imageUrl}} style={styles.userImage} />
            <View >
            <Text style={styles.userName}>{t.name}</Text>
            <Text style={styles.userStatus}>{t.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
    margin:8,
  },
  container: {
    paddingHorizontal:16,
    marginBottom:4,
  },
  userCard: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:6,
    backgroundColor:'#8D3DAF',
    padding:8,
    borderRadius:14,

  },
  userImage: {
    width:60,
    height:60,
    borderRadius:60 / 2,
    marginRight:14,
  },
  userName: {
    fontSize:16,
    fontWeight:'600',
    color:"#FFF",
  },
  userStatus: {
    fontSize:16
  },
});
