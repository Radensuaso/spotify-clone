/* window on load */
window.onload = function () {
  /* get play and pause div*/
  const playPause = document.querySelector("div.play-pause")

  /* function to toggle play and pause button */
  playPause.addEventListener("click", function togglePlayPause() {
    const play = document.querySelector("div.play-pause .play-footer")
    const pause = document.querySelector("div.play-pause .pause-footer")
    play.classList.toggle("d-none")
    pause.classList.toggle("d-none")
  })

  /* get speaker div */
  const speakerOnOff = document.querySelector("div.speaker-container")

  /* function to toggle speaker on and off */
  speakerOnOff.addEventListener("click", function toggleSpeakerOnOff() {
    const speakerOn = document.querySelector(
      "div.speaker-container .speaker-on-footer"
    )
    const speakerOff = document.querySelector(
      "div.speaker-container .speaker-off-footer"
    )
    speakerOn.classList.toggle("d-none")
    speakerOff.classList.toggle("d-none")
  })
}
