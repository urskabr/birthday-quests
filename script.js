document.addEventListener('DOMContentLoaded', function () {
  // Define quest data
  const quests = [
    {
      name: 'Quest 1: The Mysterious Assignment',
      clue: 'A letter has arrived at your doorstep with a cryptic message. Solve the mystery it holds. The gift is hidden where your head is protected.',
    },
    {
      name: 'Quest 2: The Enigmatic Contract',
      clue: 'You\'ve received an unusual contract from an unknown sender. Investigate its origins and fulfill the request. The gift is concealed in a place where delicious creations are born.',
    },
    {
      name: 'Quest 3: A Whisper in the Woods',
      clue: 'A faint whisper beckons from the heart of Brokilon Forest. Explore its depths to uncover its source. The gift is hidden beneath a place where dreams are woven.',
    },
    {
      name: 'Quest 4: Challenges Unveiled',
      clue: 'Seek out three hidden challenges scattered across Skellige\'s islands. Complete them to reveal their secrets. The gift is stashed where you prepare for sporting adventures.',
    },
    {
      name: 'Quest 5: A Murky Swamp Mystery',
      clue: 'An old legend speaks of treasure lost in Crookback Bog. Investigate the legends and uncover its truth. The gift is lurking behind a machine of modern magic.',
    },
    {
      name: 'Quest 6: Roach\'s Trail',
      clue: 'Follow Roach\'s hoofprints through the countryside to a hidden secret. Roach knows the way. The gift is concealed where your clothes take a cleansing journey.',
    },
    {
      name: 'Quest 7: The Whispering Forest',
      clue: 'Navigate the ancient forest paths where whispers echo. What secrets do they hold? The gift is hidden where sweetness and treats reside.',
    },
    {
      name: 'Quest 8: The Castle\'s Riddle',
      clue: 'A mysterious riddle from Castle Tuirseach hints at a hidden treasure within its walls. Solve the riddle to claim your prize. The gift is woven into the material of packaging artistry.',
    },
  ];

  // Initialize quest list
  const questList = document.getElementById('quests');

  // Function to display quest list
  function displayQuestList() {
    quests.forEach((quest, index) => {
      const questItem = document.createElement('li');
      questItem.classList.add('quest-item');
      questItem.innerHTML = `
        <input type="checkbox" id="quest${index}" class="quest-checkbox">
        <label for="quest${index}">${quest.name}</label>
        <div class="quest-details">
          <p>${quest.clue}</p>
          <button class="start-button" data-index="${index}">Start Quest</button>
        </div>
      `;
      questList.appendChild(questItem);

      // Add event listener to each "Start Quest" button
      const startButton = questItem.querySelector('.start-button');
      startButton.addEventListener('click', () => {
        startQuest(quest);
      });
    });
  }

  displayQuestList();

  // Function to expand quest details when clicked
  function startQuest(quest) {
    const questDetails = questList.querySelector(`#quest${quests.indexOf(quest)}`).querySelector('.quest-details');
    questDetails.style.display = 'block';

    // Remove event listener to prevent further clicks on the "Start Quest" button
    const startButton = questDetails.querySelector('.start-button');
    startButton.removeEventListener('click', () => {
      startQuest(quest);
    });
  }
});
