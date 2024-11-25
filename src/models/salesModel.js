class salesModel {
    constructor(id, refreskoId, size, quantity, totalPrice) {
        this.id = id; // ID de la venta
        this.refreskoId = refreskoId; // ID del refresco vendido
        this.size = size; // Tamaño del refresco (ej. chico, mediano, grande)
        this.quantity = quantity; // Cantidad de refrescos vendidos
        this.totalPrice = totalPrice; // Precio total de la venta
    }
}

export default salesModel;

