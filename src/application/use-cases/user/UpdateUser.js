/**
 * UPDATEUSER.JS - CASO DE USO PARA ACTUALIZAR USUARIO
 * ===================================================
 * 
 * Este caso de uso permite modificar los datos de un usuario existente
 * en el sistema, buscando al usuario por su ID y actualizando los
 * campos proporcionados.
 * 
 * FUNCIONALIDADES:
 * - Recibir un ID de usuario y los datos nuevos a actualizar
 * - Crear una instancia de entidad `User` con los datos entrantes
 * - Delegar la actualización al `userRepository`
 * 
 * CASOS DE USO TÍPICOS:
 * - Modificar información personal del usuario (nombre, email, etc.)
 * - Actualizar datos administrativos en un panel de control
 * 
 * 🔐 CONSIDERACIONES DE SEGURIDAD:
 * - Validar previamente los campos recibidos antes de ejecutar este caso de uso
 * - Restringir qué campos se pueden actualizar (ej. no permitir modificar roles o contraseñas sin validación extra)
 * - Verificar permisos: solo administradores o el propio usuario deberían poder modificar la información
 * 
 * Patrón de diseño: Clean Architecture / Use Case Pattern  
 * Principio SOLID: Single Responsibility Principle
 */

import User from "../../../domain/entities/User.js";

export default class UpdateUser {
  /**
   * Constructor de la clase UpdateUser
   * @param {Object} userRepository - Repositorio encargado de la persistencia de usuarios
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Ejecuta la actualización de un usuario por su ID
   * @param {string} id - Identificador único del usuario a modificar
   * @param {Object} userData - Datos nuevos para actualizar al usuario
   * @returns {Promise<Object>} - Devuelve el usuario actualizado
   */
  async execute(id, userData) {
    // Para actualización, no validamos con la entidad User ya que no siempre
    // tendremos todos los campos (especialmente password)
    // Validamos manualmente los campos que sí vienen
    
    if (userData.name && userData.name.length < 2) {
      throw new Error("❌ Nombre debe tener al menos 2 caracteres ❌");
    }
    
    if (userData.email && (userData.email.length < 6 || !userData.email.includes("@"))) {
      throw new Error("❌ Email inválido ❌");
    }
    
    if (userData.rol && userData.rol.length < 2) {
      throw new Error("❌ Rol inválido ❌");
    }

    // Delegar la actualización al repositorio directamente con los datos
    try {
      return await this.userRepository.update(id, userData);
    } catch (error) {
      // Manejar errores específicos de MongoDB
      if (error.code === 11000) {
        // Error de duplicado (email único)
        throw new Error("❌ El email ya está en uso por otro usuario ❌");
      }
      throw error;
    }
  }
}
