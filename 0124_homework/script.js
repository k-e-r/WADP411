/* JavaScript DOM Exercises 01 */

/*
Exercise 01
-----------
Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
// let p = document.querySelector('p');
// p.innerHTML = p.innerHTML
//   .split(' ')
//   .map((val) => {
//     if (val.length > 8) {
//       return '<span style="background-color: yellow">' + val + '</span>';
//     }
//     return val;
//   })
//   .join(' ');

// # additional1
const check = (val, ch) => {
  val = val.replace(ch, '');
  if (val.length > 8) {
    if (val.indexOf(ch) > -1) {
    }
    return '<span style="background-color: yellow">' + val + '</span>' + ch;
  }
  return val + ch;
};

let p = document.querySelector('p');
p.innerHTML = p.innerHTML.replaceAll('\n', ' ');
p.innerHTML = p.innerHTML
  .split(' ')
  .map((val) => {
    if (val.indexOf('.') > -1) {
      return check(val, '.');
    } else if (val.indexOf(',') > -1) {
      return check(val, ',');
    } else if (val.indexOf('!') > -1) {
      return check(val, '!');
    } else if (val.indexOf('?') > -1) {
      return check(val, '?');
    } else if (val.length > 8) {
      return '<span style="background-color: yellow">' + val + '</span>';
    }
    return val;
  })
  .join(' ');

// # additional2 of answer 1
// p.innerHTML = p.innerText
//   .split(' ')
//   .map(word => {
//     return word.length > 8
//       ? `<span style="background-color: yellow">${word}</span>`
//       : word;
//   })
//   .join(' ');

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const a = document.createElement('a');
a.href = 'http://officeipsum.com/';
/*
 * Either is fine
 */
// a.innerText = 'link';
a.textContent = 'link';
p.after(a);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
p.innerHTML = p.innerHTML.split('.').join('.<br/>');

/*
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
// const div = document.createElement('div');
// div.innerText = p.innerText.split(' ').length + ' words';
// document.querySelector('h1').after(div);

// # additional
const div = document.createElement('div');
// console.log(p.innerText.split(/ |\n/));
// for last </br>
div.innerText = p.innerText.split(/ |\n/).length - 1 + ' words';
document.querySelector('h1').after(div);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲)
*/
p.innerHTML = p.innerHTML.replaceAll('?', '🤔').replaceAll('!', '😲');
