# 🍕 PizzaShop Web Application
Este repositório contém o código-fonte do **PizzaShop**, uma plataforma para gerenciamento de pedidos e entregas de pizza.

## 📖 Visão Geral
**PizzaShop** é um aplicativo web moderno e responsivo, projetado para proprietários de restaurantes gerenciarem menus, pedidos e entregas, enquanto oferece aos clientes uma experiência conveniente para pedidos de pizza online.

## 🛠 Tecnologias Utilizadas
Este projeto foi construído utilizando as seguintes tecnologias:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de construção e empacotamento de frontend com alta performance.
- **Tailwind CSS**: Framework de utilitários CSS para construção de designs personalizados.
- **React-Query**: Biblioteca para gerenciamento de estado de consulta, cache e atualização de dados.
- **React Router**: Biblioteca para navegação e roteamento de SPA (Single-Page Application).
- **Recharts**: Biblioteca para construção de gráficos reativos.

## ✨ Funcionalidades
O **PizzaShop** oferece uma série de funcionalidades para proprietários de restaurantes e clientes:

- **Gerenciamento de Restaurantes**: Registre e edite perfis de restaurantes, incluindo endereço, horário de funcionamento e menu.
- **Pedidos**:
  - Os clientes podem explorar menus, fazer pedidos e acompanhar o status da entrega.
  - Os proprietários podem gerenciar pedidos, aprová-los, cancelá-los e despachá-los para entrega.
- **Entrega**: Funções de gerenciamento para despacho e rastreamento de status dos pedidos.
- **Análise**: Painel com insights como receita diária e mensal, quantidade de pedidos e produtos mais populares.
- **Autenticação**: Sistema de login para clientes e proprietários de restaurantes.

## 🚀 Instalação e Execução
Para executar o aplicativo localmente, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu_usuario/pizzashop.git
   cd pizzashop
   ```
2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```
3. **Inicie o aplicativo em modo de desenvolvimento**:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
4. **Acesse no navegador**: Abra [http://localhost:3000](http://localhost:3000) para visualizar o aplicativo.

## 📁 Estrutura do Projeto
A estrutura do projeto segue uma organização modular típica para aplicativos React:

- **`src/`**: Diretório principal do código-fonte.
  - **`api/`**: Arquivos para interações com APIs.
  - **`components/`**: Componentes reutilizáveis da interface.
  - **`lib/`**: Módulos e utilitários personalizados.
  - **`pages/`**: Páginas e rotas do aplicativo.
- **`vite.config.ts`**: Configuração do Vite.
- **`tailwind.config.js`**: Configuração do Tailwind CSS.
- **`tsconfig.json`**: Configuração do TypeScript.

## 🤝 Contribuição
Contribuições são bem-vindas! Fique à vontade para enviar pull requests com correções de bugs ou novas funcionalidades. Por favor, siga as diretrizes de contribuição descritas em [CONTRIBUTING.md](./CONTRIBUTING.md).

## 📜 Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE.md](./LICENSE.md) para mais detalhes.
