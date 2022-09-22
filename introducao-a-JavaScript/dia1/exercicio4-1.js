let salarioBruto = 3682;
let inss;
let ir;
let salarioLiquido;
let descontoIr;
let descontoInss;

if (salarioBruto <= 1556.94){
    inss = 8;
    descontoInss = inss * salarioBruto;
    descontoInss = descontoInss / 100;
    salarioLiquido = salarioBruto - descontoInss;
    if (salarioLiquido <= 1903.98){
        console.log(salarioLiquido);
    } else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65){
        ir = 7.5;
        descontoIr = ir * salarioLiquido;
        descontoIr = descontoIr / 100;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    } else if (salarioLiquido >= 2594.93 && salarioLiquido <= 5189.82){
        ir = 15;
        descontoIr = ir * salarioLiquido;
        descontoIr = descontoIr / 100;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    } else if (salarioLiquido > 5189.82){
        ir = 570.88;
        descontoIr = ir;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    }
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = 9;
    descontoInss = inss * salarioBruto;
    descontoInss = descontoInss / 100;
    salarioLiquido = salarioBruto - descontoInss;
    if (salarioLiquido <= 1903.98){
        console.log(salarioLiquido);
    } else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65){
        ir = 7.5;
        descontoIr = ir * salarioLiquido;
        descontoIr = descontoIr / 100;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    } else if (salarioLiquido >= 2594.93 && salarioLiquido <= 5189.82){
        ir = 15;
        descontoIr = ir * salarioLiquido;
        descontoIr = descontoIr / 100;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    } else if (salarioLiquido > 5189.82){
        ir = 27.5;
        descontoIr = ir * salarioLiquido;
        descontoIr = descontoIr / 100;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    }
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.92){
    inss = 11;
    descontoInss = inss * salarioBruto;
    descontoInss = descontoInss / 100;
    salarioLiquido = salarioBruto - descontoInss;
    if (salarioLiquido <= 1903.98){
        console.log(salarioLiquido);
    } else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65){
        ir = 7.5;
        descontoIr = ir * salarioLiquido;
        descontoIr = descontoIr / 100;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    } else if (salarioLiquido >= 2594.93 && salarioLiquido <= 5189.82){
        ir = 15;
        descontoIr = ir * salarioLiquido;
        descontoIr = descontoIr / 100;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    } else if (salarioLiquido > 5189.82){
        ir = 27.5;
        descontoIr = ir * salarioLiquido;
        descontoIr = descontoIr / 100;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    }
} else if (salarioBruto > 5189.82){
    inss = 570.88;
    descontoInss = inss;
    salarioLiquido = salarioBruto - descontoInss;
    if (salarioLiquido <= 1903.98){
        console.log(salarioLiquido);
    } else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65){
        ir = 7.5;
        descontoIr = ir * salarioLiquido;
        descontoIr = descontoIr / 100;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    } else if (salarioLiquido >= 2594.93 && salarioLiquido <= 5189.82){
        ir = 15;
        descontoIr = ir * salarioLiquido;
        descontoIr = descontoIr / 100;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    } else if (salarioLiquido > 5189.82){
        ir = 27.5;
        descontoIr = ir * salarioLiquido;
        descontoIr = descontoIr / 100;
        salarioLiquido = salarioLiquido - descontoIr;
        console.log(salarioLiquido);
    } 
} else{
    console.log('Valor Invalido');
}