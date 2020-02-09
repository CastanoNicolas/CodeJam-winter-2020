export const fileHelperMixin = {
  methods: {
    readFile (filePath) {
      var _this = this
      return new Promise(function (resolve, reject) {
        // eslint-disable-next-line no-undef
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fs => {
          console.log('read:file system open: ' + fs.name)
          fs.root.getFile(filePath, { create: true, exclusive: false }, function (fileEntry) {
            console.log('read:fileEntry is file?' + fileEntry.isFile.toString())
            _this.readFileFromFE(fileEntry)
              .then(data => {
                resolve(data)
              })
          })
        })
      })
    },
    readFileFromFE (fileEntry) {
      return new Promise(function (resolve, reject) {
        fileEntry.file(function (file) {
          var reader = new FileReader()

          reader.onloadend = function () {
            console.log('read:Successful file read: ' + this.result)

            console.log(fileEntry.fullPath + ': ' + this.result)
            resolve(this.result)
          }
          console.log(this)
          reader.readAsText(file)
        })
      })
    },
    writeFile (filePath, data) {
      var _this = this
      return new Promise(function (resolve, reject) {
        // eslint-disable-next-line no-undef
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
          console.log('write:file system open: ' + fs.name)
          fs.root.getFile(filePath, { create: true, exclusive: false }, function (fileEntry) {
            console.log('write:fileEntry is file?' + fileEntry.isFile.toString())
            _this.writeFileFromFE(fileEntry, data)
              .then(() => {
                resolve()
              })
          })
        })
      })
    },
    writeFileFromFE (fileEntry, jsObject) {
      return new Promise(function (resolve, reject) {
        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(function (fileWriter) {
          fileWriter.onwriteend = function () {
            console.log('write:Successful file write...')
            // fsHelpers.readFile(fileEntry)
            resolve()
          }

          fileWriter.onerror = function (e) {
            console.log('write:Failed file write: ' + e.toString())
          }

          // If data object is not passed in,
          // create a new Blob instead.
          var dataObj = new Blob([JSON.stringify(jsObject, null, 4)], { type: 'application/json' })

          fileWriter.write(dataObj)
        })
      })
    }
  }
}
