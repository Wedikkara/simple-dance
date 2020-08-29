for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . .
        . # # # #
        . . # . #
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        # . # . #
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        # # # # .
        . . # . .
        . # # # #
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
}
