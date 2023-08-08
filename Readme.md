![image](https://file.notion.so/f/s/d1932f66-cf8e-414c-bd3c-36c1009c5cc8/Untitled.png?id=f5465d0b-f398-4385-a3ba-42b05ae4d980&table=block&spaceId=ba811436-9e00-4657-80aa-40e7dd541bf3&expirationTimestamp=1691625600000&signature=IxCeKs122k-zC4jmmn6ZwwO1z6fEeTgYX3H0K7E9Wxg&downloadName=Untitled.png)
## Introdução
Esse projeto é um app de estudo construído com Vanilla JS e arquitetura MVC (Model View Controller).
O objetivo é ter contato na prática com uma arquitetura de software amplamente usada em aplicações web e que pode ser porta de entrada para entender arquiteturas mais complexas no futuro. 
O uso do Javascript puro na implementação também teve o objetivo parecido de aprofundar o conhecimento de etapas comuns no desenvolvimento web server-side. Para que assim, ao usar um framework potente, as abstrações não prejudiquem meu controle e visão do que está acontecendo no código.

O app possui todas as funcionalidades de um **CRUD** (Create, Read, Update, Delete) com persistência dos dados usando **MongoDB** e validação de input

## Trechos do App
- Site funcionando
- Logs do servidor

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
