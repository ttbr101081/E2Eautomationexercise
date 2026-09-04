# Automation Exercise - Cypress E2E Tests

Este proyecto contiene pruebas automatizadas end-to-end (E2E) para el sitio web [Automation Exercise](https://automationexercise.com/) utilizando Cypress, Cucumber/Gherkin y reportes con Mochawesome.

## Funcionalidades probadas

Se ha implementado el siguiente caso de uso empleando Gherkin (en español):
*   **Registro de Usuario**: Creación exitosa de un usuario asegurando correos electrónicos únicos y llenado del formulario completo de cuenta.
*   **Flujo de Login**: Cierre de sesión e inicio de sesión posterior con las credenciales recién creadas.
*   **Limpieza de Entorno**: Eliminación de la cuenta creada para mantener el entorno de prueba limpio.

## Instrucciones para Ejecutar las Pruebas

Para instalar dependencias y ejecutar las pruebas:

```bash
# 1. Instalar las dependencias
npm install

# 2. Ejecutar las pruebas de Cypress en modo interactivo (GUI)
npx cypress open

# 3. Ejecutar las pruebas en modo headless (generará un reporte de Mochawesome)
npm test
```

## Reporte de Pruebas (Mochawesome)

El proyecto está configurado para usar `cypress-mochawesome-reporter`. Después de ejecutar `npm test`, podrás encontrar un archivo  en el directorio `cypress/reports`. 

## Consideraciones y Posibles Mejoras de UI (Automation Exercise)

Durante la implementación de las pruebas se exploró el sitio web de demostración. Aquí se documentan algunas observaciones de mejoras de UI detectadas:

1.  **Falta de validación interactiva en el Frontend**: En el formulario de registro (tanto en el paso 1 como en el 2), si un usuario omite un campo obligatorio, el feedback suele llegar luego de un intento de "Submit", y en algunas áreas de campos de texto no existe validación inline de tipo (ej: números de teléfono, códigos postales).
2.  **Manejo de Errores Genéricos**: Al intentar registrar un correo que ya existe, el mensaje de error "Email Address already exist!" es un texto plano sin un modal o resaltado destacado y carece de sugerencias adicionales.
3.  **Anuncios Intersticiales e Iframes Invasivos**: Es común encontrarse con anuncios de Google superpuestos. Si bien este es un sitio de práctica, en un entorno de producción e-commerce real, bloquear la interacción de "Checkout" o "Continue" con anuncios puede perjudicar gravemente el embudo de conversión (conversion rate). Para automatización, se tuvo que tener precaución para no interactuar erróneamente con las superposiciones.
4.  **Consistencia de Diseño (UI/UX)**:
    *   Los botones de "Login" y "Signup" tienen exactamente el mismo estilo visual (color, tamaño), a pesar de que representan acciones primarias distintas que compiten en jerarquía en la misma página.
    *   La navegación (navbar) se percibe recargada de iconos; un menú tipo hamburguesa en resoluciones más pequeñas optimizaría el espacio (Mobile First Design).
5.  **Accesibilidad (a11y)**:
    *   Faltan atributos `aria-labels` en elementos clave (por ejemplo, iconos que son enlaces sin texto descriptivo), lo que impactaría el uso para lectores de pantalla.
    *   El contraste de color en algunos badges (como los precios recomendados) contra el fondo blanco puede estar en el límite recomendado de WCAG (Web Content Accessibility Guidelines).
