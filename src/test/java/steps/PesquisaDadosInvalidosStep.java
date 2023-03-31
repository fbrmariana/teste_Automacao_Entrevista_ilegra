package steps;

import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.PesquisaPage;
import runner.RunCucumber;

public class PesquisaDadosInvalidosStep extends RunCucumber {

        PesquisaPage pesquisaPage = new PesquisaPage();

        @Quando("^preencho um texto com dados invalidos$")
        public void preencho_um_texto_com_dados_invalidos() {
                pesquisaPage.clicarLupaPesquisa();
                pesquisaPage.inserirTextoCampoPesquisaInvalido();
        }
        @Então("^o resultado deverá ser nenhum resultado$")
        public void o_resultado_deverá_ser_nenhum_resultado() {
                pesquisaPage.validarPesquisaDeCampoInvalido();
        }
}

