# Entendendo decisões arquiteturais e a estrutura do projeto.

## Requisitos para rodar o projeto

### Setup do ambiente:

- Node LTS

## Como rodar na minha máquina?

- Clone o projeto `https://github.com/Video4Me/video4me.mobile.git`
- Rode `npm install`
- Execute o emulador do `Android Studio SDK`
- Rode `npm start`
- Clique em `a - run on Android`
- Pronto 🤌

### Estrutura do projeto

- `./src/assets`: Contém os recursos externos que os templates podem precisar, como imagens, fontes e gráficos vetoriais.

- `./src/components`: São todos os pedaços primordias onde são colocados os componentes globais da aplicação.

- `./src/routes`: É onde estão configurados as rotas de navegação.

- `./src/screens`: Onde estão localizadas todas as telas.

	- `__tests__`:  Aqui é onde está localizado os testes das telas.

- `./src/services`: Onde as api estão localizadas.
