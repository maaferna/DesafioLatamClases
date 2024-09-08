// Impuestos.js
export default class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    // Getters
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones;
    }

    // Setters
    set montoBrutoAnual(value) {
        this._montoBrutoAnual = value;
    }

    set deducciones(value) {
        this._deducciones = value;
    }
}
