# OpenBoard

Sistema de vagas de emprego desenvolvido em React para a disciplina de Front-End.

## Grupo: Gabriel Lanzarini, Katrini dos Santos e Maria Luiza

## Sobre o projeto

O OpenBoard é uma aplicação web para divulgação e consulta de vagas de emprego em startups de tecnologia.
A aplicação permite visualizar vagas, acessar os detalhes de cada oportunidade e utilizar filtros para facilitar a busca por vagas de acordo com diferentes características.

O projeto foi desenvolvido utilizando React e React Router, com organização das páginas e componentes em arquivos separados.

## Melhorias de design

- Redesign da interface para deixar a aplicação mais organizada e agradável visualmente.
- Melhor organização dos espaçamentos entre as seções da página inicial.
- Criação de uma apresentação visual mais destacada para a área principal da Home.
- Organização das informações das vagas em cards, facilitando a visualização das principais informações.
- Criação de uma página de detalhes da vaga com informações organizadas de forma mais clara.
- Adaptação da interface para diferentes tamanhos de tela, buscando melhorar a experiência em dispositivos menores.

## Melhorias de funcionalidade

- Implementação de filtros para facilitar a busca por vagas.
- Implementação de contador de vagas de acordo com os filtros selecionados.
- Implementação de Empty State para informar quando nenhuma vaga corresponde aos filtros.
- Implementação da funcionalidade de limpar os filtros.
- Criação da página de publicação de vagas.
- Validação dos campos do formulário de publicação.
- Exibição de mensagem de sucesso após o preenchimento correto do formulário.
- Implementação da navegação entre as páginas utilizando React Router.
- Implementação da página de detalhes das vagas utilizando o ID da vaga na URL.
- Implementação do botão "Candidatar-se", exibindo uma confirmação ao usuário.
- Adição de diferentes tipos, áreas e localizações de vagas para possibilitar uma demonstração mais completa dos filtros.

## Tecnologias utilizadas

- React
- React Router
- JavaScript
- HTML
- CSS
- Vite

## Estrutura do projeto

O projeto possui as páginas e componentes organizados em pastas separadas, seguindo a estrutura utilizada durante o desenvolvimento em sala.
As vagas são armazenadas em um arquivo de dados e utilizadas pelos componentes da aplicação através de 'props'.

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Após executar o comando, acesse a aplicação pelo endereço disponibilizado pelo Vite no terminal.

## Observações

O projeto não utiliza backend. O formulário de publicação representa o fluxo de cadastro de uma nova vaga no front-end, com validação dos dados e mensagem de confirmação.
As vagas utilizadas para demonstração são carregadas a partir dos dados existentes no projeto.

