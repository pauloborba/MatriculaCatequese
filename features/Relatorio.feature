Feature: See Class Info
As a teacher
I want to see lists of students divided by a filter
So that the teacher may see wich the students have certain conditions

Scenario: View non-baptized students
Given that I am at the class info page
And I am logged as teacher “Admin"
When I choose the class "Pré I"
And the year "2017"
And the filter "not baptized"
Then the system will show me the list of nom-baptized students

Scenario: No students in class
Given that I am at the class info page
And I am logged as teacher “Admin"
When I choose the class "Pré I"
And the year "2020"
And there is no student in this class and year
Then the system will show a error message

Scenario: View non-baptized students
Given that I am at the class info page
And I am logged as teacher “Admin"
When I choose the class "Pré I"
And the year "2017"
And the filter "Casa da Criança"
And there is no student to show
Then the system will show a error message