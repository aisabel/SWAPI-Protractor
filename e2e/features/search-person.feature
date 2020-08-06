Feature: Search for a Star Wars character 
    
    Scenario Outline: Search valid person by name
        Given I navigate to "localhost"
        When I search for "<PersonName>"
        Then I see person details
        
    Examples:
        | PersonName      |
        | Luke Skywalker  |
        | Leia Organa     |
        | r2              |
        | Darth           |

    Scenario: Search invalid person by name
        Given I navigate to "localhost"
        When I search for invalid "Alderaan"
        Then I see not found



   