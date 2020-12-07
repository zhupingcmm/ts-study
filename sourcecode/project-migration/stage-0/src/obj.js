function render(result) {
    result.data.forEach(function (item) {
        console.log(item.name, item.id);
    });
}
var result = {
    data: [
        {
            id: 1,
            name: 'zp'
        },
        {
            id: 2,
            name: 'cmm'
        }
    ]
};
render(result);
