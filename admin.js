
function openDialog(mode){
    $("#dialog").dialog({
        modal:true,
        autoOpen: false,
        draggable: true,
        title: '回答追加',
        width: 500,
        height: 500
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
    $(".ui-dialog-titlebar-close").hide();
    $(".ui-dialog-titlebar").css("background","#fff");
    $(".ui-dialog-titlebar").css("border","none");
    $(".ui-dialog-titlebar").css("padding","0");
    $(".ui-dialog-titlebar").css("padding-left","15px");
    $(".ui-dialog-titlebar").css("font-size","18px");
    $("#dialog").dialog("open");
    
}

