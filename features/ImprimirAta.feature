Feature: Print Presence Record List
As a teacher
I want to print the student list 
So that the teacher may mark the students presence in class

Scenario: Teacher printing list
Given that I am at the class presence page
And I am logged as teacher “Admin"
And the class have the students "A", "B", "C"
When I choose the class "Pré I"
And the year "2017"
And the initial date "01/11/2017"
And the final date "30/11/2017"
Then the system will show me a table with the students "A", "B", "C" as rows 
And the saturdays "4/11/2017", "11/11/2017", "18/11/2017", "25/11/2017" as columns
And the print option will be enabled

Scenario: Empty Class
Given that I am at the class presence page
And I am logged as teacher “Admin"
And the class have no students
When I choose the class "Pré I"
And the year "2017"
And the initial date "01/11/2017"
And the final date "30/11/2017"
Then the system will show me a table of just columns with saturdays "4/11/2017", "11/11/2017", "18/11/2017", "25/11/2017" as columns
And an error message "no students" about the lack of students to show 
And the print option will be disabled

Scenario: No saturdays in time period
Given that I am at the class presence page
And I am logged as teacher “Admin"
And the class have the students "A", "B", "C"
When I choose the class "Pré I"
And the year "2017"
And the initial date "01/03/2017"
And the final date "02/03/2017"
Then the system will show me a table of just rows with students "A", "B", "C"
And an error "no satudays" message about the lack of satudays
And the print option will be disabled

Scenario: No students and no saturdays in time period
Given that I am at the class presence page
And I am logged as teacher “Admin"
And the class have no students
When I choose the class "Pré I"
And the year "2017"
And the initial date "01/03/2017"
And the final date "02/03/2017"
And there are no students associated with the class "Pré I"
And the year "2017"
Then the system will show me an empty table
And an error message "no students no saturdays" about the lack of students and saturdays
And the print option will be disabled