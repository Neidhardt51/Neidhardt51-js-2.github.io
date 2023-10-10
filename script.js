function checkNumber(a) {
    if (a <= 10) {
        console.log("Angka Kurang dari 10");
    } else {
        console.log("Angka lebih dari 10");
    }
}

function printNumbersUsingWhile() {
    let angka = 1;
    while (angka <= 10) {
        console.log(angka);
        angka++;
    }
}

function printNumbersUsingFor() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

function workHours() {
    for (let workHours = 0; workHours <= 8; workHours++) {
        if (workHours < 8) {
            console.log(`Saya bekerja selama ${workHours} jam`);
            continue;
        }
        console.log('Lanjut Kerja');
    }
}

let a = 1;
checkNumber(a);

printNumbersUsingWhile();

printNumbersUsingFor();

workHours();
