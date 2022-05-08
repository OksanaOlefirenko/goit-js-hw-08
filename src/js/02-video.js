import throttle from "lodash.throttle";

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle (onLocalStorageSave, 1000));

function onLocalStorageSave (data) {
    // data is an object containing properties specific to that event
    // console.log(data);
    const dataJSON = JSON.stringify(data);
    localStorage.setItem("videoplayer-current-time", dataJSON);
}

const savedTimeSeconds = JSON.parse (localStorage.getItem("videoplayer-current-time")).seconds;

player.setCurrentTime(savedTimeSeconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


