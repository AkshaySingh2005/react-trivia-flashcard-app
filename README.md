
# React Trivia Flashcard App

This project is a React-based trivia flashcard application. It allows users to select trivia categories and the number of questions to generate a set of flashcards. Users can click on the cards to view the answers and reset the cards to show the questions again.

## Features

- Fetch trivia questions from the Open Trivia Database (OpenTDB) API.
- Flip cards to reveal answers.
- Reset button to flip all cards back to the question side.
- Responsive design suitable for various screen sizes.

## Demo

Check out the live demo [here](https://akshaysingh2005.github.io/react-trivia-flashcard-app/).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/akshaysingh2005/react-trivia-flashcard-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-trivia-flashcard-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser:
   ```
   http://localhost:3000
   ```
2. Select a trivia category and the number of questions.
3. Click the "Generate" button to fetch the flashcards.
4. Click on a card to flip it and view the answer.
5. Click the "Reset" button to flip all cards back to the question side.

## Project Structure

- `src/`: Contains the source code of the application.
  - `App.js`: The main component that contains the application logic.
  - `FlashcardList.js`: The component that renders the list of flashcards.
  - `Flashcard.js`: The component that renders a single flashcard.
  - `app.css`: The main stylesheet for the application.

## Technologies Used

- React
- Axios
- Open Trivia Database (OpenTDB) API
- CSS

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- The trivia questions are fetched from the [Open Trivia Database](https://opentdb.com/).

## Author

- Akshay Singh
