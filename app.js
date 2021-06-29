const nums = [543, 908, 531, 577, 509, 82, 369, 831, 822, 27, 395, 178, 210, 301, 954, 517, 176, 837, 526, 69, 527, 555, 950, 346, 341, 991, 41, 704, 854, 172, 669, 481, 362, 110, 364, 578, 76, 816, 682, 441, 285, 829, 81, 724, 46, 109, 428, 246, 389, 486, 188, 397, 760, 248, 407, 493, 184, 18, 627, 964, 322, 207, 203, 737, 235, 802, 552, 892, 44, 146, 155, 809, 824, 908, 174, 157, 160, 23, 539, 380, 938, 474, 106, 551, 591, 312, 395, 563, 937, 456, 32, 855, 918, 596, 119, 597, 55, 951, 619, 146]

const quickSort = arr => {
  if (arr.length <= 1) {
    return arr
  }
  const pivot = arr.splice(Math.floor(Math.random() * arr.length), 1)
  const left = []
  const right = []

  arr.forEach(elem => elem <= pivot ? left.push(elem) : right.push(elem))

  return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort(nums))
