console.log(" 1026 - To Carry or not to Carry ");

const input = `4 6
6 9`;

let lines = input.split('\n');

let arr = new Uint32Array(3);
lines.forEach(data => {

    if(data !== ''){
        
        let [ a, b ] = data.split(" ").map(el => Number(el))
    
        arr[0] = a
        arr[1] = b
        arr[2] = (arr[0] ^ arr[1])

        console.log(arr[2])

    }
})