package testRunners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/resources/feature_files", plugin = {"html:target/ReportsDestination", "pretty"}, glue ={"stepDef"}, tags = {"@TestToRun"})
public class TestRunner {

}
