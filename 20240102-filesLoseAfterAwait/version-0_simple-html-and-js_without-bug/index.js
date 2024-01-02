
let files1, files2, files3, files4
window.addEventListener("load", function () {
  const upLoadButton = document.getElementById("uploadButton")
  files1 = upLoadButton.files
  upLoadButton.addEventListener("click", function () {
    files2 = upLoadButton.files
  })

  upLoadButton.addEventListener("change", async function (e) {
    files3 = upLoadButton.files
    console.log("start await", performance.now())
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log("end await", performance.now())
    files4 = upLoadButton.files
    console.table([
      files1,
      files2,
      files3,
      files4
    ])
    console.log("is files1 === files2 ?", files1 === files2)
    console.log("is files1 === files3 ?", files1 === files3)
    console.log("is files2 === files3 ?", files2 === files3)
    console.log("is files3 === files4 ?", files3 === files4)
  })
})


