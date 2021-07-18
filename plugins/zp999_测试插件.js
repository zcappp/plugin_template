import React from "react"

function render(ref) {
    return <div>测试插件</div>
}

function onInit(ref) {

}

const css = `
.zp999 {
    color: red;
}
`

$plugin({
    id: "zp999",
    props: [],
    render,
    onInit,
    css
})