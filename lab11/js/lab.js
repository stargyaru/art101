/*Author: Annalivia Martin-Straw
*Created: 05.011.2022
*License: Public Domain
/*Author: Tamara Basbuyuk
*Created: 05.11.2022
*License: Public Domain
*
*/

//button that alerts user in challenges section
var challengeEL=$("challenge");
var button1= $(challengeEL).append(<button>hi</button>);

//button that alerts user in problems section
$('#problems').append(
    $(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'Press me',
        class: 'btn-styled',
	click: function () { alert('hi this is problems'); }
	})
);

//button that alerts user in results section
$('#results').append(
    $(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'Press me',
        class: 'btn-styled',
		click: function () { alert('hi this is results'); }
	})
);
