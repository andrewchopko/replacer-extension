var inputs = document.querySelectorAll('input[type=text]');

var dictionary = {
  Foo: 'bar',
  cat: 'Dog',
  Helo: 'hello',
  heldp: 'help'
}

if(inputs.length > 0){
  for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keydown', checkForTranslate)
  }
}

function checkForTranslate(e){
  if (e.keyCode === 32){
    var elements = e.target.value.trim().split(" ");
    var lastElement = elements[elements.length - 1];

    if (lastElement !== undefined && dictionary[lastElement] !== undefined){
      elements[elements.length - 1] = dictionary[lastElement];
      var str = elements.join(' ');
      e.target.value = str;
    }
  }
}