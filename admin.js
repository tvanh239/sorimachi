
function openDialog(mode){
    $("#dialog").dialog({
        modal:true,
        autoOpen: false,
        draggable: true,
        title: '回答追加',
        width: 800,
        height: 800
    });
    ClassicEditor
		.create( document.querySelector( '#editor' ), {
			// toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
            
		} )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( err => {
			console.error( err.stack );
		} );
    
    ClassicEditor
		.create( document.querySelector( '#editor2' ), {
			// toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
            
		} )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( err => {
			console.error( err.stack );
		} );
    $(".ui-dialog-titlebar-close").hide();
    $(".ui-dialog-titlebar").css("background","#fff");
    $(".ui-dialog-titlebar").css("border","none");
    $(".ui-dialog-titlebar").css("padding","0");
    $(".ui-dialog-titlebar").css("padding-left","15px");
    $(".ui-dialog-titlebar").css("font-size","18px");
    $("#dialog").dialog("open");
    
}

document.addEventListener("DOMContentLoaded", () => {
  const dropZone = document.getElementById("dropZone");

  // Create hidden file input
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.multiple = true;
  fileInput.style.display = "none";
  fileInput.addEventListener("change", () => handleFiles(fileInput.files));
  
  // Append file input to main container
  dropZone.appendChild(fileInput);

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragged-over");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragged-over");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragged-over");
    const files = e.dataTransfer.files;
    handleFiles(files);
  });

  // Trigger file input on click
  dropZone.addEventListener("click", () => {
    fileInput.click();
  });
});

function handleFiles(files) {
  var string_file_name = "";
  for(i=0;i<files.length;i++){
    if(i==0){
      string_file_name =  files[i].name;
    }else{
      string_file_name = string_file_name + ", " + files[i].name;
    }
    document.getElementById("dropText").innerText = string_file_name;
  }
}

function closeDiaLog(){
  $("#dialog").dialog("close");
}