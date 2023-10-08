document.addEventListener('DOMContentLoaded', function () {
  // Define quest data
  const quests = [
    {
      name: 'The Mysterious Assignment',
      clue: 'A letter has arrived at your doorstep with a cryptic message. Solve the mystery it holds.',
      imagePath: 'quest1.jpg', // Add image paths for clues
      gift: 'A pair of stylish socks',
    },
    {
      name: 'The Enigmatic Contract',
      clue: 'You\'ve received an unusual contract from an unknown sender. Investigate its origins and fulfill the request.',
      imagePath: 'quest2.jpg',
      gift: 'A pair of special Witcher-themed pants',
    },
    {
      name: 'A Whisper in the Woods',
      clue: 'A faint whisper beckons from the heart of Brokilon Forest. Explore its depths to uncover its source.',
      imagePath: 'quest3.jpg',
      gift: 'A pair of comfortable sleeping pants',
    },
    // Add more quests with their details
  ];

  // Initialize quest index
  let currentQuestIndex = 0;

  // Function to display quest details
  function displayQuest() {
    const quest = quests[currentQuestIndex];
    const questContainer = document.querySelector('#quest-container');
    questContainer.innerHTML = `
      <h2>${quest.name}</h2>
      <p>${quest.clue}</p>
      <img src="${quest.imagePath}" alt="Quest Image">
      <button id="next-button">Next</button>
    `;

    // Check if it's the last quest to reveal the gift
    if (currentQuestIndex === quests.length - 1) {
      const nextButton = document.querySelector('#next-button');
      nextButton.textContent = 'Claim Your Gift';
    }
  }

  // Function to progress to the next quest or reveal the gift
  function nextQuest() {
    if (currentQuestIndex < quests.length - 1) {
      currentQuestIndex++;
      displayQuest();
    } else {
      // All quests completed, reveal the gift
      const questContainer = document.querySelector('#quest-container');
      questContainer.innerHTML = `
        <h2>Congratulations!</h2>
        <p>You've completed all the quests.</p>
        <p>Gift: ${quests[currentQuestIndex].gift}</p>
      `;
    }
  }

  // Initial display of the first quest
  displayQuest();

  // Event listener for the "Next" button
  document.addEventListener('click', function (event) {
    if (event.target.id === 'next-button') {
      nextQuest();
    }
  });
});
