# OOP RPG Game
This is a simple RPG game between the hero and the troll! The hero and troll can attack or heal during battle. The first to die loses their gold to the winner.

**Link to project**: https://kyaaron.github.io/OOP-rpg-game/

## How it's made
The app uses vanilla HTML5, CSS3, and JavaScript. It incorporates OOP principles by having an Entity class that contains properties that both the Hero and Monster have, such as health, gold, and names. From there, I wrote a Hero and Monster class with a `description()` method and an `attack()` method. They also update the DOM for attack descriptions. I used Tailwind CSS via their CDN for styles in my index.html file.

## Optmizations
The following are future considerations:
- A log below that shows every action as it took place
- Ability to choose a monster to face prior to battle
- Dark mode
- Lessen the width of the screen for desktops
- Mobile view

## Lessons learned
I learned that I can update the DOM from methods in an object. I also have an `UpdateUI()` function which is called in every event listener to make sure the UI updates every time an event is triggered to reflect the updated properties from my objects. I made a "barrel file" which incorporates all the exporting classes, then I can import the barrel file in my main.js file to have a cleaner JS file. I also learned it's considered a best practice to keep all Classes separate in their own files and export them via the `export default` keywords.

Separate files (i.e. classes) > Exported into a barrel file > The barrel file imported into main.js. This is something I'm going to be bringing into my future projects as they get larger and more complex.

## Other recent projects
**DashTrack Running Tracker App**: https://kyaaron.github.io/dashtrack-running-app/ <br>
**Dungeons and Dragons Spell/Monster Search App**: https://kyaaron.github.io/Dungeons-and-Dragons-Search-App/
