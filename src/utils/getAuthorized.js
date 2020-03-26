export function setRouterKey (arr){
    console.log(typeof arr)
    if(typeof arr === 'object'){
        arr.forEach((item, index) => {
        item.key = index+1
        if(item.routes){
            // setRouterKey(item.routes)
            item.routes.forEach((i, num) => {
                if(num>=9){
                    i.key=index+1+num+1
                }else{
                    i.key=Number(index+1+'0'+(num+1))
                }
                
            })
        }
    })
    }
    
}

export function getPathName (arr, str){
    if(arr instanceof Array){
        arr.forEach((item, index) => {
            if(!item.routes && item.path == str){
                console.log(item)
                return item
            }else{
                getPathName(item.routes, str)
            }
        })
    }
}