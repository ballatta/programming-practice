function chapter_1() {
    /**
     * Chapter 1:
     * 
     * Functions
     */

    // function definition
    function basic() {
        console.log('I am a basic bitch.')
    }

    console.log('before')
    // function call
    basic()  // the console log will actually be run here.
    console.log('after')

    // function reference
    basic

    //QUESTION: What critical thing do we need to do to call a function as opposed
    //to simply referring to it?

            // ANSWER: call_function_with() 
                // You must use parentheses

    // things you can do with function references
    console.log('Printing the reference only')
    console.log(basic)              // effectively does nothing
    const alt_basic = basic         // give it a new name

    // once you give it a new name, you can run it with the new name$
    console.log('Running the same function with a new name:')
    alt_basic()

    /**
     * References let you pass the function around without actually calling it.
     * This is really useful if you want to give that chunk of code to somplace else
     * so it can be used there.
     */
}

// UNCOMMENT to run chapter 1
//chapter_1()

function chapter_2(verbose) {
    /** Chapter 2
     * 
     * Positional Arguments
     * 
     * In programming, functions recieve positional arguments. Depending on
     * how the function is defined, a function can recieve any number of
     * arguments, and some of them can even be optional. Some functions,
     * like basic() above, take zero arguments.
     * 
     * Arguments are the input to a function. Most of the time, you are going
     * to want a function to do something with data in a fixed.
     */

     // function that adds two numbers together
     function add(x, y) {
         return x + y
     }

     const sum = add(1, 3)
     console.log('1 + 3 = ' + sum)

     // You can call arguments whatever you want. They just have to follow a
     // consistent POSITIONAL pattern.

     // bad
     add(1, 2, 3)               // too many arguments

     // a tale of how javascript can destroy you...
     let value = add(1)         // too few arguments
     if (verbose) {
        if (typeof value === 'number') {
            console.log('Value is a number')
        }
        console.log('VAL (it is not really a number):', value)
    }

}

// UNCOMMENT to run chapter 2
// chapter_2()


function chapter_3() {
    /**
     * Chapter 3
     * 
     * Callback Functions
     * 
     * Why do we use callback functions?
     * 
     * We use callback functions because it allows us to send our code someplace
     * else for it to be called at a later time. 
     * 
     */

    function handleNetworkResponse(response) {
        console.log('*** Inside Callback Function ***')
        console.log(response)
        console.log('*******')
        // Whatever you ultimately want to do with the response, you can do
        // it now...
    }

    // theoretical student search api response
    const response = {
    name: 'Tom Jones',
    id: 27437372,
    parentName: 'Ashley Jones',
    homeroomId: 4
    }

    // theoretical library function (in a separate file)
    function get(url, callback) {
        console.log('---- Inside library ------')
        console.log(url, callback)
        // do technical stuff to get a server to talk to me
        console.log('Technical stuff done. We got a successful response; yay!')
        const magicResponse = response
        console.log('## enter callback ##')
        callback(magicResponse)  // call the function, with it's new name
        console.log('## exit callback ##')
        console.log('----------')
    }

    get('api.studentname.com', handleNetworkResponse)





    /**
     * This is another example that is much briefer; mainly because the other
     * stuff is defined above for us already.
     */

    // study this until you REALLY get it.
    console.log('PART 2\n\n')
    function handleResponse(response) {
        console.log('Name: ', response.name)
    }
    get('mysite.com', handleResponse)


    function callThisWhenYouGetThat() {
        /**
         * Don't you dare look at this before you understand the above.
         */
        // rephrase of the above
        let handle_response = response => console.log('Name: ', response.name)
        get('mysite.com', handle_response)

        // even more concise
        get('mysite.com', (r) => console.log('Name: ', r.name))

        // even MORE MORE concise
        get('mysite.com', ({name}) => console.log(`Name ${name}`))
    }
}

// UNCOMMENT to run chapter 3
// chapter_3()