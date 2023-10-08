document.addEventListener('DOMContentLoaded', function () {
  // Define quest data
  const quests = [
    {
      name: 'Quest 1: The Mysterious Assignment',
      clue: 'A letter has arrived at your doorstep with a cryptic message. Solve the mystery it holds.',
      gift: 'A pair of stylish socks',
    },
    {
      name: 'Quest 2: The Enigmatic Contract',
      clue: 'You\'ve received an unusual contract from an unknown sender. Investigate its origins and fulfill the request.',
      gift: 'A pair of special Witcher-themed pants',
    },
    {
      name: 'Quest 3: A Whisper in the Woods',
      clue: 'A faint whisper beckons from the heart of Brokilon Forest. Explore its depths to uncover its source.',
      gift: 'A pair of comfortable sleeping pants',
    },
    // Add more quests with their details
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
      `;
      questList.appendChild(questItem);

      // Add event listener to each quest item
      questItem.addEventListener('click', () => {
        showQuestDetails(quest);
      });
    });
  }

  displayQuestList();

  // Function to display quest details
  function showQuestDetails(quest) {
    const questInstructions = document.getElementById('quest-instructions');
    questInstructions.innerHTML = `
      <h2>${quest.name}</h2>
      <p>${quest.clue}</p>
      <button id="start-button">Start Quest</button>
    `;

    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', () => {
      completeQuest(quest);
    });

    questInstructions.style.display = 'block';
  }

  // Function to mark a completed quest
  function completeQuest(quest) {
    const questIndex = quests.indexOf(quest);
    const questCheckbox = document.querySelector(`#quest${questIndex}`);
    questCheckbox.checked = true;

    const completedLabel = document.createElement('span');
    completedLabel.classList.add('completed');
    completedLabel.textContent = 'Completed';
    questCheckbox.parentNode.appendChild(completedLabel);

    // Remove event listener to prevent further interaction with the completed quest
    questCheckbox.parentNode.removeEventListener('click', () => {
      showQuestDetails(quest);
    });
  }
});
