package steps;

import cucumber.api.java.pt.Dado;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import pages.BuscarPage;
import utils.Browser;



public class BuscarSteps {

    private Browser browser;
    private WebDriver driver = browser.chromeBrowsing();

    @Before
    public void abrirPaginaCoodesh() throws Throwable {
        driver.get("https://blogdoagi.com.br/");
    }


    @Dado("^que cliquei no botão buscar$")
    public void que_estou_na_página_inicial_das_Americanas() throws Throwable {
        new BuscarPage(driver).clicarBotaoBuscar();
    }
}

