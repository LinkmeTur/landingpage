export const formatPhone = (value: string): string => {
    const cleaned = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const length = cleaned.length;
    if (length > 11) return cleaned.slice(0, 11); // Garante no máximo 11 dígitos

    if (length <= 1) {
        return cleaned;
    } else if (length <= 2) {
        return `(${cleaned}`;
    } else if (length <= 3) {
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    } else if (length <= 7) {
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 3)} ${cleaned.slice(3)}`;
    } else {
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 3)} ${cleaned.slice(
            3,
            7,
        )}-${cleaned.slice(7)}`;
    }
};

export const validatePhone = (value: string): boolean => {
    return value.replace(/\D/g, '').length === 11; // Verifica se há exatamente 11 dígitos
};
