function convert(value) {
    let age = (document.getElementById('ageHuman').value)
    let yourDogAge = 2;
    if (value == 'a') {
        age = (age) - 21;
        age = ((age) / 4).toFixed(2);
        console.log('age is', age)
        yourDogAge = (parseFloat(yourDogAge) + parseFloat(age)).toFixed(2);
        yourDogAge = yourDogAge.toString()
        let ageYear = yourDogAge.split(".")[0]
        console.log('full year',
            ageYear)
        document.getElementById('output').innerHTML = ageYear
        let ageMonth = yourDogAge.split(".")[1]
        console.log('aaaaaa', ageMonth)
        if (ageMonth == undefined) {
            console.log('0 momth');
            document.getElementById('month').innerHTML = 0
        } else {
            let ageMonthfinal = (12 * ageMonth) / 100;
            document.getElementById('month').innerHTML = ageMonthfinal
        }


        var img = document.createElement('img');
        img.src = '200.gif';
        document.getElementById('body').appendChild(img);

    } else {
        document.getElementById('body').innerHTML = '';
        document.getElementById('month').innerHTML = '____';
        document.getElementById('output').innerHTML = '____';



    }





}