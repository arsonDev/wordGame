export const GENERATOR_LEVELS = {
    EASY: 1,
    HARD: 2,
};

export const generateChars = (level) => {
    const CHARS = getBase(level);

    var result = [];
    for(var i = 0;i< 10;i++){
        result.push(Math.floor(Math.random() * CHARS.length));
    }

    return result;
};

const getBase = (level) => (level === GENERATOR_LEVELS.EASY ? "abcdefghijklmnopqrstuwxyz" : "aąbcćdeęfghijklłmnoóprsśtuwxzźż");
