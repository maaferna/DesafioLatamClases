# DesafioLatamClases
 Programación Orientada a Objetos y ES6.

Este proyecto implementa un sistema de cálculo de impuestos utilizando clases y Programación Orientada a Objetos en JavaScript ES6. El objetivo es registrar información de clientes y calcular los impuestos anuales que deben pagar basados en su monto bruto anual y deducciones, con un cálculo que sigue la fórmula:

(montoBrutoAnual - deducciones) * 21%

El código ha sido desarrollado usando tecnologías modernas como ES6 y Babel para la transpilación a JavaScript compatible con ES5.

Tabla de Contenidos
    Requisitos
    Instalación
    Ejecución del Proyecto
    Estructura del Proyecto
    Funcionalidades
    Transpilar Código
    Contribuciones

Requisitos

Node.js (versión 12+)
NPM o Yarn
Babel CLI para la transpilación de ES6 a ES5

Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

Clona el repositorio en tu máquina local:

bash
Copy code
git clone https://github.com/maaferna/DesafioLatamClases.git
Accede a la carpeta del proyecto:

bash
Copy code
cd DesafioLatamClases
Instala las dependencias necesarias:

bash
Copy code
npm install
Ejecución del Proyecto
Para ejecutar el proyecto en tu entorno local:

Transpilar el código:

Antes de ejecutar el código, transpila los archivos ES6 a ES5 usando Babel:

bash
Copy code
npm run build
Ejecutar el código:

Una vez generado el código compilado, puedes ejecutar el archivo principal desde la carpeta dist:

bash
Copy code
node dist/main.js
El resultado te mostrará el cálculo de impuestos en la terminal.

Estructura del Proyecto
plaintext
Copy code
DesafioLatamClases/
│
├── dist/                      # Código compilado
│   ├── Cliente.js             # Clase Cliente compilado a ES5
│   ├── Impuesto.js            # Clase Impuesto compilado a ES5
│   └── main.js                # Archivo principal compilado a ES5
│
├── src/                       # Código fuente en ES6
│   ├── Cliente.js             # Clase Cliente para representar a un cliente
│   ├── Impuesto.js            # Clase Impuesto para representar impuestos
│   └── main.js                # Archivo principal que crea instancias y ejecuta el cálculo de impuestos
│
├── .babelrc                   # Configuración de Babel
├── package.json               # Dependencias del proyecto y scripts
├── README.md                  # Documentación del proyecto
└── node_modules/              # Dependencias instaladas


Descripción de Clases

1. Impuesto
Esta clase representa los impuestos de un cliente e incluye:

montoBrutoAnual: Representa el monto bruto anual del cliente.
deducciones: Representa las deducciones aplicadas al cliente.
Métodos:

getMontoBrutoAnual(): Devuelve el monto bruto anual.
setMontoBrutoAnual(): Establece un nuevo valor para el monto bruto anual.
getDeducciones(): Devuelve las deducciones.
setDeducciones(): Establece un nuevo valor para las deducciones.

2. Cliente
Esta clase representa a un cliente e incluye:

nombre: Nombre del cliente.
impuesto: Objeto de tipo Impuesto que contiene la información fiscal del cliente.
Métodos:
getNombre(): Devuelve el nombre del cliente.
setNombre(): Establece un nuevo nombre para el cliente.
calcularImpuesto(): Calcula el impuesto total a pagar usando la fórmula: (montoBrutoAnual - deducciones) * 21%.


Ejemplo de Uso:
javascript
Copy code
// Crear instancias de Impuesto y Cliente
const impuestosCliente1 = new Impuestos(1000000, 50000);
const cliente1 = new Cliente('Juan Perez', impuestosCliente1);

// Calcular el impuesto
console.log(`El impuesto total de ${cliente1.nombre} es: ${cliente1.calcularImpuesto()}`);
Transpilar Código
Este proyecto utiliza Babel para convertir el código ES6 a ES5. Puedes realizar la transpilación con el siguiente comando:

bash
Copy code
npm run build
Esto generará los archivos transpilados en la carpeta dist/.

Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama para tus cambios.
Realiza un pull request para revisión.

Si encuentras algún problema o bug, por favor repórtalo en la sección de "Issues".