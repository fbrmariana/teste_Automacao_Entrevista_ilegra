package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.PesquisaPage;
import runner.RunCucumber;

public class PesquisaSucessoStep extends RunCucumber {

    PesquisaPage pesquisaPage = new PesquisaPage();

    @Dado("^que estou na página inicial do blog agi$")
    public void que_estou_na_página_inicial_do_blog_agi()  {
        pesquisaPage.acessarAplicacao();
    }

    @Quando("^preencho algum texto no campo pesquisa$")
    public void preencho_algum_texto_no_campo_pesquisa() {
        pesquisaPage.clicarLupaPesquisa();
        pesquisaPage.inserirTextoCampoPesquisa();
    }

    @Quando("^clicar em pesquisar$")
    public void clicar_em_pesquisar(){
        pesquisaPage.realizarPesquisa();
    }

    @Então("^o resultado deverá ser referente a pequisa realizada$")
    public void o_resultado_deverá_ser_referente_a_pequisa_realizada()  {
        pesquisaPage.validarPesquisa();
    }
}
