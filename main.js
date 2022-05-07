function comedy() {
    let randomMessage = Math.floor(Math.random() * 6);
    switch (randomMessage) {
        case 0:
            let dave = document.getElementById('paragraph').innerHTML = 'You know you must be doing something right if old people like you - Dave Chapplle';
            break;
        case 1:
            let hart = document.getElementById('paragraph').innerHTML = 'These glasses are way 2 big for my damn face! I look like I got on a damn Tinted Construction Mask. - Kevin Hart';
            break;
        case 2:
            let jim = document.getElementById('paragraph').innerHTML = 'Behind every great man is a woman rolling her eyes. - Jim Carey';
            break;
        case 3:
            let robin = document.getElementById('paragraph').innerHTML = 'Im sorry, if you were right, Id agree with you. - Robin William';
            break;
        case 4:
            let mack = document.getElementById('paragraph').innerHTML = 'A bookstore is one of the only pieces of evidence we have that people are still thinking. - Jerry Seinfield';
            break;
        case 5:
            let Redd = document.getElementById('paragraph').innerHTML = 'When you only make $3000 a year in social security, its hard to be a philanthropist. - Redd Fox';
            break;
    }

};
comedy();


document.getElementById('Jokes-title').innerHTML = "Some of my favorites Jokes from this comedians";
document.getElementById('overview').innerHTML = "The jokes range from Dave Chappelle to Robin William. So, enjoy and make sure you laugh a little bit.";

let message = document.querySelector('#paragraph');

message.style.fontSize = '16px';
message.style.padding = '0 20px 0 20px';