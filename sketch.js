// interface do usuário ou o ambiente de simulação onde a rede neural

var train = true; //Esta variável controla se o treinamento da rede neural está ocorrendo ou não.

function setup() {
    createCanvas(500, 500); // Cria um canvas de 500x500 pixels para desenhar elementos.
    background(0); //preto

    nn = new RedeNeural(2, 3, 1); // entrada // camada //  saída

    // XOR Problem
    dataset = { //conjunto de dados para treinar a rede neural
        inputs:
            [[1, 1],
            [1, 0],
            [0, 1],
            [0, 0]],
        outputs:
            [[0],
            [1],
            [1],
            [0]]
    }
}

function draw() { //chamada repetidamente pelo p5.js em um loop
    if (train) {
        for (var i = 0; i < 10000; i++) { //Executa o treinamento da rede neural por 10000 iterações.
            var index = floor(random(4));
            nn.train(dataset.inputs[index], dataset.outputs[index]);
        }
        if (nn.predict([0, 0])[0] < 0.04 && nn.predict([1, 0])[0] > 0.98) {
            train = false;
            console.log("terminou");
        }
    }
}

//draw() do p5.js para treinar a rede neural de forma assíncrona, 
//permitindo que o treinamento seja interrompido quando a rede neural
// aprende com sucesso a função XOR.