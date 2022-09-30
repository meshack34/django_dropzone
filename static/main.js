

Dropzone.autoDiscover=true;
var myDropzone = new Dropzone("#designdocumentexcel",
{
    acceptedFiles : ",jpg,.csv,.docs,.pdf",
    init: function(){
        this.on("error", function(file, errorMessage) {
            alert("error : " + errorMessage );
        });

    },
}
);