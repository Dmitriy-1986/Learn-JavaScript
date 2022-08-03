let arr = [
    ['ar-1', ' arr-1.2', ' arr-1.3'], 
    ['ar-2', ' arr-2.2', ' arr-2.3'], 
    ['ar-3', ' arr-3.2', ' arr-3.3'],
    ['ar-4', ' arr-4.2', ' arr-4.3'],
    ['ar-5', ' arr-5.2', ' arr-5.3'],
    ['ar-6', ' arr-6.2', ' arr-6.3'],
    ['ar-7', ' arr-7.2', ' arr-7.3'],
    ['ar-8', ' arr-8.2', ' arr-8.3'],
    ['ar-9', ' arr-9.2', ' arr-9.3'],
];

for (let i = 0; i < arr.length; i++) {
    console.log('#' + (i + 1) + ' | ' + arr[[i]] + '; ');
}

/* RESULT:
    #1 | ar-1, arr-1.2, arr-1.3; 
    #2 | ar-2, arr-2.2, arr-2.3; 
    #3 | ar-3, arr-3.2, arr-3.3; 
    #4 | ar-4, arr-4.2, arr-4.3; 
    #5 | ar-5, arr-5.2, arr-5.3; 
    #6 | ar-6, arr-6.2, arr-6.3; 
    #7 | ar-7, arr-7.2, arr-7.3; 
    #8 | ar-8, arr-8.2, arr-8.3; 
    #9 | ar-9, arr-9.2, arr-9.3; 
*/
