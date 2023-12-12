import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert, StyleSheet } from 'react-native';
import { Header, Input } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

const AdmRutina = () => {
  const [Nombre_Ejercicio, setNombreEjercicio] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [DuracionMin, setDuracionMin] = useState('');
  const [Series, setSeries] = useState('');
  const [RepeticionesPorSerie, setRepeticionesPorSerie] = useState('');
  const [Imagen1, setImagen1] = useState(null);
  const [Imagen2, setImagen2] = useState(null);
  const [Imagen3, setImagen3] = useState(null);
  const [Discapacidad_idDiscapacidad, setDiscapacidadId] = useState('');

  const handleImagePicker = (imageNumber) => {
    // (código de selección de imagen aquí)
  };

  const handleSubmit = async () => {
    // (código de envío del formulario aquí)
  };

  return (
    <View style={styles.container}>

      <View style={styles.body}>
        <Input
          label="Nombre Ejercicio"
          value={Nombre_Ejercicio}
          onChangeText={(text) => setNombreEjercicio(text)}
          placeholder="Nombre ejercicio"
        />
        {/* Otros campos de entrada de texto, similar al anterior */}
        {/* ... */}

        {/* Botones para seleccionar imágenes */}
        <Button title="Seleccionar Imagen 1" onPress={() => handleImagePicker(1)} />
        {/* Otros botones para las otras imágenes */}
        {/* ... */}

        {/* Campo de entrada para el ID de discapacidad */}
        <Input
          label="Discapacidad ID"
          value={Discapacidad_idDiscapacidad}
          onChangeText={(text) => setDiscapacidadId(text)}
          placeholder="ID Discapacidad"
        />

        {/* Botón para enviar el formulario */}
        <Button title="Agregar Rutina" onPress={handleSubmit} />
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
    padding: 20,
  },
});

export default AdmRutina;