document.jq = $;

function start() {
	document.jq('[data-test-accordion-item-header]').click();
	clickToItem();
}

function clickToItem() {
	console.log('try click');
	if(document.jq('[data-test-investor-dashboard-all-list-detail] [data-test-investor-dashboard-all-list-sell-button]') === null) {
		setTimeout(clickToItem, 1000);
	} else {
		document.jq('[data-test-investor-dashboard-all-list-detail] [data-test-investor-dashboard-all-list-sell-button]').click();
		clickToConfirm();
	}
}

function clickToConfirm() {
	console.log('try click');
	if(document.jq('[data-test-modal-button]') === null) {
		setTimeout(clickToConfirm, 1000);
	} else {
		document.jq('[data-test-modal-button]').click();
		waitToNext();
	}
}

function waitToNext() {
	console.log('try click');
	if(document.jq('[data-test-modal-button]') !== null) {
		setTimeout(waitToNext, 1000);
	} else {
		start();
	}
}

start();
