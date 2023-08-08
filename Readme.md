![image](https://github.com/Mesheo/to-do-list-MVC/assets/71408872/322af28e-bcca-4874-9866-5254f7fee179)

## Introdução
Esse projeto é um app de estudo construído com Vanilla JS (Javascript sem frameworks) e arquitetura MVC (Model View Controller).
O objetivo é ter contato na prática com uma arquitetura de software amplamente usada em aplicações web e que pode ser porta de entrada para entender arquiteturas mais complexas no futuro.            O uso do Javascript puro na implementação também teve o objetivo parecido de aprofundar o conhecimento de etapas comuns no desenvolvimento web server-side. Para que assim, ao usar um framework potente, as abstrações não prejudiquem meu controle e visão do que está acontecendo no código.

O app possui todas as funcionalidades de um **CRUD** (Create, Read, Update, Delete) com persistência dos dados usando **MongoDB** e validação de input

## Trechos do App
- Site funcionando localmente
  ![to-do-listMVC](https://github.com/Mesheo/to-do-list-MVC/assets/71408872/80df2cbf-b6df-4d49-81fe-9dcc25dfaa24)
- Logs do servidor
  ![image](https://github.com/Mesheo/to-do-list-MVC/assets/71408872/ab4086af-19bc-43b6-b85a-134b6a5eac6a)


## Bullet points de aprendizado
Alguns desafios foram encontrados na implementação de partes simples do código pois com a ausência de framework foi necessário "reeinventar a roda" em alguns momentos mas sinto que com o objetivo de estudo isso me proveu bons frutos uma vez que aprendi melhor várias coisas que superficialmente já conhecia no meu dia a dia. Aqui fica uma lista resumida dos principais pontos de aprenzidado na jornada de criação do app 

- **Middlewares**: Foi necessário criar do zero middlewares para tratar os objetos de resposta e requisição.
- **Cabeçalhos HTTP**: Manipulação direta das propriedades do cabeçalho para garantir uma comunicação adequada entre o navegador e o servidor.
- **HTML Semântico**: Entendi o básico da influência do HTML semântico para criar estilização e o impacto no SEO
- **ORMs e Variáveis de Ambiente**: Conhecer e aplicar no projeto para deixar ele apto a entrar em produção se fosse necessário
- **Modularização e Transpilação**: Uso do CommonJS para modularização e necessidade de transpilação do ECMAscript para versões anteriores visando manter compatibilidade com o navegador.
- **Formulários**: Entendimento profundo sobre como as requisições são criadas no client-side pelo HTML e repassadas para o browser.
- **Observabilidade**: A importância e técnicas para criar logs eficientes e úteis no debug.
- **Validação de Input**: Técnicas de validação client-side com Event Listener e também validações server-side nos Controllers.
- **Separando Responsabilidades**: Entender em qual lugar do código implementar regras de negócio de modo coerente com a arquitetura proposta, nesse caso a MVC
