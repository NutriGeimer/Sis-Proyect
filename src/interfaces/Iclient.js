class clientInterface {
    addClient(data) {}         // Agregar un nuevo cliente
    updateClient(id, data) {}  // Actualizar un cliente existente
    deleteClient(id) {}        // Eliminar un cliente por ID
    getAllClients() {}         // Obtener todos los clientes
    getClientById(id) {}       // Obtener un cliente por ID
    getClientByUsername(username) {} // Obtener un cliente por su nombre de usuario
}

export default clientInterface;
