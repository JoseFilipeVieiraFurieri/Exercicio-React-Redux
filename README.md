# Exercício - Formulário

Vamos criar formulários utilizando `Redux`! 🚀

## Antes de iniciar

- Crie um fork desse projeto. Para isso, siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

- Após fazer o fork, clone o repositório criado no seu computador.

- Rode o `npm install`.

- Vá para a branch master do seu projeto e execute o comando`git branch`

- Mude para a branch  digimon-finders com o comando git checkout -b digimon-finders. É nessa branch que você realizará a solução para o exercício.

- Observe o que deve ser feito nas instruções.

- Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master.

⚠ **Atenção!** Quando for criar o PR você se deparará com a seguinte tela:

![PR do exercício](images/example-pr.png)

- É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

- Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/comprehension-exercises`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

- Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

➡ Para cada PR realize esse mesmo processo.


---

# Começando o exercício

A sua equipe deve implementar o Redux para dois formulários, cada um em uma etapa, um para dados pessoais e outro para dados profissionais e exibí-los na tela.

Lembrando que os formulários já estão criados, então não é necessário criar novos arquivos além dos propostos para a execução do exercício.

⚠ **Atenção:** a branch `master` possui a estrutura do formulário pronta, necessitando apenas da implementação do Redux. Se preferirem criar os formulários desde o início, basta acessar a branch `exercise-react-redux` e seguir as instruções descritas no README.

![forms-redux](form-redux.gif)

Para começar, é preciso salvar as informações de cada formulário no gerenciador de estados. Depois, numa outra página, acessem esses dados para que sejam renderizados.

Vocês precisarão de:

* Gerenciador de estados (Redux), para salvar as informações na `store` e também para acessá-las.

Mãos ao código! 💪

**1 - Implemente o Redux:**
- Crie a estrutura de pastas necessária para a implementação do Redux.
Como sugestão, você pode usar  a seguinte estrutura:
    - Crie a pasta `src/store` para agrupar todos os arquivos relacionados ao Redux;
    - Crie a pasta `src/store/actions` para armazenar as `actions` do projeto;
    - Crie a pasta `src/store/reducers` para armazenar os `reducers` do projeto;
    - Crie o arquivo `src/store/index.js`, que será o arquivo responsável por criar e exportar a `store` da aplicação.
- Implemente o `reducer`.
- Implemente a `store`.
- Implemente as `actions`.

> 👀 **De olho nas dicas:** 
> - De início, você pode implementar seu reducer apenas com o valor `default`.
> - O `composeWithDevTools` pode te ajudar.
> - Lembre-se que, ao montar a estrutura do Redux, é preciso importar o `Provider`, que recebe a `store`, no `index.js`._
> - Caso tenha dificuldade para montar a estrutura do Redux, você pode consultar o passo a passo que está nesse [link.](https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/cfc29dbb-9243-4450-baa6-6da6ac0d0674/fluxo-de-dados-no-redux/4341ae67-1e44-4a06-84dc-0f1f87a56f0f?use_case=side_bar)
> - Faça as importações corretas para o bom funcionamento da sua aplicação._

**2 - Salve as informações das páginas `PersonalForm` e `ProfessionalForm` na `store`.**

> 👀 **De olho na dica:**  lembre-se que o `mapStateToProps` lê as informações da `store` e o `mapDispatchToProps` envia as informações para a `store`.

**3 - Renderize todas as informações que estão salvas na `store` em `FormDataDisplay`.**

---
