app.controller("NavCtrl", function() {
	
	$('#navbar li').click(function() {
    $(this).addClass('active').siblings('li').removeClass('active');
});

	
});