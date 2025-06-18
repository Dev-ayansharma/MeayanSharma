'use client';

import React, { useEffect, useState } from 'react';

interface Word {
  text: string;
  className?: string;
}

interface Props {
  words: Word[];
  typingSpeed?: number;    // ms per char
  deletingSpeed?: number;  // ms per char
  pauseTime?: number;      // ms between words
}

export const TypewriterEffect: React.FC<Props> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex].text;
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed !== currentWord) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.substring(0, displayed.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayed !== '') {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.substring(0, displayed.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          // Start deleting after pause
        } else {
          // Move to next word
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, pauseTime);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-1 mx-1 bg-purple-500 animate-pulse">&nbsp;</span>
    </span>
  );
};

