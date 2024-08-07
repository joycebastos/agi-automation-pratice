package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utils.Base;

public class BuscarPage extends Base {
    public BuscarPage(WebDriver driver) {
        super(driver);
    }

    public void clicarBotaoBuscar() {
        driver.findElement(By.cssSelector("css=.icon-search:nth-child(2) > svg")).click();
    }
}
