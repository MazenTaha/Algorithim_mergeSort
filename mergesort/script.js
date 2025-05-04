// let array = [];

// function handleUserInput() {
//     const input = document.getElementById("user-input").value;
//     array = input.split(',').map(Number).filter(n => !isNaN(n));
//     if (array.length === 0) {
//         alert("Please enter valid numbers.");
//         return;
//     }
//     createBars(array);
//     mergeSort(array, 0, array.length - 1);
// }

// function createBars(arr) {
//     const container = document.getElementById("array-container");
//     container.innerHTML = '';
//     arr.forEach(value => {
//         const bar = document.createElement('div');
//         bar.classList.add('bar');
//         bar.style.height = `${value * 5}px`;
//         container.appendChild(bar);
//     });
// }

// async function mergeSort(arr, l, r) {
//     if (l >= r) return;

//     const m = Math.floor((l + r) / 2);
//     await mergeSort(arr, l, m);
//     await mergeSort(arr, m + 1, r);
//     await merge(arr, l, m, r);
//     createBars(array);
//     await sleep(500);
// }

// async function merge(arr, l, m, r) {
//     const left = arr.slice(l, m + 1);
//     const right = arr.slice(m + 1, r + 1);

//     let i = 0, j = 0, k = l;

//     while (i < left.length && j < right.length) {
//         if (left[i] <= right[j]) {
//             arr[k++] = left[i++];
//         } else {
//             arr[k++] = right[j++];
//         }
//     }

//     while (i < left.length) arr[k++] = left[i++];
//     while (j < right.length) arr[k++] = right[j++];
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
