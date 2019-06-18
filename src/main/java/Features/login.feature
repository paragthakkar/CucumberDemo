Feature: CURA Healthcare Login Feature
	Scenario Outline: CURA Healthcare Login Scenatio
	Given user is already on the login page
	When the title of the webpage is CURA Healthcare
	Then user enters the "<username>" and "<password>"
	Then clicks on the login button
	
	Examples:
				| username | 	  password 		|
				| John Doe | ThisIsNotAPassword |

 