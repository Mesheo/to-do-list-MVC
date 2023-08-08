## Introdução
Esse projeto foi construída com Vanilla JS e arquitetura MVC (Model View Controller).
A intenção é ter contato na prática com essa arquitetura de software que suporta boa parte das aplicações web e pode ser usada para entender arquiteturas mais complexas no futuro. 
O uso do Javascript puro na implementação também teve o objetivo parecido de aprofundar o conhecimento de etapas comuns no desenvolvimento web server-side. Para que assim, ao usar um framework potente, as abstrações não prejudiquem meu controle e visão do que está acontecendo no código.
O app possui todas as funcionalidades de um CRUD básico com persistência dos dados usando MongoDB e validação de input

## Trechos do App
- Site funcionando
- Logs do servidor

## Bullet points de aprendizado
Alguns desafios foram encontrados na implementação de partes simples do código pois com a ausência de framework foi necessário "reeinventar a roda" em alguns momentos mas sinto que com o objetivo de estudo isso me proveu bons frutos uma vez que aprendi melhor várias coisas que superficialmente já conhecia no meu dia a dia. Aqui fica uma lista resumida dos principais pontos de aprenzidado na jornada de criação do app 

- **Middlewares**: Aprender a criar e manipular middlewares para tratar os objetos de resposta e requisição.
- **Cabeçalhos HTTP**: Entendimento e manipulação direta para garantir a comunicação adequada entre o navegador e o servidor.
- **HTML Semântico**: Entender a importância e como renderizar páginas diretamente pelo servidor.
- **ORMs e Variáveis de Ambiente**: Conhecer e aplicar no projeto para deixar ele apto a entrar em produção se fosse necessário
- **Modularização e Transpilação**: Uso do CommonJS para modularização no JavaScript e entender a transpilação do ECMAscript.
- **Formulários**: Entendimento profundo sobre como as requisições são criadas no client-side pelo HTML e repassadas para o browser.
- **Observabilidade**: A importância e técnicas para criar logs eficientes e úteis no debug.
- **Validação de Input**: Técnicas de validação client-side com Event Listener e também validações server-side nos Controllers.
- **Separando Responsabilidades**: Entender em qual lugar do código implementar regras de negócio de modo coerente com a arquitetura proposta, nesse caso a MVC
