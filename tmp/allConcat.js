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
