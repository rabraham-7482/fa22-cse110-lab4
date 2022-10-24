function display_time() {
    let d = new Date()
    console.log(d.toLocaleTimeString())
}
setInterval(display_time, 1000)