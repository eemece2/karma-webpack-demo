
module.exports = {
    add: add,
    template: template,
    getInside: getInside
};

var inside = 55555;

function getInside() {
    return inside;
}

function add(a, b) {
    return a + b;
}

function template(name, time) {
    var o = `Hello ${name}, how are you ${time}?`;

    return o;
}
