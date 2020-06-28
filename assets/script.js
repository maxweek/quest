//console.log($('.ball').html());

var motionPath = function () {
    /*DEMO*/
    var path = anime.path('.motion-path path');

    // var easings = [-2700, -2300, -1900, -1500, -1100, -700, -300, 100, 500];
    let easings = [];
    let easingsCount = 15;
    let easingsDelay = 400;
    let easingsStart = -3000;
    let easingTemplate = '<div class="motion_item"><div class="item water_el"></div></div>';

    let arrowTemplate = '<div class="motion_item"><div class="arrow arrow-blue"></div></div>'

    for (i = 0; i < easingsCount; i++) {
        if (i == 0) {
            easings.push(easingsStart)
        } else {
            easings.push(easings[i - 1] + easingsDelay);
        }
        if (i % 3) {
            jQuery('.motion-path').append(easingTemplate);
        } else {
            jQuery('.motion-path').append(arrowTemplate)
        }
    }
    console.log(easings);

    anime({
        targets: '.motion-path .motion_item',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'linear',
        delay: function (el, i) {
            return easings[i];
        },
        endDelay: function (el, i) {
            return easings[i] - 5800;
        },
        duration: 3000,
        loop: true
    });
    /*DEMO*/
}
//motionPath();

let tracks = [
    {
        name: '.trackSorting',
        attr: {
            pathChild: 'path',
            itemName: 'item',
            itemType: 'trash',
            arrowName: 'arrow',
            arrowColor: 'cyan',
            arrowEveryOf: 3,
            rotate: true,
            direction: 'normal'
        },
        opt: {
            duration: 3000,
            backDelay: 5000,
            loop: true,
            itemsCount: 10,
            itemsDelay: 500,
            itemsStart: -2000,
        }
    },
    {
        name: '.trackTrash',
        attr: {
            pathChild: 'path',
            itemName: 'item',
            itemType: 'trash',
            arrowName: 'arrow',
            arrowColor: 'cyan',
            arrowEveryOf: 3,
            rotate: false,
            direction: 'normal'
        },
        opt: {
            duration: 3600,
            backDelay: 4800,
            loop: true,
            itemsCount: 16,
            itemsDelay: 300,
            itemsStart: -3000,
        }
    },
    {
        name: '.trackCondense',
        attr: {
            pathChild: 'path',
            itemName: 'item',
            itemType: 'water',
            arrowName: 'arrow',
            arrowColor: 'blue',
            arrowEveryOf: 3,
            rotate: true,
            direction: 'normal'
        },
        opt: {
            duration: 3600,
            backDelay: 4800,
            loop: true,
            itemsCount: 16,
            itemsDelay: 300,
            itemsStart: -3000,
        }
    },
    {
        name: '.trackTurbo',
        attr: {
            pathChild: 'path',
            itemName: 'item',
            itemType: 'airs',
            arrowName: 'arrow',
            arrowColor: 'blue',
            arrowEveryOf: 3,
            rotate: true,
            direction: 'normal'
        },
        opt: {
            duration: 3600,
            backDelay: 4800,
            loop: true,
            itemsCount: 16,
            itemsDelay: 300,
            itemsStart: -3000,
        }
    },
    {
        name: '.trackFire',
        attr: {
            pathChild: 'path',
            itemName: 'item',
            itemType: 'airs',
            arrowName: 'arrow',
            arrowColor: 'blue',
            arrowEveryOf: 3,
            rotate: true,
            direction: 'normal'
        },
        opt: {
            duration: 3600,
            backDelay: 4800,
            loop: true,
            itemsCount: 16,
            itemsDelay: 300,
            itemsStart: -3000,
        }
    },
    {
        name: '.trackGas',
        attr: {
            pathChild: 'path',
            itemName: 'item',
            itemType: 'wind',
            arrowName: 'arrow',
            arrowColor: 'cyan',
            arrowEveryOf: 3,
            rotate: true,
            direction: 'normal'
        },
        opt: {
            duration: 3600,
            backDelay: 4800,
            loop: true,
            itemsCount: 16,
            itemsDelay: 300,
            itemsStart: -3000,
        }
    },
    {
        name: '.trackFilter',
        attr: {
            pathChild: 'path',
            itemName: 'item',
            itemType: 'filter',
            arrowName: 'arrow-min',
            arrowColor: 'gray',
            arrowEveryOf: 2,
            rotate: true,
            direction: 'normal'
        },
        opt: {
            duration: 3600,
            backDelay: 5600,
            loop: true,
            itemsCount: 12,
            itemsDelay: 500,
            itemsStart: -3000,
        }
    },
    {
        name: '.trackSlag',
        attr: {
            pathChild: 'path',
            itemName: 'item',
            itemType: 'slag',
            arrowName: 'arrow-min',
            arrowColor: 'gray',
            arrowEveryOf: 2,
            rotate: true,
            direction: 'normal'
        },
        opt: {
            duration: 3600,
            backDelay: 5600,
            loop: true,
            itemsCount: 12,
            itemsDelay: 500,
            itemsStart: -3000,
        }
    },
    {
        name: '.trackEnergy',
        attr: {
            pathChild: 'path',
            itemName: 'item',
            itemType: 'energy',
            arrowName: 'arrow-big',
            arrowColor: 'yellow',
            arrowEveryOf: 4,
            rotate: true,
            direction: 'normal'
        },
        opt: {
            duration: 3600,
            backDelay: 3000,
            loop: true,
            itemsCount: 12,
            itemsDelay: 300,
            itemsStart: -3000,
        }
    },
]

