import { SET_MONTH_DAYS } from './../constants/actionTypes';
import moment from 'moment';
import { verifyMonth } from './../util/verifyMonth';

let init = {
	years: {}
};

export const calendar = (state = init, action) => {
	switch (action.type) {
		case SET_MONTH_DAYS: {
			let { date } = action;
			let year = moment(date).year();
			let month = moment(date).month() + 1;
			let days = [];
			let copyYears = { ...state.years };

			if (!verifyMonth(state.years, year, month)) {
				let daysNumber = moment(date).daysInMonth();
				let monthStartDay = moment(date).startOf('month').format('d');
				let monthOfDay = moment(date).endOf('month').format('d');
				let previusMonth = moment(date).month();
				let currentYear = moment(date).year();
				monthStartDay = Number(monthStartDay) - 1;
				monthOfDay = Number(monthOfDay) + 1;
				previusMonth = Number(previusMonth);
				previusMonth = previusMonth === 0 ? 12 : previusMonth;
				let yearSelected = previusMonth === 12 ? Number(currentYear) - 1 : currentYear;

				let previusMonthDays = moment(`${yearSelected}-${previusMonth}-01`).daysInMonth();

				if (monthStartDay > 0) {
					for (let p = monthStartDay; p >= 0; p--) {
						// console.log('aqui entro', monthStartDay + 1);
						const infoDay = {
							dayNumber: previusMonthDays - p,
							month: previusMonth,
							year: yearSelected,
							hasReminder: false
						};
						days = [ ...days, infoDay ];
					}
				}
				for (let i = 1; i <= Number(daysNumber); i++) {
					const infoDay = {
						dayNumber: i,
						month,
						year: currentYear,
						hasReminder: false
					};
					days = [ ...days, infoDay ];
				}

				if (monthOfDay !== 6) {
					for (let n = monthOfDay, o = 1; n <= 6; n++, o++) {
						let infoDay = {
							dayNumber: o,
							month: null,
							year: null,
							hasReminder: false
						};
						days = [ ...days, infoDay ];
					}
				}
				copyYears = {
					...copyYears,
					[year]: {
						[month]: {
							days
						}
					}
				};
			}

			return {
				...state,
				years: copyYears
			};
		}
		default:
			return state;
	}
};
