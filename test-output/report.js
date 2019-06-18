$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/paragneelam/eclipse-workspace/CucumberDemo/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "CURA Healthcare Login Feature",
  "description": "",
  "id": "cura-healthcare-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "CURA Healthcare Login Scenatio",
  "description": "",
  "id": "cura-healthcare-login-feature;cura-healthcare-login-scenatio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "the title of the webpage is CURA Healthcare",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "clicks on the login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "cura-healthcare-login-feature;cura-healthcare-login-scenatio;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "cura-healthcare-login-feature;cura-healthcare-login-scenatio;;1"
    },
    {
      "cells": [
        "John Doe",
        "ThisIsNotAPassword"
      ],
      "line": 10,
      "id": "cura-healthcare-login-feature;cura-healthcare-login-scenatio;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "CURA Healthcare Login Scenatio",
  "description": "",
  "id": "cura-healthcare-login-feature;cura-healthcare-login-scenatio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "the title of the webpage is CURA Healthcare",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters the \"John Doe\" and \"ThisIsNotAPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "clicks on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.the_title_of_the_webpage_is_CURA_Healthcare()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 17
    },
    {
      "val": "ThisIsNotAPassword",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
});