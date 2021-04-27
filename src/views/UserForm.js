import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params || {});
  return (
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput
        style={style.input}
        placeholder="Informe o nome"
        onChangeText={name => setUser({...user, name})}
        value={user.name}
      />
      <Text>E-mail</Text>
      <TextInput
        style={style.input}
        placeholder="Informe o email"
        onChangeText={email => setUser({...user, email})}
        value={user.email}
      />
      <Text>URL do Avatar</Text>
      <TextInput
        style={style.input}
        placeholder="Informe a URL do Avatar"
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        value={user.avatarUrl}
      />
      <Button 
        title="Salvar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 3,
    padding: 4
  },
});
