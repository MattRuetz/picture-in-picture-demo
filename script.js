const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const openBtn = document.getElementById('choose-media-btn');

//Prompt user to select media stream, pass to video element, display
const selectMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        console.log("Error streaming media!", err);
    }
}


openBtn.addEventListener('click', (e) => {
    selectMediaStream();
});

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});
