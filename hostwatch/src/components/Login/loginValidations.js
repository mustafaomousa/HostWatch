export const validateUsername = (value) => {
    let error;

    if (!value) {
        error = "username is required"
    }

    return error;
};

export const validatePassword = (value) => {
    let error;

    if (!value) {
        error = "password is required"
    }

    return error;
};