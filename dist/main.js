import readline from 'readline';
import Impuestos from './Impuesto.js';
import Cliente from './Cliente.js';

// Configuración de readline para obtener la entrada del usuario
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para realizar las preguntas al usuario
rl.question('Ingrese el nombre del cliente: ', function (nombreCliente) {
  rl.question('Ingrese el monto bruto anual del cliente: ', function (montoBrutoAnual) {
    rl.question('Ingrese las deducciones del cliente: ', function (deducciones) {
      // Crear instancia de Impuestos
      var impuestosCliente = new Impuestos(parseFloat(montoBrutoAnual), parseFloat(deducciones));

      // Crear instancia de Cliente con los datos ingresados
      var cliente = new Cliente(nombreCliente, impuestosCliente);

      // Calcular y mostrar el impuesto
      console.log("El impuesto total de ".concat(cliente.nombre, " es: ").concat(cliente.calcularImpuesto()));

      // Cerrar la interfaz de readline
      rl.close();
    });
  });
});