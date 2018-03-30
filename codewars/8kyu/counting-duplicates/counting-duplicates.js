const duplicateCount = text => Array.from(text.toLowerCase()).filter((value, index, array) =>
    array.indexOf(value) !== index && array.lastIndexOf(value) === index).length;