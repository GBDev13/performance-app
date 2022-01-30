import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Friend } from './Friend';

interface Props {
  data: {
    id: string;
    name: string;
    likes: number;
    online: string;
  }[];
  follow: () => void;
}

export function FriendList({ data, follow }: Props){
  const totalLikes = useMemo(() => (data.reduce((likes, friend) => {
    return likes += friend.likes;
  }, 0)), [data]);

  return (
    <View style={{ marginVertical: 20 }}>
      <Text>Total de likes: {totalLikes}</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Friend
            data={item}
            follow={follow}
          />
        )}
      />
    </View>
  );
}