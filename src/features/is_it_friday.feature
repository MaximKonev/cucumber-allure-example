@issue=TEST-1
Feature: Simple maths

  Scenario Outline: much more complex stuff (<var1>, <increment>)
    Given a variable set to <var1>
    When I good in this
    When I increment the variable by <increment>
    Then the variable should contain <result>

    Examples:
      | var1 | increment | result |
      | 100 |         5 |    105 |
      |  99 |      1234 |   1333 |
      |  13 |         5 |     18 |
