document.addEventListener('DOMContentLoaded', function () {
  // Define quest data
  const quests = [
    {
      name: 'Quest 1: The Mysterious Assignment',
      clue: 'A letter has arrived at your doorstep with a cryptic message. Solve the mystery it holds.',
      image: 'quest1.jpg',
    },
    {
      name: 'Quest 2: The Enigmatic Contract',
      clue: 'You\'ve received an unusual contract from an unknown sender. Investigate its origins and fulfill the request.',
      image: 'quest2.jpg',
    },
    {
      name: 'Quest 3: A Whisper in the Woods',
      clue: 'A faint whisper beckons from the heart of Brokilon Forest. Explore its depths to uncover its source.',
      image: 'quest3.jpg',
    },
    {
      name: 'Quest 4: Challenges Unveiled',
      clue: 'Seek out three hidden challenges scattered across Skellige\'s islands. Complete them to reveal their secrets.',
      image: 'quest4.jpg',
    },
    {
      name: 'Quest 5: A Murky Swamp Mystery',
      clue: 'An old legend speaks of treasure lost in Crookback Bog. Investigate the legends and uncover its truth.',
      image: 'quest5.jpg',
    },
    {
      name: 'Quest 6: Roach\'s Trail',
      clue: 'Follow Roach\'s hoofprints through the countryside to a hidden secret. Roach knows the way.',
      image: 'quest6.jpg',
    },
    {
      name: 'Quest 7: The Whispering Forest',
      clue: 'Navigate the ancient forest paths where whispers echo. What secrets do they hold?',
      image: 'quest7.jpg',
    },
    {
      name: 'Quest 8: The Castle\'s Riddle',
      clue: 'A mysterious riddle from Castle Tuirseach hints at a hidden treasure within its walls. Solve the riddle to claim your prize.',
      image: 'quest8.jpg',
    },
  ];

  // Initialize quest list
  const questList = document.getElementById('quests');
  const questDetails = document.getElementById('quest-details');
  const questImage = document.getElementById('quest-image');
  const questCompleteButton = document.getElementById('quest-complete-button');
  const gifImage = document.getElementById('gif-image');

  let completedQuests = [];

  // Function to display quest list
  function displayQuestList() {
    quests.forEach((quest, index) => {
      const questItem = document.createElement('li');
      questItem.classList.add('quest-item');
      questItem.innerHTML = `
        <input type="checkbox" id="quest${index}" class="quest-checkbox">
        <label for="quest${index}">${quest.name}</label>
      `;
      questList.appendChild(questItem);

      // Add event listener to each quest item
      questItem.addEventListener('click', () => {
        showQuestClue(quest);
      });
    });
  }

  // Function to show quest clue
  function showQuestClue(quest) {
    questDetails.innerHTML = `<p>${quest.clue}</p>`;
    questImage.style.display = 'none';
    questCompleteButton.style.display = 'none';
    questDetails.style.display = 'block';
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
      showQuestImage(quest);
    });
    questDetails.appendChild(nextButton);
  }

  // Function to show quest image
  function showQuestImage(quest) {
    questDetails.style.display = 'none';
    questImage.src = quest.image;
    questImage.style.display = 'block';
    const solveButton = document.createElement('button');
    solveButton.textContent = 'I Solved the Quest';
    solveButton.addEventListener('click', () => {
      completeQuest(quest);
    });
    questDetails.appendChild(solveButton);
  }

  // Function to complete a quest
  function completeQuest(quest) {
    const questCheckbox = document.querySelector(`#quest${quests.indexOf(quest)}`);
    questCheckbox.checked = true;
    questDetails.innerHTML = `<p>Congratulations! You have completed this quest.</p>`;
    questDetails.style.display = 'block';
    questCompleteButton.style.display = 'block';
    completedQuests.push(quest);
    questList.removeChild(questCheckbox.parentElement);
    if (completedQuests.length === quests.length) {
      gifImage.style.display = 'block';
    }
  }

  // Add event listener to "Quest Complete" button
  questCompleteButton.addEventListener('click', () => {
    questCompleteButton.style.display = 'none';
    gifImage.style.display = 'none';
    displayQuestList();
  });

  displayQuestList();
});
