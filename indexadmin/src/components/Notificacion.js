import React, { useState } from 'react';
import { View, Button, TextInput, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input, Header } from 'react-native-elements';

const App = () => {
  const [nombreNotificacion, setNombreNotificacion] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [mensaje, setMensaje] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    setFecha(selectedDate || fecha);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleEnviar = () => {
    console.log('Datos enviados:', { nombreNotificacion, fecha, mensaje });
  };

  return (
    <View style={styles.container}>

      <View style={styles.body}>
        <Input
          label="Nombre de notificación"
          placeholder="Ingresa el nombre de la notificación"
          value={nombreNotificacion}
          onChangeText={(text) => setNombreNotificacion(text)}
        />
        <Button title="Seleccionar fecha" onPress={showDatepicker} style={styles.button} />
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={fecha}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
        )}
        <Input
          label="Mensaje"
          placeholder="Escribe tu mensaje"
          multiline
          numberOfLines={4}
          value={mensaje}
          onChangeText={(text) => setMensaje(text)}
          style={styles.input}
        />
        <Button title="Enviar" onPress={handleEnviar} style={styles.button} />
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
    justifyContent: 'center',
  },
  input: {
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default App;
