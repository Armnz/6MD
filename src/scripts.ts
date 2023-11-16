import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));

// Click box Button 1 -> color of box No. 1 changes to yellow and back.

document.addEventListener('DOMContentLoaded', (): void => {
  const button1: HTMLButtonElement  | null = document.querySelector('.button-1');
  const box1: HTMLElement | null = document.querySelector('.box-1');
  const originalColor: string = box1?.style.backgroundColor || '';

  button1?.addEventListener('click', (): void => {
    if (box1) {
      box1.style.backgroundColor = box1.style.backgroundColor === 'yellow' ? originalColor : 'yellow';
    }
  });
});

// Click Button 2 -> Tex in box No. 2 changes from FAIL to SUCCESS

document.addEventListener('DOMContentLoaded', (): void => {
  const button2: HTMLButtonElement | null = document.querySelector('.button-2');
  const box2: HTMLElement | null = document.querySelector('.box-2');

  button2?.addEventListener('click', (): void => {
    if (box2) {
      box2.textContent = 'SUCCESS';
    }
  });
});

// Click Button 3 -> box disappears and reappears

document.addEventListener('DOMContentLoaded', (): void => {
  const button3: HTMLButtonElement | null = document.querySelector('.button-3');
  const box3: HTMLElement | null = document.querySelector('.box-3');

  button3?.addEventListener('click', (): void => {
    if (box3) {
      box3.style.display = box3.style.display === 'none' ? '' : 'none';
    }
  });
});

// CLick Button 5 -> color of box No. 5 changes randomly to 1 of 5 defined colors.

document.addEventListener('DOMContentLoaded', (): void => {
  const button5: HTMLButtonElement | null = document.querySelector('.button-5');
  const box5: HTMLElement | null = document.querySelector('.box-5');

  const colors: string[] = ['lightgrey', 'red', 'lightblue', 'orange', 'purple'];

  button5?.addEventListener('click', (): void => {
    if (box5) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      box5.style.backgroundColor = randomColor;
    }
  });
});

// Click Button 6 -> counter in box No. 6 till 10 every 3 seconds.

document.addEventListener('DOMContentLoaded', (): void => {
  const button6: HTMLButtonElement | null = document.querySelector('.button-6');
  const box6: HTMLElement | null = document.querySelector('.box-6');
  let intervalId: number | null = null;
  let counter = 0;

  button6?.addEventListener('click', (): void => {
    if (intervalId === null) {
      intervalId = window.setInterval(() => {
        if (box6 && counter < 10) {
          counter += 1;
          box6.textContent = counter.toString();
        } else {
          window.clearInterval(intervalId);
          intervalId = null;
        }
      }, 3000);
    }
  });
});

// Click Button 7 -> color of all boxes and body background change.

document.addEventListener('DOMContentLoaded', (): void => {
  const button7: HTMLButtonElement | null = document.querySelector('.button-7');
  const boxes: NodeListOf<HTMLElement> = document.querySelectorAll('.box');
  const body: HTMLBodyElement | null = document.querySelector('body');

  button7?.addEventListener('click', (): void => {
    boxes.forEach(box => {
      box.style.backgroundColor = '#18D5E1';
    });
    if (body) {
      body.style.backgroundColor = '#000000';
    }
  });
});

// Hower on box No.5 -> timer till 10.

document.addEventListener('DOMContentLoaded', (): void => {
  const box5: HTMLElement | null = document.querySelector('.box-5');
  let intervalId: number | undefined;
  let counter = 0;

  box5?.addEventListener('mouseenter', (): void => {
    if (!intervalId) {
      counter = 0;
      intervalId = window.setInterval(() => {
        if (box5 && counter < 10) {
          counter += 1;
          box5.textContent = counter.toString();
        } else {
          window.clearInterval(intervalId);
          intervalId = undefined;
        }
      }, 1000);
    }
  });

  box5?.addEventListener('mouseleave', (): void => {
    if (intervalId) {
      window.clearInterval(intervalId);
      intervalId = undefined;
    }
    if (box5) {
      box5.textContent = '0';
    }
  });
});

// Input = Output

document.addEventListener('DOMContentLoaded', (): void => {
  const inputField: HTMLInputElement | null = document.querySelector('.input input');
  const outputDiv: HTMLElement | null = document.querySelector('.output p');

  inputField?.addEventListener('input', (): void => {
    if (outputDiv) {
      outputDiv.textContent = inputField.value;
    }
  });
});
