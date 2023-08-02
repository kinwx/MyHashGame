const row = [1, 1, 0];

const winnerRow = (row) => {
    const checkRow = [];
    for(const col of row) {
        (col !== 0) && checkRow.push(col);
    }
    (checkRow.length == 3) && console.log('Voce ganhou na horizontal!');
};

winnerRow(row);

const table = {
//              [0, 1, 2]
    rowTopper : [1, 0, 0], // [A]
    rowCenter : [2, 1, 0], // [B]
    rowBottom : [2, 0, 1]  // [C]
};


// Checar se ganhou em uma coluna
const winnerCol = (cow, table) => {
    // chave de controle
    const checkCol = [];
    switch(cow){
        // Testando a 1° coluna:
        case 0:
            for(let cont = 0; cont < 3; cont ++) {
                switch(cont) {
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
            for(let cont = 0; cont < 3; cont ++) {
                switch(cont) {
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
            for(let cont = 0; cont < 3; cont ++) {
                switch(cont) {
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

winnerCol(0, table);

const winnerDiagonal = (table) => {
    for(let cont = 0; cont < 2; cont++){
        switch(cont) {
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
                console.log(checkDiagonal);
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
                console.log(checkDiagonal2);
                (checkDiagonal2.length == 3) && console.log('Você ganhou na diagonal');
                break;
        };
    };
};

winnerDiagonal(table);