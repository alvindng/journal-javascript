(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.words = function() {
  var counter = 0
  var words = this.body.split(' ');
  for (var i = 0; i < words.length; i++) {
    counter += 1;
  }
  return counter;
};

Entry.prototype.vowels = function() {
  var counter = 0
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
  var counter = 0
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

},{}],2:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    var wordOutput = entry.words();
    var vowelOutput = entry.vowels();
    var consonantOutput = entry.consonants();
    var teaserOutput = entry.getTeaser();

    $('#output').append("<p>This entry has " + wordOutput + " words, " + vowelOutput + " vowels, and " + consonantOutput + " consonants.</p>");
    $('#output').append("<p>Journal Entry Teaser: " + teaserOutput + "</p>");
  });
});

},{"./../js/entry.js":1}]},{},[2]);
