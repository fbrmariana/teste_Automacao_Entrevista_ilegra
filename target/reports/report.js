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
formatter.scenarioOutline({
  "name": "Validar funcionalidade de pesquisa clicando em \u003cpesquisar\u003e",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@pesquisaSucesso"
    }
  ]
});
formatter.step({
  "name": "preencho algum texto no campo pesquisa \"\u003cpesquisa\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "clicar em pesquisar",
  "keyword": "E "
});
formatter.step({
  "name": "o resultado deverá ser referente a pequisa realizada \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "pesquisa",
        "mensagem"
      ]
    },
    {
      "cells": [
        "juros",
        "juros"
      ]
    }
  ]
});
formatter.background({
  "name": "Acessar aplicaçao",
  "description": "",
  "keyword": "Contexto"
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
formatter.scenario({
  "name": "Validar funcionalidade de pesquisa clicando em \u003cpesquisar\u003e",
  "description": "",
  "keyword": "Esquema do Cenário",
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
  "name": "preencho algum texto no campo pesquisa \"juros\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "PesquisaSucessoStep.preencho_algum_texto_no_campo_pesquisa(String)"
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
  "name": "o resultado deverá ser referente a pequisa realizada \"juros\"",
  "keyword": "Então "
});
formatter.match({
  "location": "PesquisaSucessoStep.o_resultado_deverá_ser_referente_a_pequisa_realizada(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validar funcionalidade de pesquisa com dados invalidos clicando em \u003cpesquisar\u003e",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@pesquisaDadosInvalidos"
    }
  ]
});
formatter.step({
  "name": "preencho algum texto no campo pesquisa \"\u003cpesquisa\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "clicar em pesquisar",
  "keyword": "E "
});
formatter.step({
  "name": "o resultado devera ser nenhum resultado \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "pesquisa",
        "mensagem"
      ]
    },
    {
      "cells": [
        "*_*",
        "Nenhum resultado"
      ]
    }
  ]
});
formatter.background({
  "name": "Acessar aplicaçao",
  "description": "",
  "keyword": "Contexto"
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
formatter.scenario({
  "name": "Validar funcionalidade de pesquisa com dados invalidos clicando em \u003cpesquisar\u003e",
  "description": "",
  "keyword": "Esquema do Cenário",
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
  "name": "preencho algum texto no campo pesquisa \"*_*\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "PesquisaSucessoStep.preencho_algum_texto_no_campo_pesquisa(String)"
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
  "name": "o resultado devera ser nenhum resultado \"Nenhum resultado\"",
  "keyword": "Então "
});
formatter.match({
  "location": "PesquisaDadosInvalidosStep.o_resultado_devera_ser_nenhum_resultado(String)"
});
formatter.result({
  "status": "passed"
});
});