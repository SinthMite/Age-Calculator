const d = new Date();
const currentYear = d.getFullYear();
const currentMonth = d.getMonth() + 1;
const currentDay = d.getDate();

class yourDate {
    constructor(wantedYear, wantedMonth, wantedDay) {
        this._wantedYear = wantedYear;
        this._wantedMonth = wantedMonth;
        this._wantedDay = wantedDay;
    }

    get wantedYear() {
        return this._wantedYear;
    }
    set wantedYear(newWantedYear) {
        this._wantedYear = newWantedYear;
    }

    get wantedMonth() {
        return this._wantedMonth;
    }
    set wantedMonth(newWantedMonth) {
        this._wantedMonth = newWantedMonth;
    }

    get wantedDay() {
        return this._wantedDay;
    }
    set wantedDay(newWantedDay) {
        this._wantedDay = newWantedDay;
    }


    dayCalculator() {
        let calculatedYear;
        let calculatedMonth;
        let calculatedDay;

        if (this._wantedYear < currentYear) {
            calculatedYear = currentYear - this._wantedYear;
        }

        if (this._wantedMonth > 0 && this._wantedMonth <= 12) {
            if (this._wantedYear === currentYear) {
                calculatedMonth = this._wantedMonth - currentMonth;
            } else {
                calculatedMonth = currentMonth - this._wantedMonth;
            }
            calculatedMonth = Math.abs(calculatedMonth);

        if (this._wantedDay > 0 && this._wantedDay <= 31) {
            calculatedDay = currentDay - this._wantedDay;
        }
        return {
            calculatedYear,
            calculatedMonth,
            calculatedDay
        };    
    }
}
}

document.getElementById('Dates').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    
    const days = document.getElementById('days').value;
    const months = document.getElementById('months').value;
    const years = document.getElementById('years').value;

    const Calculate = new yourDate(years, months, days);
    
    const result = Calculate.dayCalculator();

    document.getElementById('yearResult').textContent = result.calculatedYear;
    document.getElementById('monthResult').textContent = result.calculatedMonth;
    document.getElementById('dayResult').textContent = result.calculatedDay;
    
    console.log(result);
});

