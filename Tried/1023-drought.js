console.log("1023 - drought");

const input = `3
3 22
2 11
3 39
5
1 25
2 20
3 31
2 40
6 70
2
1 1
3 2
0`;

let lines = input.split('\n');
let response = []

let ints = [];
for (let i = 0; i < lines.length; i++) {
    if (lines[i].length == 1) {
        ints.push(Number(lines[i]))
    }
};


let data = [];
for (let i = 0; i < lines.length; i++) {
    if (lines[i].length !== 1) {
        data.push(lines[i])
    }
};


for (let n = 0; n < ints.length; n++) {

    if (ints[n] == 0) break;


    // para cada interador jogue data na variavel auxiliar e exclui os mesmo de data 
    let aux = []

    for (let i = 0; i < ints[n]; i++) {
        aux.push(data[i].split(' '))
    };

    for (let i = 0; i < ints[n]; i++) {
        data.shift()
    };


    // calcula cada consumo por morador e consumo total, exibindo-os no final.

    let mediasMoradores = null;
    let exibicaoConsumos = [];

    for (x in aux) {
        let [moradores, consumo] = aux[x];
        let consumoPorMorador = (Number(consumo) / Number(moradores));

        mediasMoradores += consumoPorMorador;

        exibicaoConsumos[x] = `${moradores}-${Math.floor(consumoPorMorador)}`;
    }

    let MediaCidade = Math.round(mediasMoradores / ints[n]);

    response.push(
        `Cidade# ${Number(n) + 1}:`,
        exibicaoConsumos.join(' '),
        `consumo medio: ${MediaCidade.toFixed(2)} m3.`,
        ''
    )
}

console.log(response.join('\n'))