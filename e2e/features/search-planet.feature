Feature: Search for a Star Wars  planet
    
    Scenario Outline: Search planet by name
        Given I navigate to "localhost"
        When I search for planet "<Planet>"
        Then I see planet details

    Examples:
        | Planet          |
        | Alderaan        |
        | Hoth            |

    Scenario: Search invalid planet by name
        Given I navigate to "localhost"
        When I search for invalid "Mars"
        Then I see not found



   