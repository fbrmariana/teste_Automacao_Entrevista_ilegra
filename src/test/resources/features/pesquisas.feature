# language: pt

@pesquisa
Funcionalidade: Pesquisa blog agi
  Eu como usuário do sistema blog agi
  Quero realizar uma pesquisa
  Para ter mais conhecimento

  Contexto: Acessar aplicaçao
    Dado que estou na página inicial do blog agi

  @pesquisaSucesso
  Esquema do Cenário: Validar funcionalidade de pesquisa clicando em <pesquisar>
    Quando preencho algum texto no campo pesquisa "<pesquisa>"
    E clicar em pesquisar
    Então o resultado deverá ser referente a pequisa realizada "<mensagem>"

    Exemplos:
      | pesquisa     |mensagem             |pesquisar
      | juros        |juros                |pesquisa valida
    
  @pesquisaDadosInvalidos
  Esquema do Cenário: Validar funcionalidade de pesquisa com dados invalidos clicando em <pesquisar>
    Quando preencho algum texto no campo pesquisa "<pesquisa>"
    E clicar em pesquisar
    Então o resultado devera ser nenhum resultado "<mensagem>"

    Exemplos:
      | pesquisa     |mensagem             |pesquisar
      | *_*          |Nenhum resultado   |pesquisa invalida