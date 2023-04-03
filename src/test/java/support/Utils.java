package support;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumber;

import java.io.File;
import java.io.IOException;

public class Utils extends RunCucumber {

    public static void tiraPrint(String fileName)throws IOException {
        File scrFile = ((TakesScreenshot)getDriver()).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile,new File("src\\test\\java\\evidencias\\evidencia_" + fileName +".png"));
    }
}
