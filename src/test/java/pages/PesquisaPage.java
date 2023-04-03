package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumber;

import static support.Commands.*;

public class PesquisaPage extends RunCucumber {

    // Elementos
    private String URL = "https://blogdoagi.com.br/";
    private By lupaDePesquisa = By.id("search-open");
    private By campoPesquisa = By.xpath("(//input[contains(@type,'search')])[1]");
    private By botaoPesquisar = By.xpath("(//input[@value='Pesquisar'])[1]");

    // Ações / Funções / Métodos
    public void acessarAplicacao() {
        getDriver("chrome").get(URL);
        getDriver().manage().window().maximize();
    }
    public void clicarLupaPesquisa() {
        waitElementBeVisible(By.id("search-open"),9000);
        clickElement(lupaDePesquisa);
    }
    public void inserirTextoCampoPesquisa(String pesquisa) {
        fillField(campoPesquisa, pesquisa);
    }
    public void realizarPesquisa() {
        clickElement(botaoPesquisar);
    }
    public void validarPesquisa(String mensagem) {
        checkMensagem(By.xpath("//span[contains(.,'juros')]"),mensagem );
    }
    public void inserirTextoCampoPesquisaInvalido(String pesquisa) {
        fillField(campoPesquisa, pesquisa);
    }
    public void validarPesquisaDeCampoInvalido(String mensagem) {
        checkMensagem(By.xpath("//h1[contains(.,'Nenhum resultado')]"), mensagem);
    }
}