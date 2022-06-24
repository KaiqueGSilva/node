Comando para iniciar um projeto em node:

" npm init (enter x6) "

Em seguida instalar o typescript no projeto:

" npm install -g typescript "

**TIRE DO POWERSHELL E COLOQUE NO MODO CMD**

Em seguida vamos criar um arquivo de configuração do typescript:

" tsc --init "

Será criado um arquivo 'tsconfig.json' (que é um arquivo de configuração do typescript)

**EM CASO DE ERRO AO DIGITAR O COMANDO UTILIZE O COMANDO:

"nps tsc --init"

--------------------------------------------

**TIRE O //**

Abrir o arquivo 'tsconfig' e habilitar a linha 30, onde está escrito 'moduleResolution'

Habilitar a linha 29, onde está escrito 'rootDir' - "./src"

Habilitar a linha 52, onde está escrito 'outDir' - "./dist"

---------------------------------------------

Em seguida vamos instalar uma 'dependencia' com o seguinte comando:

"npm install --save-dev @types/node"

----------------------------------------------

Crie uma pasta nova, chamada 'src'

Dentro da pasta criar um arquivo 'index.ts'

----------------------------------------------

Em seguida fazer a instalação do nodemon (ele executa o codigo)

***npm install -g nodemon (é provável que de erro, portanto, recomenda instalar o 'tsnode')***

Em seguida vamo instalar 'tsnode' (comando: npm install -D ts-node)

No arquivo "package.json" você irá colocar na linha 8 ("start-dev":"nodemon src/index.ts"). **NÃO ESQUEÇA DE COLOCAR A ',' NA LINHA ANTERIOR.

----------------------------------------------

Após isso só utilizar o comando 'npm run start-dev'