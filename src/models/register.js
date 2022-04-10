import { cpf } from 'cpf-cnpj-validator';



function validateCPF(num) {
    if (!cpf.isValid(num)) {
        return {
            valid: false,
            text: "CPF inválido"
        }
    }
    else {
        return {
            valid: true,
            text: ""
        }
    }
}

function validatePassword(password) {
    if (password.length <= 3 || password.length > 72) {
        return {
            valid: false,
            text: "Senha deve ter entre 4 e 72 dígitos"
        }
    }
    else {
        return {
            valid: true,
            text: ""
        }
    }
}



export {validateCPF, validatePassword};