interface List {
    readonly id: number,//只读属性
    name: string,
    age?: number,//可选属性
}

interface Result {
    data: List[]
}

function render(result: Result){
    result.data.forEach((item)=>{
        console.log(item.name,item.id);
        if(item.age){
            console.log(item.age)

        }
    })
}

const result = {
    data: [
        {
            id: 1,
            name:'zp'
        },
        {
            id: 2,
            name: 'cmm'
        }
    ]
}

render(result);