const tableX = {
//              [0, 1, 2]
    rowTopper : [0, 0, 0], // [A]
    rowCenter : [0, 0, 0], // [B]
    rowBottom : [0, 0, 0]  // [C]
};
const tableO = {
//              [0, 1, 2]
    rowTopper : [0, 0, 0], // [A]
    rowCenter : [0, 0, 0], // [B]
    rowBottom : [0, 0, 0]  // [C]
};

// Variaveis necessárias para certas funções;
const displayVictory = document.querySelector('.displayVictory');
const displayReset = document.querySelector('.reset');
const container = document.querySelector('.container');
const line = document.querySelector('.line');


// O site precisa iniciar com essa condição;
container.classList.add('X');

// Chave de controle para ocasião de empate;
let drawKey = 0;

// Função para adicionar o simbolo no tabuleiro;
const addSymbol = (row, col, id) => {
    drawKey++;
    const Row = row.toUpperCase();
    switch(container.classList.contains('X')) {
        case true:
            container.classList.remove('X');
            changeButton(id, 'X');
            switch(Row) {
                case 'A':
                    tableX.rowTopper.splice(col, 1, 'X');
                    winnerRow(tableX.rowTopper, 'X', 1);
                    break;
                case 'B':
                    tableX.rowCenter.splice(col, 1, 'X');
                    winnerRow(tableX.rowCenter, 'X', 2);
                    break;
                case 'C':
                    tableX.rowBottom.splice(col, 1, 'X');
                    winnerRow(tableX.rowBottom, 'X', 3);
                    break;
            };
            checkVictory(tableX, col, 'X');
            break;

        case false:
            container.classList.add('X');
            changeButton(id, 'O');
            switch(Row) {
                case 'A':
                    tableO.rowTopper.splice(col, 1, 'O');
                    winnerRow(tableO.rowTopper, 'O', 1);
                    break;
                case 'B':
                    tableO.rowCenter.splice(col, 1, 'O');
                    winnerRow(tableO.rowCenter, 'O', 2);
                    break;
                case 'C':
                    tableO.rowBottom.splice(col, 1, 'O');
                    winnerRow(tableO.rowBottom, 'O', 3); 
                    break;
            };
            checkVictory(tableO, col, 'O');
            break;
    }; 
    (drawKey == 9 && !(container.classList.contains('blocked-screen'))) && draw();   
};

// Função de resposta visual de fim de partida; (callback para todas as ocasiões de ganho;)
const visualWin = (symbol, cond) => {
    container.classList.add('blocked-screen');
    redLine(cond);

    const championText = document.querySelector('.label');

    championText.innerText = `${symbol} WINS!`;

    displayVictory.classList.remove('inactivated');
    displayReset.classList.remove('inactivated');
};

// Função de ocasião de empate: (callback => addSymbol())
const draw = () => {
    const championText = document.querySelector('.label');

    championText.innerText = 'DRAW!';

    displayVictory.classList.remove('inactivated');
    displayReset.classList.remove('inactivated');
};


// Funçao para pegar o butão desejado e aplicar sua formatação; (callback => addSymbol())
const changeButton = (id, newValue) => {
    const btn = document.querySelector('#but' + id);
    btn.value = newValue;
    btn.disabled = true;
};

// Condições de ganho;
// 1° - Ganhar em linha horizontal(rows):
const winnerRow = (row, symbol, rowId) => {
    const checkRow = [];
    for(const col of row) {
        (col !== 0) && checkRow.push(col);
    };
    (checkRow.length == 3) && visualWin(symbol, rowId);
};

