import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { Input, Header } from 'react-native-elements';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleImagePicker = () => {
  };

  return (
    <View style={styles.container}>

      <View style={styles.body}>
        <Input
          label="Nombre"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
        <Input
          label="Descripción"
          placeholder="Describe algo"
          multiline
          numberOfLines={4}
          value={descripcion}
          onChangeText={(text) => setDescripcion(text)}
        />
        <Button title="Seleccionar imagen" onPress={handleImagePicker} />
        {imagen && <Image source={{ uri: imagen }} style={{ width: 200, height: 200, marginVertical: 10 }} />}
        <Button title="Enviar" onPress={() => console.log('Datos enviados:', { nombre, descripcion, imagen })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
