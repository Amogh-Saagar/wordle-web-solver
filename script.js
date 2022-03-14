var en = ''

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                en = rawFile.responseText;
                textProcess()
            }
        }
    }
    rawFile.send(null);
}
function textProcess()
{
	console.log(en.split(' '));
}

readTextFile('./en5');

function on_click(){  
        
        var correct = [null, null, null, null, null]
        var guesses_cache = []
        var yellow_all = []
		const words = en.split(' ');
        var guesses = words; 
        for (let i = 1; i<6; i++){
            console.log(i);
            var word =  document.getElementById("word" + i).value;
            if (word.length == 0){
                return
            }
            if (word.length != 5 && word.length > 0){
                document.getElementById('output').innerHTML = 'please enter a 5 letter word in input number ' + i;
        }
            var green = document.getElementById("green" + i).value.split(' ');
            for (var j = 0; j<green.length; j++){
                correct[word.indexOf(green[j])] = green[j];
            }
            console.log(correct)
            var yellow = document.getElementById("yellow" + i).value.split();
            yellow_all += yellow;
            guesses_cache = []
            //loops through guesses to elminate all words which are not compatible
            for (var j = 0; j<guesses.length; j++){
                var run = true;
                //logic for green
                for (var k = 0; k<correct.length; k++){
                    if (correct[k] != null && guesses[j].indexOf(correct[k]) != word.indexOf(correct[k])){
                        run = false;
                    }
                }
                if (run){
                    guesses_cache.push(guesses[j])
                }
                //logic for yellow

            }
            console.log(guesses_cache) 
        }
	}
