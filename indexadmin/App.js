import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Discapa from "./src/components/Discapacidad";
import Noti from "./src/components/Notificacion";
import Rutin from "./src/components/Rutina";
import Formulario from "./src/components/formulario";
import Login from "./src/components/Login";
import { AuthContext } from './src/components/context/AuthContext';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.rightButton}
        onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('./assets/casita.png')}
          style={styles.circleButtonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rightButton}
        onPress={() => navigation.navigate('Perfil')}>
        <Image
          source={require('./assets/usuario.png')}
          style={styles.circleButtonImage}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.circleContainer}>
      <TouchableOpacity style={styles.buttonWithText} onPress={() => navigation.navigate('Discapacidades')}>
        <View style={styles.circle}>
          <Image source={require('./assets/ExercisePD.png')} style={styles.circleImage} />
        </View>
        <Text style={styles.circleText}>Añadir Discapacidades</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonWithText} onPress={() => navigation.navigate('Rutina')}>
        <View style={styles.circle}>
          <Image source={require('./assets/Rutina.png')} style={styles.circleImage} />
        </View>
        <Text style={styles.circleText}>Añadir Rutina</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonWithText} onPress={() => navigation.navigate('Notificacion')}>
        <View style={styles.circle}>
          <Image source={require('./assets/Campana.png')} style={styles.circleImage} />
        </View>
        <Text style={styles.circleText}>Notificaciones</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const LeftScreen = () => (
  <View style={styles.container}>
    {/* Código existente */}
  </View>
);

const Perfil = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>{user ? `¡Hola, ${user.username}!` : '¡Bienvenido! Estás en el Perfil.'}</Text>
      {user && <TouchableOpacity onPress={logout}><Text>Cerrar Sesión</Text></TouchableOpacity>}
    </View>
  );
};

const Discapacidades = () => (
  <View style={styles.container}>
    <Discapa />
  </View>
);

const Rutina = () => (
  <View style={styles.container}>
    <Rutin />
  </View>
);

const Notificacion = () => (
  <View style={styles.container}>
    <Noti />
  </View>
);

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Inicio de Sesión',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Registro"
      component={Formulario}
      options={{
        title: 'Registro',
        headerStyle: {
          backgroundColor: '#189FD9',
        },
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LeftScreen"
              component={LeftScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Perfil"
              component={Perfil}
              options={{
                title: 'Perfil',
                headerStyle: {
                  backgroundColor: '#189FD9',
                },
              }}
            />
            <Stack.Screen
              name="Discapacidades"
              component={Discapacidades}
              options={{
                title: 'Discapacidades',
                headerStyle: {
                  backgroundColor: '#189FD9',
                },
              }}
            />
            <Stack.Screen
              name="Rutina"
              component={Rutina}
              options={{
                title: 'Rutina',
                headerStyle: {
                  backgroundColor: '#189FD9',
                },
              }}
            />
            <Stack.Screen
              name="Notificacion"
              component={Notificacion}
              options={{
                title: 'Notificaciones',
                headerStyle: {
                  backgroundColor: '#189FD9',
                },
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
    backgroundColor: "#189FD9",
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  rightButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#3498db',
  },
  circleButtonImage: {
    width: '100%',
    height: '100%',
  },
  circleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 1,
    margin: 30,
    marginBottom: 250,
  },
  buttonWithText: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3498db',
    overflow: 'hidden',
    marginRight: 10,
  },
  circleImage: {
    width: '100%',
    height: '100%',
  },
  circleText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
