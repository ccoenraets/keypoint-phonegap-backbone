$("body").on("click", ".picture-btn", function() {

    if (!navigator.camera) {
        alert("Camera not supported");
        return;
    }

    var options = {   quality: 45,
        targetWidth: 800,
        targetHeight: 800,
        destinationType: Camera.DestinationType.FILE_URI,
        encodingType: Camera.EncodingType.JPEG,
        sourceType: Camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: false };

    navigator.camera.getPicture(
        function (imageURI) {
            setTimeout(function() {
                $('#audience-pic').attr("src", imageURI);
            });
        },
        function (message) {
            console.log(message);
        },
        options);
    return false;

});