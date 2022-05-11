import throttle from "lodash.throttle";

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle (onLocalStorageSave, 1000));

function onLocalStorageSave (data) {
    // data is an object containing properties specific to that event
    // console.log(data);
    const dataJSON = JSON.stringify(data.seconds);
    localStorage.setItem("videoplayer-current-time", dataJSON);
}

const savedTime = JSON.parse (localStorage.getItem("videoplayer-current-time"));

if (localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(savedTime);
}
