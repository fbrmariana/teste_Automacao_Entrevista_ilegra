package steps;

import cucumber.api.java.pt.Então;
import pages.PesquisaPage;
import runner.RunCucumber;

public class PesquisaDadosInvalidosStep extends RunCucumber {

        PesquisaPage pesquisaPage = new PesquisaPage();

        @Então("^o resultado devera ser nenhum resultado \"([^\"]*)\"$")
        public void o_resultado_devera_ser_nenhum_resultado(String mensagem) throws Exception {
                pesquisaPage.validarPesquisaDeCampoInvalido(mensagem);
        }
}