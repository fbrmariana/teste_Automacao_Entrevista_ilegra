$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/pesquisas.feature");
formatter.feature({
  "name": "Pesquisa blog agi",
  "description": "  Eu como usuário do sistema blog agi\n  Quero realizar uma pesquisa\n  Para ter mais conhecimento",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@pesquisa"
    }
  ]
});
formatter.scenario({
  "name": "Validar funcionalidade de pesquisa clicando em pesquisar",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@pesquisa"
    },
    {
      "name": "@pesquisaSucesso"
    }
  ]
});
formatter.step({
  "name": "que estou na página inicial do blog agi",
  "keyword": "Dado "
});
formatter.match({
  "location": "PesquisaSucessoStep.que_estou_na_página_inicial_do_blog_agi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho algum texto no campo pesquisa",
  "keyword": "Quando "
});
formatter.match({
  "location": "PesquisaSucessoStep.preencho_algum_texto_no_campo_pesquisa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em pesquisar",
  "keyword": "E "
});
formatter.match({
  "location": "PesquisaSucessoStep.clicar_em_pesquisar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado deverá ser referente a pequisa realizada",
  "keyword": "Então "
});
formatter.match({
  "location": "PesquisaSucessoStep.o_resultado_deverá_ser_referente_a_pequisa_realizada()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar campo pesquisa com dados inválidos",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@pesquisa"
    },
    {
      "name": "@pesquisaDadosInvalidos"
    }
  ]
});
formatter.step({
  "name": "que estou na página inicial do blog agi",
  "keyword": "Dado "
});
formatter.match({
  "location": "PesquisaSucessoStep.que_estou_na_página_inicial_do_blog_agi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho um texto com dados invalidos",
  "keyword": "Quando "
});
formatter.match({
  "location": "PesquisaDadosInvalidosStep.preencho_um_texto_com_dados_invalidos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em pesquisar",
  "keyword": "E "
});
formatter.match({
  "location": "PesquisaSucessoStep.clicar_em_pesquisar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado deverá ser nenhum resultado",
  "keyword": "Então "
});
formatter.match({
  "location": "PesquisaDadosInvalidosStep.o_resultado_deverá_ser_nenhum_resultado()"
});
formatter.result({
  "status": "passed"
});
});