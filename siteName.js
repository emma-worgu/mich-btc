// console.log('Sitename Working...')

// const siteName1 = document.location.hostname;

const text = document.getElementsByClassName('sitename');
const siteNumber = document.getElementById('sitenumber');
let arr = [];
arr = siteName.split('');
let newarr
let index
// console.log(text);

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])

    if (arr[i] === '.') {
        // console.log(i)

        index = i;
    }
}

newarr = arr.splice(0, index);
let newName = newarr.join('').toUpperCase();

for (let i = 0; i < text.length; i++) {
    // console.log(text[i])

    text[i].textContent = newName;
    
    // const element = array[index];
    
}

(function siteNumberFunc() {
    if (siteNumber === null) {
        return null;
    }

    if (siteName === 'plantonicextrade.com') {
        siteNumber.textContent = '+1(479)485-1098'
    } else {
        return;
    }
} ());