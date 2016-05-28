'use strict'

var tg = require('telegram-node-bot')('228379592:AAElbqkzQbAafGNkJzadwK3hMPByMU_UFvo')
var results = 'http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/11/rebel-symbol.jpg';

tg.router.
	when (['/menu'], 'MenuController')
tg.controller('MenuController', ($) => { 
    tg.for('/menu', ($) => {
$.runMenu({
	 message: 'Please select one of the options: ',
	 layout: 2,
    'Scoreboard': () => {}, //will be on first line
    'Rules': () => {}, //will be on first line
    'Bet Now!': () => {}, //will be on second line
	options: {
        parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
    },
    'Exit': {
        message: 'Sute?',
        resize_keyboard: true,
        'Yes': () => {

        },
        'No': () => {

        }
    },
    'anyMatch': () => { //will be executed at any other message

    }
})  
})
})


tg.router.
    when(['/reg'], 'NameController')
tg.controller('NameController', ($) => { 
    tg.for('/reg', ($) => {
         $.sendMessage('Send me your name!')
         $.waitForRequest(($) => {
             $.sendMessage('Hi ' + $.message.text + '!')
         }) 
    })   
})

tg.router.
    when(['/sum :num1 :num2'], 'SumController')
	tg.controller('SumController', ($) => {
    tg.for('/sum :num1 :num2', ($) => {
        $.sendMessage(parseInt($.query.num1) + parseInt($.query.num2))
    })
})

tg.controller('StartController', ($) => {
    tg.for('/profile', ($) => {
        if(!logined){
            $.routeTo("/login")
        }       
    }) 
})

tg.router.
    when(['ping'], 'PingController')
	
tg.controller('ExampleController', ($) => {
    //you can create any functions, variables, etc. here

    tg.for('/test', ($) => {
         //will handle /test command        
    })  
    tg.for('/example', ($) => {
         //will handle /exaple command      
    })
})



tg.controller('PingController', ($) => {
    tg.for('ping', () => {
        $.sendMessage('pong')
    })
}) 