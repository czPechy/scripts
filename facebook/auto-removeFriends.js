document.jq = $;
function removeFriend() {
	document.jq('[aria-label="Friends"][role=button]').click()
	setTimeout(function(){ 
		document.jq('[role=menuitem]:last-child').click(); 
		setTimeout(function(){ 
			document.jq('[aria-label="Confirm"]').click()
			setTimeout(function(){ 
				removeFriend();
			}, 500);
		}, 500);
	}, 1000);
}
removeFriend();
