// Criar tabuleiro
const table = {
//              [0, 1, 2]
    rowTopper : [0, 0, 0], // [A]
    rowCenter : [0, 0, 0], // [B]
    rowBottom : [0, 0, 0]  // [C]
};

// Ver tabuleiro
const seeTable = () => {
    console.log(table);
};

seeTable();

// Adicione um x no tabuleiro:
// table.rowCenter.splice(2, 1, 'X');

const addSymbol = (row, col) => {
    const Row = row.toUpperCase();
    switch(Row) {
        case 'A':
            table.rowTopper.splice(col, 1, 'X');
            seeTable();
            winnerRow(table.rowTopper);
            winnerCol(col, table);
            winnerDiagonal(table);
            break;
        case 'B':
            table.rowCenter.splice(col, 1, 'X');
            seeTable();
            winnerRow(table.rowCenter);
            winnerCol(col, table);
            winnerDiagonal(table);
            break;
        case 'C':
            table.rowBottom.splice(col, 1, 'X');
            seeTable();
            winnerRow(table.rowBottom);
            winnerCol(col, table);
            winnerDiagonal(table);
            break;
    };
    seeTable();
};

// Tabuleiro com um X na segunda linha, coluna 2;
// seeTable(); 

// Adicionando um X na primeira linha, coluna 2;
// addSymbol('a', 2); 

// Adicionando um X na terceira liha, coluna 0;
// addSymbol('c', 0);

// Adicionando um X na terceira linhha, coluna 2;
// addSymbol('c', 2);


// AGORE CRIE CONDIÇÕES DE GANHO:

// Condição de ganho em uma linha;
const winnerRow = (row) => {
    const checkRow = [];
    for(const col of row) {
        (col !== 0) && checkRow.push(col);
    };
    (checkRow.length == 3) && console.log('Voce ganhou na horizontal!');
};

// Condição de ganho em uma coluna;
const winnerCol = (cow, table) => {
    // chave de controle
    const checkCol = [];
    switch(cow){
        // Testando a 1° coluna:
        case 0:
            const contCol1 = [1, 2, 3];
            for(let order in contCol1) {
                switch(order) {
                    case 0:
                        (table.rowTopper.slice(0, 1) != 0) && checkCol.push(table.rowTopper.slice(0,1));
                        break;
                    case 1:
                        (table.rowCenter.slice(0, 1) != 0) && checkCol.push(table.rowCenter.slice(0, 1)); 
                        break;
                    case 2:
                        (table.rowBottom.slice(0, 1) != 0) && checkCol.push(table.rowBottom.slice(0, 1));
                        break;
                }
            }
            break;
        // Testando a 2° coluna:
        case 1:
            const contCol2 = [1, 2, 3];
            for(let order in contCol2) {
                switch(order) {
                    case 0:
                        (table.rowTopper.slice(1, 2) != 0) && checkCol.push(table.rowTopper.slice(1, 2));
                        break;
                    case 1:
                        (table.rowCenter.slice(1, 2) != 0) && checkCol.push(table.rowCenter.slice(1, 2)); 
                        break;
                    case 2:
                        (table.rowBottom.slice(1, 2) != 0) && checkCol.push(table.rowBottom.slice(1, 2));
                        break;
                }
            }
            break;
        // Testando a 3° coluna:
        case 2:
            const contCol3 = [1, 2, 3];
            for(let order in contCol3) {
                switch(order) {
                    case 0:
                        (table.rowTopper.slice(2, 3) != 0) && checkCol.push(table.rowTopper.slice(2, 3));
                        break;
                    case 1:
                        (table.rowCenter.slice(2, 3) != 0) && checkCol.push(table.rowCenter.slice(2, 3)); 
                        break;
                    case 2:
                        (table.rowBottom.slice(2, 3) != 0) && checkCol.push(table.rowBottom.slice(2, 3));
                        break;
                }
            }
            break;
    }
    (checkCol.length == 3) && console.log('Você ganhou na vertical!');
};

// Condição de ganho na diagonal;
const winnerDiagonal = (table) => {
    const cont = [1, 2, 3];
    for(let order in cont){
        switch(order) {
            // Testando a 1° diagonal(\):
            case 0:
                const checkDiagonal = [];
                for(let cont = 0; cont < 3; cont ++) {
                    switch(cont) {
                        case 0:
                            (table.rowTopper.slice(0, 1) != 0) && checkDiagonal.push(table.rowTopper.slice(0, 1));
                            break;
                        case 1:
                            (table.rowCenter.slice(1, 2) != 0) && checkDiagonal.push(table.rowCenter.slice(1, 2)); 
                            break;
                        case 2:
                            (table.rowBottom.slice(2, 3) != 0) && checkDiagonal.push(table.rowBottom.slice(2, 3));
                            break;
                    };
                };
                (checkDiagonal.length == 3) && console.log('Você ganhou na diagonal');
                break;
            // Testando a 2° diagonal(/):
            case 1:
                const checkDiagonal2 = [];
                for(let cont = 0; cont < 3; cont ++) {
                    switch(cont) {
                        case 0:
                            (table.rowTopper.slice(2, 3) != 0) && checkDiagonal2.push(table.rowTopper.slice(2, 3));
                            break;
                        case 1:
                            (table.rowCenter.slice(1, 2) != 0) && checkDiagonal2.push(table.rowCenter.slice(1, 2)); 
                            break;
                        case 2:
                            (table.rowBottom.slice(0, 1) != 0) && checkDiagonal2.push(table.rowBottom.slice(0, 1));
                            break;
                    };
                };
                (checkDiagonal2.length == 3) && console.log('Você ganhou na diagonal');
                break;
        };
    };
};

  /** Toda vez que alguem fizer uma jogada o computador vai checar se existe alguma condição de ganho no tabuleiro */

addSymbol('a', 1);
addSymbol('a', 0);
addSymbol('b', 1);
addSymbol('c', 2);


// Resetar o tabuleiro:
const reset = (table) => {
    const cont = [1, 2, 3];
    for(let order of cont) {
        switch(order) {
            case 1:
                table.rowTopper.splice(0, table.rowTopper.length, 0, 0, 0);
                break;
            case 2:
                table.rowCenter.splice(0, table.rowCenter.length, 0, 0, 0);
                break;
            case 3:
                table.rowBottom.splice(0, table.rowBottom.length, 0, 0, 0);
                break;
        }
    }
    seeTable();
}

reset(table);