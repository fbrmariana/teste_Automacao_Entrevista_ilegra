# language: pt

@pesquisa
Funcionalidade: Pesquisa blog agi
  Eu como usuário do sistema blog agi
  Quero realizar uma pesquisa
  Para ter mais conhecimento

  @pesquisaSucesso
  Cenário: Validar funcionalidade de pesquisa clicando em pesquisar
    Dado que estou na página inicial do blog agi
    Quando preencho algum texto no campo pesquisa
    E clicar em pesquisar
    Então o resultado deverá ser referente a pequisa realizada

  @pesquisaDadosInvalidos
  Cenário:Validar campo pesquisa com dados inválidos
    Dado que estou na página inicial do blog agi
    Quando preencho um texto com dados invalidos
    E clicar em pesquisar
    Então o resultado deverá ser nenhum resultado