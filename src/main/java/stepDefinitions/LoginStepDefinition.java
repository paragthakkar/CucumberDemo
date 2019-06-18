package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.*;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^user is already on the login page$")
	public void user_is_already_on_the_login_page() throws Throwable {
	    
		System.setProperty("webdriver.chrome.driver", "/Users/paragneelam/eclipse-workspace/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://katalon-demo-cura.herokuapp.com/");
		driver.findElement(By.id("btn-make-appointment")).click();
	}

	@When("^the title of the webpage is CURA Healthcare$")
	public void the_title_of_the_webpage_is_CURA_Healthcare() throws Throwable {
	    String pageTitle = driver.getTitle();
	    Assert.assertEquals("CURA Healthcare Service", pageTitle);
	}

	@Then("^user enters the \"(.*)\" and \"(.*)\"$")
	public void user_enters_the_username_and_password(String username, String password) throws Throwable {
	    driver.findElement(By.id("txt-username")).sendKeys(username);;
	    driver.findElement(By.id("txt-password")).sendKeys(password);
	}

	@Then("^clicks on the login button$")
	public void clicks_on_the_login_button() throws Throwable {
		driver.findElement(By.id("btn-login")).click();
		Thread.sleep(3000);
		driver.quit();
	}

}
