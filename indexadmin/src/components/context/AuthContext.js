import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

  const login = async (documento, clave) => {
    try {
      const response = await fetch("http://localhost:5000/validar_usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario: documento, contraseña: clave }),
      });

      if (response.ok) {
        const data = await response.json();
        setUsuarioAutenticado({
          documento,
          clave,
          idRol: data.idRol,
        });
      } else {
        throw new Error("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error en la autenticación:", error.message);
      throw error;
    }
  };

  const logout = () => {
    setUsuarioAutenticado(null);
  };

  const contextValue = {
    usuarioAutenticado,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
