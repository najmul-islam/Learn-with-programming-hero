var name = [3, 5, 6, 7, 3, 5, 1, 2, 8, 9, 11, 15];
var uniqueName = [];

for (var i = 0; i < name.length; i++) {
  var element = name[i];
  var index = uniqueName.indexOf(element);
  if (index == -1) {
    uniqueName.push(element);
  }
}
console.log(uniqueName);
