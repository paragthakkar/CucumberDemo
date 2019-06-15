package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/paragneelam/eclipse-workspace/CucumberDemo/src/main/java/Features/login.feature"
		,glue= {"stepDefinitions"}
		)

public class TestRunner {

}