// 2° - Ganhar em linha vertical(collums):
const winnerCol = (col, table, symbol) => {
    // Chaves de controle;
    const checkCol = [];
    const condList = [];
    switch(col){
        // Testando a 1° coluna:
        case 0:
            for(let cont = 0; cont < 3; cont ++) {
                switch(cont) {
                    case 0:
                        (table.rowTopper.slice(0, 1) != 0) && checkCol.push(table.rowTopper.slice(0, 1));
                        break;
                    case 1:
                        (table.rowCenter.slice(0, 1) != 0) && checkCol.push(table.rowCenter.slice(0, 1)); 
                        break;
                    case 2:
                        (table.rowBottom.slice(0, 1) != 0) && checkCol.push(table.rowBottom.slice(0, 1));
                        break;
                };
            };
            (checkCol.length == 3) && condList.push(4);
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
                };
            };
            (checkCol.length == 3) && condList.push(5);
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
                };
            };
            (checkCol.length == 3) && condList.push(6);
            break;
    };
    for(let cond of condList) {
        (checkCol.length == 3) && visualWin(symbol, cond);
    };
};

// 3° - Condição de ganho na diagonal:
const winnerDiagonal = (table, symbol) => {
    const order = [0, 1];
    for(let cont of order){
        switch(cont) {
            // Testando a 1° diagonal(\):
            case 0:
                const checkDiagonal = [];
                const condList = [];
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
                (checkDiagonal.length == 3) && condList.push(7);
                for(let cond of condList) {
                    (checkDiagonal.length == 3) && visualWin(symbol, cond);
                };
                break;
            // Testando a 2° diagonal(/):
            case 1:
                const checkDiagonal2 = [];
                const condList2 = [];
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
                (checkDiagonal2.length == 3) && condList2.push(8);
                for(let cond of condList2) {
                    (checkDiagonal2.length == 3) && visualWin(symbol, cond);
                };
                break;
        };
    };
};

// Função para testar as condições de ganho(coluna e diagonal); (callback => addSymbol())
const checkVictory = (table, col, symbol) => {
    winnerCol(col, table, symbol);
    winnerDiagonal(table, symbol);
};


// Resetar o tabuleiro script: (callback => resetAll())
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
        };
    };
};

// Resetar tabuleiro visual: (callback => resetAll())
const resetVisualTable = () => {
    const inputList = document.querySelectorAll('input');
    inputList.forEach( input => {
        input.value = '';
        input.disabled = false;
    });
};

// Função que vai no documento HTML. Ela reseta tanto o tabuleiro visual, como o do script;
const resetAll = () => {
    reset(tableX);
    reset(tableO);
    resetVisualTable();
    drawKey -= drawKey;
    line.removeAttribute('style');

    displayVictory.classList.add('inactivated');
    displayReset.classList.add('inactivated');
    line.classList.add('inactivated');
    container.classList.remove('blocked-screen');
};

// Função visual de red-line ao ganhar;
const redLine = (cond) => {
    /** A variavel cond pode ser:
     * 1 - row
     * 2 - col
     * 3 - diagonal
     */
    switch(cond) {
        // 1 - Trabalhando como row:
        case 1:
            line.style.width = '80%';
            line.style.top = '70px';
            line.classList.remove('inactivated');
            break;
        case 2:
            line.style.width = '80%';
            line.style.top = '195px';
            line.classList.remove('inactivated');
            break;
        case 3:
            line.style.width = '80%';
            line.style.top = '325px';
            line.classList.remove('inactivated');
            break;
        // 2 - Trabalhando como col:
        case 4:
            line.style.rotate = '90deg';
            line.style.top = '195px';
            line.style.left = '-90px';
            line.classList.remove('inactivated');
            break;
        case 5:
            line.style.rotate = '90deg';
            line.style.top = '195px';
            line.style.left = '17.5px';
            line.classList.remove('inactivated');
            break;
        case 6:
            line.style.rotate = '90deg';
            line.style.top = '195px';
            line.style.left = '125px';
            line.classList.remove('inactivated');
            break;
        // 3 - Trabalhando como diagonal:
        case 7:
            line.style.width = '100%';
            line.style.top = '195px';
            line.style.rotate = '230deg';
            line.classList.remove('inactivated');
            break;
        case 8:
            line.style.width = '100%';
            line.style.top = '195px';
            line.style.rotate = '130deg';
            line.classList.remove('inactivated');
            break;
    };
}; 
