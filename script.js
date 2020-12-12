function convert(value) {
    let age = document.getElementById('ageHuman').value
    let year;
    let month;
    if (value == 'a') {
        if (age <= 21) {
            if (age < 10.5) {
                year = 0
                month = (((parseFloat(age) / 10.5).toFixed(2)).split('.')[1]).split('')[0]
                console.log(month)
                document.getElementById('output').innerHTML = year
                document.getElementById('month').innerHTML = month

            } else {
                year = (age / 10.5).toFixed(2).split('.')[0]
                console.log(year)
                month = (((parseInt((age / 10.5).toFixed(2).split('.')[1]) * 12) / 100).toFixed(1)).split('.')[1]
                console.log(month)
                document.getElementById('output').innerHTML = year
                document.getElementById('month').innerHTML = month

            }
        } else {
            let total = ((parseFloat(age - 21) / 4) + 2).toFixed(2)
            console.log(total)
            year = total.toString().split('.')[0]
            month = ((parseInt(total.toString().split('.')[1]) * 12) / 100).toFixed(0)
            document.getElementById('output').innerHTML = year
            document.getElementById('month').innerHTML = month



        }
        // var img = document.createElement('img');
        // img.src = '200.gif';
        // img.id = 'image'
        // document.getElementById('body').appendChild(img);


    } else {
        document.getElementById('ageHuman').value = '';
        document.getElementById('month').innerHTML = '____';
        document.getElementById('output').innerHTML = '____';


    }


}
