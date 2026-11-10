input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 12; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
