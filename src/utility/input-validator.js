export function NameValidator(name) {
    const Error = []

    if (name.length < 1) {
        Error.push('User name is required')
    } 

    return Error
}

export function EmailValidator(email) {
    const Error = []

    if (email.length < 1) {
        Error.push('Email is required')
    } else if (!/@(gmail\.com|yahoomail\.com)$/.test(email)) {
        Error.push('Email must end with @ gmail.com or @yahoomail.com')
    } else {
        Error.push('')
    }

    return Error
}

export function PasswordValidator(password) {
    const Error = []

    if (password.length < 1) {
        Error.push('password is required')
    } else if (password.length < 6) {
        Error.push('password must be 6 or 8 characters long')
    } else if (!password.match(/[a-z]/)) {
        Error.push('password must include lowercase')
    } else if (!password.match(/[A-Z]/)) {
        Error.push('password must include uppercase')
    } else if (!password.match(/[0-9]/)) {
        Error.push('password must include a number')
    } else {
        Error.push('')
    }

    return Error
}