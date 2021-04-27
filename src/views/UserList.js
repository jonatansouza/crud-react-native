import React, { useContext } from 'react';
import { View, Alert } from 'react-native';
import Accordion from '../components/Accordion';
import UsersContext from '../context/UsersContext';

export default props => {
  
  const { state, dispatch } = useContext(UsersContext)
  
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
          dispatch({
            type: 'deleteUser',
            payload: user,
          })
        }
      },
      {
        text: 'Não',

      }
    ])
  }

  return (
    <View>
      {state.users.map((el, id) => (<Accordion key={id} user={el} options={options} />))}
    </View>
  );
};
