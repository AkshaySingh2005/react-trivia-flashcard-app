import React from 'react';
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards, resetFlipped }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} resetFlipped={resetFlipped} />;
      })}
    </div>
  );
}
