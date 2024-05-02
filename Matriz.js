//A função desta classe é lidar com operações matriciais,
//que são fundamentais para o funcionamento de redes neurais.

class Matrix {
    constructor(rows, cols) { 
        this.cols = cols;

        this.data = [];

        for (let i = 0; i < rows; i++) { 
            //Inicia um loop que irá iterar sobre cada linha da matriz.

            let arr = [] //Cria um array vazio chamado arr

            for (let j = 0; j < cols; j++) { 
                //nicia um loop aninhado que irá iterar sobre cada coluna da matriz.
                arr.push(0)
            }
            this.data.push(arr); 
        }
    }

    // Funções Diversas

    static arrayToMatrix(arr) { //função estática converte um array unidimensional em uma matriz de uma coluna.
        let matrix = new Matrix(arr.length, 1);
        matrix.map((elm, i, j) => {
            return arr[i];
        })
        return matrix;
    }

    static MatrixToArray(obj) { //unção estática converte uma matriz de uma coluna em um array unidimensional.
        let arr = []
        obj.map((elm, i, j) => {
            arr.push(elm);
        })
        return arr;
    }


    print() {
        console.table(this.data);
    }
 
    randomize() { //função atribui valores aleatórios entre -1 e 1 a todos os elementos da matriz.
        this.map((elm, i, j) => {
            return Math.random() * 2 - 1;
        });
    }

    static map(A, func) { //aplica uma função a todos os elementos de uma matriz e retorna uma nova matriz com os resultados.
        let matrix = new Matrix(A.rows, A.cols);

        matrix.data = A.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })

        return matrix;
    }

    map(func) { //função a todos os elementos da matriz e retorna a própria matriz atualizada.

        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })

        return this;
    }

    static transpose(A){
        var matrix = new Matrix(A.cols, A.rows);
        matrix.map((num,i,j) => {
            return A.data[j][i];
        });
        return matrix;
    }

    // Operações Estáticas Matriz x Escalar 
    
    static escalar_multiply(A, escalar) { //retorna a transposta da matriz de entrada A.
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((num, i, j) => {
            return A.data[i][j] * escalar;
        });

        return matrix;
    }
    
    // Operações Estáticas Matriz x Matriz

    static hadamard(A, B) { //realizam operações entre uma matriz e um escalar, como multiplicação por um escalar e multiplicação de Hadamard.
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((num, i, j) => {
            return A.data[i][j] * B.data[i][j]
        });

        return matrix;
    }

    //funções estáticas realizam operações entre duas matrizes, como adição, subtração e multiplicação.

    static add(A, B) { //
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((num, i, j) => {
            return A.data[i][j] + B.data[i][j]
        });

        return matrix;
    }

    static subtract(A, B) {
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((num, i, j) => {
            return A.data[i][j] - B.data[i][j]
        });

        return matrix;
    }

    static multiply(A, B) {
        var matrix = new Matrix(A.rows, B.cols);

        matrix.map((num, i, j) => {
            let sum = 0
            for (let k = 0; k < A.cols; k++) {
                let elm1 = A.data[i][k];
                let elm2 = B.data[k][j];
                sum += elm1 * elm2;
            }
            
            return sum;
        })

        return matrix;
    }
}

//operações de álgebra linear, que são essenciais para
// o funcionamento de redes neurais e outras aplicações
// de aprendizado de máquina.