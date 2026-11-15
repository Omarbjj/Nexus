export function getSundaysOfCurrentMonth(): {
    sundays: string[];
    closestSunday: string;
    month: any;
    year: string;
} {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();

    const totalDays = new Date(year, month + 1, 0).getDate();

    const sundays: string[] = [];

    for (let day = 1; day <= totalDays; day++) {
        const date = new Date(year, month, day);

        if (date.getDay() === 0) {
            sundays.push(String(day));
        }
    }

    const nextSunday = sundays.find(
        day => Number(day) >= today.getDate()
    ) ?? '';

    console.log('today', today.toLocaleString('es-PE', { month: 'long' }));

    return {
        sundays,
        closestSunday: nextSunday,
        month: today,
        year: String(year)
    };
}