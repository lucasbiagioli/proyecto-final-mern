**Una aplicacion Backend basada en node, Usando Express.js**
Los Pasos para crearla desde cero y seguir con su desarrollo son:

1. Ejecutamos en la consola `npm init -y`
2. Instalamos paquetes, los paquetes/.librerias necesarios al principio serian: 
	**Express**
	Comando: `npm install express --save`
	Documentación: https://expressjs.com/es/starter/installing.html

	 **Nodemon**
	Comando: `npm instal nodemon -D`npm 
	-D es de devolepment, es decir que la libreria estara en devDependencies
	Documentacion:
https://www.npmjs.com/package/nodemon
3. Crear el archivo app.js en el proyecto
4. Podemos con nodemon, crear un script en package.json en la key `scripts`	con el nombre `dev`	(dev es una sugerencia de nombre, puede ser otro) y asignarle el valor `nodemon app.js`
Luego de estos parsos se nos generará una carpeta /node_modules en nuestro proyecto, y nuestro package.json se vera de la siguiente manera:

**
"name":  "proyecto-final-mern",
"version":  "0.1.0",
"private":  true,
"dependencies": {
"@chakra-ui/react":  "^2.6.1",
"@emotion/react":  "^11.11.0",
"@emotion/styled":  "^11.11.0",
"@testing-library/jest-dom":  "^5.16.5",
"@testing-library/react":  "^13.4.0",
"@testing-library/user-event":  "^13.5.0",
"axios":  "^1.4.0",
"bootstrap":  "^5.2.3",
"express":  "^4.18.2",
"framer-motion":  "^10.12.8",
"popper.js":  "^1.16.1",
"react":  "^18.2.0",
"react-bootstrap":  "^2.7.4",
"react-dom":  "^18.2.0",
"react-icons":  "^4.8.0",
"react-scripts":  "5.0.1",
"web-vitals":  "^2.1.4"
},
"scripts": {
"start":  "react-scripts start",
"build":  "react-scripts build",
"test":  "react-scripts test",
"eject":  "react-scripts eject",
"server":  "nodemon app2.js"
},
"devDependencies": {
"nodemon":  "^2.0.22"
}**
	
