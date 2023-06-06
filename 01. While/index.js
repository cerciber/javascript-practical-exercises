// Hacer un programa que le pida al usuario el numero de dias
// que quiere hacer ejericio en el mes
// : le indique al usuario que dias exactamente deberia hacer ejercicio

function calculateDays() {
    const userDay = document.getElementById("user-input").value
    const userDayNumber = parseInt(userDay) // 7
    
    console.log('Usted necesita hacer ejercios los siguiente dias:')
    let currentDay = 1
    // ¿Cuantos dias debo sumar? Eje
    const incrementDays = parseInt(31 / userDayNumber) + 1 // 5
    while (currentDay <= 31) {
        console.log(`Dia: ${currentDay}`) // 31
        currentDay = currentDay + incrementDays // 31 + 5 = 36
    }
}