let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.round(Math.random())

    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        coin.flip()
        if (this.state === 0) {
            document.body.append('Heads')
        } else {
            document.body.append('Tails')
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        coin.flip()
        if (this.state === 0) {
            image.src = "./images/headsUp.jpeg"
            document.body.append(image)
        } else {
            image.src = "./images/tailsUp.jpeg"
            document.body.append(image)
        }
        return image;
    }
};

function display20Flips() {
    for (let index = 0; index <= 20; index += 1) {
        coin.toString()
    }
}
display20Flips()
function display20Images() {
    for (let index = 0; index <= 20; index += 1) {
        coin.toHTML()
    }
}
display20Images()