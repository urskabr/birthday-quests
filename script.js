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
  const questInstructions = document.getElementById('quest-instructions');
  const questImage = document.getElementById('quest-image');
  const questCompleteButton = document.getElementById('quest-complete-button');

  let currentQuestIndex = -1;

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
        showQuestDetails(quest, index);
      });
    });
  }

  // Function to show quest details
  function showQuestDetails(quest, index) {
    currentQuestIndex = index;
    questInstructions.innerHTML = `<p>${quest.clue}</p>`;
    questImage.style.display = 'none';
    questCompleteButton.style.display = 'none';
    questInstructions.style.display = 'block';
  }

  // Function to start a quest
  function startQuest() {
    questInstructions.style.display = 'none';
    questImage.src = `quest${currentQuestIndex}.jpg`; // Replace with actual image file names
    questImage.style.display = 'block';
    questCompleteButton.style.display = 'block';
  }

  // Function to complete a quest
  function completeQuest() {
    const questCheckbox = document.querySelector(`#quest${currentQuestIndex}`);
    questCheckbox.checked = true;
    questInstructions.innerHTML = `<p>Congratulations! You have completed this quest and found your gift.</p>`;
    questCompleteButton.style.display = 'none';
  }

  // Add event listener to "Start Quest" button
  questCompleteButton.addEventListener('click', () => {
    completeQuest();
  });

  displayQuestList();
});
