# 🎁 Amigo Secreto

Oi, meu nome é Felipe.

Este projeto de "Amigo Secreto" foi desenvolvido como parte do **Alura Challenger**, um desafio para aprimorar habilidades em lógica de programação e desenvolvimento back-end. A aplicação permite que os usuários adicionem participantes e realizem um sorteio de forma justa e aleatória.

## ✨ Funcionalidades

- **Adicionar Participantes**: Campo de texto para inserir os nomes dos amigos um por um.
- **Validação de Nomes**: Impede a adição de nomes em branco ou duplicados.
- **Lista de Amigos**: Exibe os nomes de todos os participantes adicionados.
- **Sorteio Inteligente**:
  - O sorteio só é permitido com um **número par de participantes** (mínimo de 2).
  - Utiliza o algoritmo de embaralhamento *Fisher-Yates* para garantir aleatoriedade.
  - A lógica do sorteio forma um ciclo fechado, garantindo que ninguém tire o próprio nome.
- **Exibição do Resultado**: Mostra claramente quem tirou quem após o sorteio.
- **Reiniciar**: Um botão para limpar a lista de participantes e os resultados, permitindo que um novo sorteio seja iniciado facilmente.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias web fundamentais:

- **HTML5**: Para a estrutura semântica da página.
- **CSS3**: Para a estilização, layout e responsividade.
- **JavaScript (ES6+)**: Para toda a lógica de programação, incluindo manipulação do DOM, validações e o algoritmo de sorteio.

## ⚙️ Como Usar

Para executar o projeto, não é necessário nenhum servidor ou instalação complexa. Basta seguir os passos:

1.  Clone ou baixe este repositório para a sua máquina local.
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` em qualquer navegador de internet moderno (como Google Chrome, Firefox, etc.).

### Passo a passo na aplicação:

1.  Digite o nome de um amigo no campo de texto e clique em **"Adicionar"**.
2.  Repita o processo até que todos os participantes (em número par) estejam na lista.
3.  Clique no botão **"Sortear amigo"** para ver os resultados.
4.  Para começar de novo, clique em **"Reiniciar"**.

---

<p align="center">
  Desenvolvido para o <strong>Alura Challenger</strong>.
</p>