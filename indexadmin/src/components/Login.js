import React, { useState } from "react";
import { Modal, Text, Button, StyleSheet, View, TextInput, ScrollView, Pressable, Alert } from "react-native";
import { useAuth } from "./context/AuthContext";

const Login = ({ modalVisible, setModalVisible }) => {
  const [Documento, setDocumento] = useState("");
  const [Clave, setClave] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();

  const handleCita = async () => {
    try {
      if ([Clave, Documento].includes("")) {
        Alert.alert("Error", "Todos los campos son obligatorios");
        return;
      }

      await login(Documento, Clave);

      setModalVisible(!modalVisible);
      setDocumento("");
      setClave("");
    } catch (error) {
      console.error("Error en el inicio de sesión:", error.message);
    }
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nuevo {""}
            <Text style={styles.tituloBold}>Usuario</Text>
          </Text>

          <Pressable
            style={styles.btn}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.btnTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Documento del Usuario
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Documento"
                placeholderTextColor={"#666"}
                value={Documento}
                onChangeText={setDocumento}
              />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Clave</Text>
            <TextInput
              style={styles.input}
              placeholder="Clave"
              placeholderTextColor={"#666"}
              value={Clave}
              onChangeText={setClave}
              secureTextEntry={!showPassword}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={styles.togglePasswordButton}>
              <Text style={styles.togglePasswordButtonText}>
                {showPassword ? "Ocultar" : "Mostrar"}
              </Text>
            </Pressable>
          </View>

          <Pressable style={styles.btn2} onPress={handleCita}>
            <Text style={styles.btnTexto2}>Iniciar Sesion</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: "#189FD9",
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
    color: "#fff",
  },
  tituloBold: {
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: "#FFF",
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  btn: {
    marginVertical: 30,
    backgroundColor: "#0024F0",
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  btnTexto: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase,",
  },
  btn2: {
    marginVertical: 50,
    backgroundColor: '#0024F0',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btnTexto2: {
    textAlign: 'center',
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: '150',
    fontSize: 16,
  },
   togglePasswordButton: {
    position: "absolute",
    top: 15,
    right: 10,
  },

  togglePasswordButtonText: {
    color: "#FFF",
  },
});

export default Login;