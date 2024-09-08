export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;  // Instancia Impuesto class
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  calcularImpuesto() {
    const { montoBrutoAnual, deducciones } = this._impuesto;
    return (montoBrutoAnual - deducciones) * 0.21; // Formula para calcular Impuestos
  }
}
