package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumber;

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
        getDriver().findElement(lupaDePesquisa).click();
    }

    public void inserirTextoCampoPesquisa() {
        getDriver().findElement(campoPesquisa).sendKeys("juros");
    }

    public void realizarPesquisa() {
        getDriver().findElement(botaoPesquisar).click();
    }

    public void validarPesquisa() {
        String validarPesquisa = getDriver().findElement(By.xpath("//span[contains(.,'juros')]")).getText();
        Assert.assertEquals("juros", "juros", validarPesquisa);
    }

    public void inserirTextoCampoPesquisaInvalido() {
        getDriver().findElement(campoPesquisa).sendKeys("/*-*/");
    }

    public void validarPesquisaDeCampoInvalido() {
        String validarPesquisaInvalido = getDriver().findElement(By.xpath("//h1[contains(.,'Nenhum resultado')]")).getText();
        Assert.assertEquals("Nenhum resultado", "Nenhum resultado", validarPesquisaInvalido);
    }
}