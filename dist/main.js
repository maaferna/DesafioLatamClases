import Impuestos from './Impuesto.js';
import Cliente from './Cliente.js';

// Crear Instancias de Prueba
var impuestosCliente1 = new Impuestos(1000000, 50000); // instancia ejemplo
var cliente1 = new Cliente('Juan Perez', impuestosCliente1);

// Calcular el impuesto
console.log("El impuesto total de ".concat(cliente1.nombre, " es: ").concat(cliente1.calcularImpuesto()));