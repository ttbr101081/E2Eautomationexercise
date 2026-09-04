# language: es
Característica: Flujo de Registro y Autenticación de Usuario

  Como nuevo visitante del sitio web
  Quiero poder registrar una nueva cuenta y luego iniciar sesión
  Para poder tener acceso a funciones de usuario registrado

  Escenario: Registro exitoso y posterior inicio de sesión
    Dado que visito la página de inicio "https://automationexercise.com/"
    Cuando hago clic en "Signup / Login"
    Y completo el formulario de registro con un correo electrónico generado
    Y termino de completar el resto de mi información de cuenta
    Y hago clic en Crear Cuenta
    Entonces veo el mensaje "ACCOUNT CREATED!"
    Cuando hago clic en el botón Continuar
    Y cierro la sesión de mi cuenta
    Y completo mis credenciales en el formulario de inicio de sesión
    Y hago clic en el botón Login
    Entonces veo que estoy logueado correctamente con mi nombre
    Y elimino la cuenta para limpiar el entorno
