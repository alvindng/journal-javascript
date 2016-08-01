function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.words = function() {
  var counter = 0;
  var words = this.body.split(' ');
  for (var i = 0; i < words.length; i++) {
    counter += 1;
  }
  return counter;
};

Entry.prototype.vowels = function() {
  var counter = 0;
  var characters = this.body.split('');
  for (var i = 0; i < characters.length; i++) {
    if (characters[i] === 'a' || characters[i] === 'e' || characters[i] === 'i' || characters[i] === 'o' || characters[i] === 'u') {
      counter += 1;
    } else {

    }
  }
  return counter;
};

Entry.prototype.consonants = function() {
  var counter = 0;
  var characters = this.body.split('');
  for (var i = 0; i < characters.length; i++) {
    if (characters[i] === 'a' || characters[i] === 'e' || characters[i] === 'i' || characters[i] === 'o' || characters[i] === 'u' || characters[i] === " ") {

    } else {
      counter += 1;
    }
  }
  return counter;
};

Entry.prototype.getTeaser = function() {
  var preview = [];
  var words = this.body.split(' ');
  for (var i = 0; i < 8; i++) {
    if (words[i].includes('.')) {
      preview.push(words[i]);
      break;
    } else {
      preview.push(words[i]);
    }
  }
  preview = preview.join(' ');
  return preview;
};

exports.entryModule = Entry;
