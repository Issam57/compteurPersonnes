let count = $('#count')
let counter = 0;
let btn1 = $('#btn1');
let btn2 = $('#btn2');
let btn3 = $('#btn3');
let doc = $(document);
let svg = $('svg');


    btn1.click(() => {
        counter++;
        if(counter < 10) {
            count.text('00' + counter);
        } else if(counter < 100) {
            count.text('0' + counter);
        } else {
            count.text(counter);
        }
    });
    btn2.click(() => {
        counter--;
        if(counter < 0) {
            counter = 0;
        } else {
            if(counter < 10) {
                count.text('00' + counter);
            } else if(counter < 100) {
                count.text('0' + counter);
            } else {
                count.text(counter);
            }
        }
    });
    btn3.click(() => {
        counter = '00' + 0;
        count.text(counter);
    });

    doc.keydown(() => {
        svg.toggle();
    })