function startTracks(elements){
    elements.map((el) => {
        trackConstructor(el);
    })
}
function trackConstructor(el){
    let itemBox = el.name + ' .items .itemsContainer';
    let path = anime.path(el.name + ' ' + el.attr.pathChild);
    let items = [];

    let itemTemplate = '<div class="motion_item ' + el.attr.itemName + '"><div class="' + el.attr.itemType + ' item"></div></div>';
    let arrowTemplate = '<div class="motion_item "><div class="arrowItem arrow-' + el.attr.arrowColor + ' '+el.attr.arrowName+'"></div></div>';

    for (i = 0; i < el.opt.itemsCount; i++) {
        if (i == 0) {
            items.push(el.opt.itemsStart)
        } else {
            items.push(items[i - 1] + el.opt.itemsDelay);
        }
        if (i % el.attr.arrowEveryOf) {
            jQuery(itemBox).append(itemTemplate);
        } else {
            jQuery(itemBox).append(arrowTemplate)
        }
    }

    anime({
        targets: itemBox + ' .motion_item',
        translateX: path('x'),
        translateY: path('y'),
        rotate: function (elem, i) {
            let opt = {};
            if (i % el.attr.arrowEveryOf) {
                opt = el.attr.rotate ? path('angle') : 0;
            } else {
                opt = path('angle');
            }
            return opt;
        },
        easing: 'linear',
        delay: function (elem, i) {
            return items[i];
        },
        endDelay: function (elem, i) {
            return items[i] - el.opt.backDelay;
        },
        duration: el.opt.duration,
        loop: el.opt.loop,
        direction: el.attr.direction
    });
    console.log(el.name + ' constructed!');
}
startTracks(tracks);
let sortTrackAnimate = function () {
    let name = 'trackSorting';
    let itemBox = '.' + name + ' .items';
    let item = 'item';
    let type = 'sort';
    let arrowColor = 'blue';
    let arrow = 'arrow';
    let path = anime.path('.' + name + ' path');
    let duration = 3000;
    let backDelay = 5000;
    let loop = true;

    let items = [];
    let itemsCount = 10;
    let itemsDelay = 500;
    let itemsStart = -2000;
    let itemTemplate = '<div class="motion_item ' + item + '"><div class="' + type + ' item"></div></div>';

    let arrowTemplate = '<div class="motion_item ' + arrow + '"><div class="arrow arrow-' + arrowColor + '"></div></div>';

    for (i = 0; i < itemsCount; i++) {
        if (i == 0) {
            items.push(itemsStart)
        } else {
            items.push(items[i - 1] + itemsDelay);
        }
        if (i % 3) {
            jQuery(itemBox).append(itemTemplate);
        } else {
            jQuery(itemBox).append(arrowTemplate)
        }
    }

    console.log(items);
    console.log(path);
    console.log(itemBox + ' .' + item);

    anime({
        targets: itemBox + ' .motion_item',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'linear',
        delay: function (el, i) {
            return items[i];
        },
        endDelay: function (el, i) {
            return items[i] - backDelay;
        },
        duration: duration,
        loop: loop
    });

}
// sortTrackAnimate();