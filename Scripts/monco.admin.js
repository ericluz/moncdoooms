$(function (){

    // DataTables uner Index Management Page
    $('#productlisting-data-table').dataTable();

    // DataTables uner User Management Page
    $('#userlisting-data-table').dataTable();
    
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

})
