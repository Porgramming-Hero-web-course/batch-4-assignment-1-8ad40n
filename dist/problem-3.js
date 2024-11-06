"use strict";
const countWordOccurrences = (str, keyword) => {
    str = str.toLowerCase();
    keyword = keyword.toLowerCase();
    let totalCount = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str.slice(i, i + keyword.length) === keyword) {
            totalCount++;
            i += keyword.length - 1;
        }
    }
    return totalCount;
};
console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
