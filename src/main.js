import Impuestos from './Impuesto.js';
import Cliente from './Cliente.js';

// Crear Instancias de Prueba
const impuestosCliente1 = new Impuestos(1000000, 50000);  // instancia ejemplo
const cliente1 = new Cliente('Juan Perez', impuestosCliente1);

// Calcular el impuesto
console.log(`El impuesto total de ${cliente1.nombre} es: ${cliente1.calcularImpuesto()}`);
