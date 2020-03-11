function _2顯示偵測額溫 () {
    _更新模擬用溫度值()
    _取得溫度()
    _顯示溫度()
}
function _1初始化 () {
    _設定變數()
    _顯示歡迎畫面()
}
function _3處理取得的溫度 () {
    if (AB處理中 == 0) {
        if (偵測到的溫度 <= 發燒溫度) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    溫度校正值 = 溫度校正值 - 0.5
})
function _設定變數 () {
    發燒溫度 = 37.5
    溫度校正值 = 0
}
function _更新模擬用溫度值 () {
    模擬用的溫度 = Math.randomRange(35, 39)
}
input.onButtonPressed(Button.B, function () {
    溫度校正值 = 溫度校正值 + 0.5
})
function _顯示歡迎畫面 () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function _取得溫度 () {
    偵測到的溫度 = 模擬用的溫度
}
input.onButtonPressed(Button.AB, function () {
    AB處理中 = 1
    basic.showNumber(溫度校正值)
    AB處理中 = 0
})
function _顯示溫度 () {
    basic.showNumber(偵測到的溫度 + 溫度校正值)
}
let 模擬用的溫度 = 0
let 溫度校正值 = 0
let 發燒溫度 = 0
let 偵測到的溫度 = 0
let AB處理中 = 0
_1初始化()
basic.forever(function () {
    _2顯示偵測額溫()
    _3處理取得的溫度()
})
