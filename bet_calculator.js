results = []
let a = 0;
results_new = []



for (let i = 0; i <= 99; i++){
    results[i]= i
} 


function homeWin (arr) {    
    for (let i = 0; i <= arr.length ; i++) {  
        if (!(Math.floor(i / 10) > i % 10)) {
            results_new[a] = results[i]
            a++;
        }
    }
    return results_new
}

function awayWin (arr) {
    for (let i = 0; i <= arr.length; i++) {   
        if (!(Math.floor(i / 10) < i % 10)) {
            results_new[a] = results[i]
            a++;
        }
    }
    return results_new
}

function tieGame (arr) {
    for (let i = 0; i <= arr.length; i++) {   
        if (!(Math.floor(i / 10) == i % 10)) {
            results_new[a] = results[i]
            a++;
        }
    }
    return results_new
}
function goalScored (arr, goals) {
    for (let i = 0; i <= arr.length; i++) {   
        if (!(Math.floor(results[i] / 10) + results[i] % 10 >= goals)) {
            results_new[a] = results[i]
            a++;
        }
    }
    return results_new
}

function bothTeamsScore (arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (Math.floor(results[i] / 10) < 1 || results[i] % 10 < 1 )  {
            results_new[a] = results[i]
            a++;
       }
    }

    return results_new
}

function oneTeamDontScore( arr ) {

    for (let i = 0; i <= arr.length; i++) {
        if (!(Math.floor(results[i] / 10) < 1 || results[i] % 10 < 1 ))  {
            results_new[a] = results[i]
            a++;
       }
    }

    return results_new
}

function oneTeamDontScore() {

    for (let i = 0; i <= 100; i++) {
        if (!(Math.floor(results[i] / 10) < 1 || results[i] % 10 < 1 ))  {
            results_new[a] = results[i]
            a++;
       }
    }

    return results_new
}

function printResults (arr) {
    for (let i = 0; i <= arr.length; i++) {
        console.log(Math.floor(arr[i] / 10) + ':'+ arr[i] % 10)
    }
}

