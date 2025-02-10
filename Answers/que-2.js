// Write a  program to find HCF (GCD) of two numbers.

function findHcf(num1, num2) {
    while (num1 != num2) {
        if (num1 > num2) {
            num1 = num1 - num2;
        }
        else if (num2 > num1) {
            num2 = num2 - num1;
        }
        else {
            return 1
        }


        return num1;
    }
}
console.log(findHcf(15, 12));
