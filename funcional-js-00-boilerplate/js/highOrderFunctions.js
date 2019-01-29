const array1 = [1, 2, 3]
const array2 = []
const array3 = []
for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i] * 2);

}
array3 = array1.map(item => item * 2)