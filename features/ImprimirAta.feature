Feature: Print Presence Record List
As a teacher
I want to print the student list 
So that the teacher may mark the students presence in class

Scenario: Teacher printing list
Given that I am at the class presence page
And I am logged as teacher “Admin"
When I choose the class "Pré I"
And the year "2017"
And the initial date "01/03/2017"
And the final date "01/11/2017"
Then the system will show me a table with the students lists and all saturdays between the initial and final date

Scenario: Empty Class
Given that I am at the class presence page
And I am logged as teacher “Admin"
When I choose the class "Pré I"
And the year "2017"
And the initial date "01/03/2017"
And the final date "01/11/2017"
And there are no students associated with the class "Pré I"
And the year "2017"
Then the system will show me an error message

Scenario: No saturdays in time period
Given that I am at the class presence page
And I am logged as teacher “Admin"
When I choose the class "Pré I"
And the year "2017"
And the initial date "01/03/2017"
And the final date "02/03/2017"
Then the system will show me an error message