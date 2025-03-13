# Buzzword

Buzzword is a word puzzle inspired by Spelling Bee from the New York Times.
The puzzle displays seven letters in a honeycomb-like arrangement,
The goal is to find a word containing all seven letters, with repeated letters allowed.
There is a different puzzle each day.

Buzzword was created for people who enjoy Spelling Bee but find it too time-consuming.
Buzzword will not waste your time, because you only need to find one word, and there
is only one puzzle per day.

The word list was obtained from the following sources:
* The [SOWPODS](https://github.com/jesstess/Scrabble/blob/master/scrabble/sowpods.txt) (Scrabble) lexicon,
* The [WordsAPI](https://www.wordsapi.com/) lexicon (based on [WordNet](https://wordnet.princeton.edu/)), and
* The [SCOWL](http://wordlist.aspell.net/dicts/) small US English lexicon.

Only words that appear in all three sources were retained. From the remaining words, we found
all words with seven distinct letters, such that no other word has exactly the same set of letters.
This guarantees that the solution is unique, based on our word list. A few words were removed because
they could be offensive.

Please bear in mind that a list of all English words cannot be constructed, because English is
a living language. You may find a valid word that is not accepted as a solution because it is not
in our word list. Keep trying until you find a word that is accepted. It may be a word that is
outside of your current vocabulary.
