import readline from 'readline';
import Impuestos from './Impuesto.js';
import Cliente from './Cliente.js';

// Configuración de readline para obtener la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para realizar las preguntas al usuario
rl.question('Ingrese el nombre del cliente: ', (nombreCliente) => {
    rl.question('Ingrese el monto bruto anual del cliente: ', (montoBrutoAnual) => {
        rl.question('Ingrese las deducciones del cliente: ', (deducciones) => {
            // Crear instancia de Impuestos
            const impuestosCliente = new Impuestos(parseFloat(montoBrutoAnual), parseFloat(deducciones));
            
            // Crear instancia de Cliente con los datos ingresados
            const cliente = new Cliente(nombreCliente, impuestosCliente);

            // Calcular y mostrar el impuesto
            console.log(`El impuesto total de ${cliente.nombre} es: ${cliente.calcularImpuesto()}`);

            // Cerrar la interfaz de readline
            rl.close();
        });
    });
});

