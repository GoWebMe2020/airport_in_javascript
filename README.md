# Project Title
## Airport

### Motivation

Repeating a previous challenge, completed in Ruby, in JavaScript

### User Stories

As an air traffic controller<br>
To get passengers to a destination<br>
I want to instruct a plane to land at an airport and confirm that it has landed<br>

As an air traffic controller<br>
To get passengers to a destination<br>
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport<br>

As an air traffic controller<br>
To ensure safety<br>
I want to prevent takeoff when weather is stormy<br>

As an air traffic controller<br>
To ensure safety<br>
I want to prevent landing when weather is stormy<br>

## Build status

1. Completed user story 1 with tests passing.
2. Completed user story 2 with tests passing.
3. Completed user story 3 with tests passing. 
Lessons learnt - 
* console.info() works for debugging with Jasmine. 
* Do not stub out whole objects in feature tests.
4. Completed user story 4 with tests passing.

## Code style

Follow the principles of writing the tests first and then resolved the errors with a minimum amount of code.

## Tech/Framework used

JavaScript - Code
Jasmine - Testing

## Installation

N/A

## Setting Up a Database

N/A

## Tests

#### 13 specs, 0 failures, randomized with seed 83806
1. Weather
* gives not stormy other times
* gives stormy sometimes
2. Plane
* can takeoff from and airport
* can land at an airport
3. Airport
* under stormy conditions
* does not clear planes for takeoff
* does not clear planes for takeoff
* under non-stormy conditions
* can clear planes for landing
* can clear planes for takeoff
* has no planes by default
4. Feature Test:
* under stormy conditions
* blocks landing when weather is stormy
* blocks takeoff when weather is stormy
* under non-stormy conditions
* planes can be instructed to take off
* planes can be instructed to land at an airport

## Screenshots

N/A

## How to use?

N/A

## Credits
* JP Ferreira
