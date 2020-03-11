function _1初始化 () {
    _設定變數()
    _顯示歡迎畫面()
}
function _2顯示偵測額溫 () {
    _多次採樣取平均溫度()
    _顯示溫度()
}
function _3處理取得的溫度 () {
    if (校正後的溫度 <= 發燒溫度) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(500)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    A程序處理中 = 1
    basic.clearScreen()
    _2顯示偵測額溫()
    _3處理取得的溫度()
    A程序處理中 = 0
})
function _設定變數 () {
    發燒溫度 = 37.5
    溫度校正值 = 0
    採樣次數 = 5
}
function _多次採樣取平均溫度 () {
    for (let index = 0; index <= 採樣次數 - 1; index++) {
        _取得感測器溫度()
        _LED進度條(Math.map(index, 0, 採樣次數, 0, 4))
        溫度累加值 = 溫度累加值 + 偵測到的溫度
    }
    偵測到的溫度 = 溫度累加值 / 採樣次數
    溫度累加值 = 0
}
input.onButtonPressed(Button.B, function () {
    if (A程序處理中 == 0) {
        B程序處理中 = 1
        basic.showNumber(溫度校正值)
        basic.clearScreen()
        B程序處理中 = 0
    }
})
function _顯示歡迎畫面 () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
}
function _取得感測器溫度 () {
    偵測到的溫度 = MLX90614.temperature(TemperatureLocation.Object)
}
function _LED進度條 (rows: number) {
    basic.clearScreen()
    for (let ledX = 0; ledX <= 4; ledX++) {
        led.plot(ledX, 4 - rows)
    }
    basic.pause(80)
}
function _顯示溫度 () {
    basic.clearScreen()
    校正後的溫度 = 偵測到的溫度 + 溫度校正值
    basic.showString(convertToText(校正後的溫度).substr(0, 5))
}
let B程序處理中 = 0
let 偵測到的溫度 = 0
let 溫度累加值 = 0
let 採樣次數 = 0
let 溫度校正值 = 0
let A程序處理中 = 0
let 發燒溫度 = 0
let 校正後的溫度 = 0
_1初始化()
basic.forever(function () {
    if (A程序處理中 == 0) {
        basic.showArrow(ArrowNames.West)
    }
})
