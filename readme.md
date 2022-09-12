este proyecto se basa en el curso fundamentos de ts de platzi https://platzi.com/cursos/typescript/

1. Para iniciar el proyecto se debe crear un git ignore, la forma mas practica es mediante gitignore.io 

https://www.toptal.com/developers/gitignore/

se pone las opciones de los sistemas operativos windows, linux mac, y tambien node, se copia el resultado en 
un archivo .gitignore

2. creamos un archivo .editorconfig para crear un standar de desarrollo para todos los desarrolladores en el archivo .editorconfig . la descripcion de este archivo se puede leer aca 

https://editorconfig.org/

3. para que este archivo (.editorconfig) funcione se debe instalar una extension en Visual studio code llamada editorconfig for vs code

4. creamos la carpeta src que es donde va a ir todo el codigo

5. Se asume que ya se inicializo el proyecto con npm, luego se instala typescript

$ npm install typescript --save-dev

6. podemos ver la version de TS instalada con:

npx tsc --version

7. para permitir que ts analice un codigo js podemos poner al inicio del archivo el siguiente comando

//@ts-check


8. para configurar el entorno para traspilar ts

npx tsc --init

Se crea un archivo tsconfig.json con muchisimas opciones, basicamente se configura:

"outDir": "./dist",    

"rootDir": "./src", 

Para ejecutar este archivo tsconfig.json escribimos

npx tsc

si queremos que compile automaticamente

npx tsc --watch


