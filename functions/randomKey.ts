const generateRandomKey = (): string => {
    const prefix = "Inv";
    const randomNumber = Math.floor(Math.random() * 10000); // Generate a number between 0 and 9999
    const formattedNumber = randomNumber.toString().padStart(4, '0'); // Ensure it's 4 digits with leading zeros
    return `${prefix}${formattedNumber}`;
};

export default generateRandomKey