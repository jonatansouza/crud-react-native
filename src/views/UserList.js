import React from 'react';
import users from '../data/users';
import { View, Alert } from 'react-native';
import Accordion from '../components/Accordion';
export default props => {
  const options = [
    {
      label: 'Editar',
      handler: (user) => props.navigation.navigate('UserForm', user)
    },
    {
      label: 'Excluir',
      handler: (user) => confirmUserDeletion(user)
    }
  ];
  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir ' + user.name + '?',  [
      {
        text: 'Sim',
        onPress() {
          console.warn('delete', JSON.stringify(user))
        }
      },
      {
        text: 'Não',

      }
    ])
  }

  return (
    <View>
      {users.map((el, id) => (<Accordion key={id} user={el} options={options} />))}
    </View>
  );
};
