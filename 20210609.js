
let days = ["D", "S", "T", "Q", "Q", "S", "S"]
let week1 = [1, 2, 3, 4, 5, 6, 7]
let week2 = [8, 9, 10, 11, 12, 13, 14]
let week3 = [15, 16, 17, 18, 19, 20, 21]
let week4 = [22, 23, 24, 25, 26, 27, 28]
let week5 = [29, 30, 31]
let text = "";
let i;

for (i = 0; i < days.length; i++) {
    process.stdout.write(text = " " + days[i] + " " + " ");

}

process.stdout.write('\n');

for (i = 0; i < week1.length; i++) {

    process.stdout.write(text = " " + week1[i] + " " + " ");
}

process.stdout.write('\n');

for (i = 0; i < week2.length; i++) {

    process.stdout.write(text = " " + week2[i] + " ");
}

process.stdout.write('\n');

for (i = 0; i < week3.length; i++) {

    process.stdout.write(text = " " + week3[i] + " ");
}

process.stdout.write('\n');

for (i = 0; i < week4.length; i++) {

    process.stdout.write(text = " " + week4[i] + " ");
}

process.stdout.write('\n');

for (i = 0; i < week5.length; i++) {

    process.stdout.write(text = " " + week5[i] + " ");
}


//Problemas: A formatação da segunda semana fica feia