Feature: See Class Info
As a teacher
I want to see lists of students divided by a filter
So that the teacher may see wich the students have certain conditions

Scenario: View nom baptized students
Given that I am at the class info page
And I am logged as teacher “Admin"
When I choose the class "Pré I"
And the year "2017"
And the filter "baptism"
Then the system will show me the list of baptized students and nom-baptized students

