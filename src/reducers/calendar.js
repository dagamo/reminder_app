import { SET_MONTH_DAYS, UPDATE_GENERAL_PARAM, SELECT_DAY, CREATE_REMINDER } from './../constants/actionTypes';
import moment from 'moment';
import { verifyMonth } from './../util/verifyMonth';

let init = {
	years: {},
	dateSelected: moment().format('YYYY-MM-DD')
};

export const calendar = (state = init, action) => {
	switch (action.type) {
		case SET_MONTH_DAYS: {
			/*
				Initialize of vars.
			*/
			let { date } = action;
			let year = moment(date).year();
			let month = moment(date).month() + 1;
			let days = [];
			let copyYears = { ...state.years };

			/*
				Verify if the month exists in the reducer.
				If not exists create a new information for the calendar.
			*/
			let countDay = 1;
			let daysName = {
				1: 'sun',
				2: 'mon',
				3: 'tue',
				4: 'wed',
				5: 'thu',
				6: 'fri',
				7: 'sat'
			};
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

				/*
			1)	if the month day start is diferent to sunday then generate the previus days.
			2) Generate the current month days.
			3) Generate the next month days.
			4) aument the number of countDay, It is for get the day parent.
			5) if countDay is 7 reset to 0
				*/

				if (monthStartDay > 0) {
					//1
					for (let p = monthStartDay; p >= 0; p--) {
						const infoDay = {
							dayNumber: previusMonthDays - p,
							dayText: daysName[countDay],
							month: previusMonth,
							year: yearSelected,
							hasReminder: false
						};
						days = [ ...days, infoDay ];
						if (countDay === 7) {
							countDay = 0;
						} else {
							countDay += 1;
						}
					}
				}

				for (let i = 1; i <= Number(daysNumber); i++) {
					//2
					const infoDay = {
						dayNumber: i,
						month,
						dayText: daysName[countDay],
						year: currentYear,
						hasReminder: false
					};
					days = [ ...days, infoDay ];
					if (countDay === 7) {
						countDay = 1;
					} else {
						countDay += 1;
					}
				}

				if (monthOfDay !== 6) {
					//3
					for (let n = monthOfDay, o = 1; n <= 6; n++, o++) {
						let infoDay = {
							dayNumber: o,
							dayText: daysName[countDay],
							month: null,
							year: null,
							hasReminder: false
						};
						days = [ ...days, infoDay ];
						if (countDay === 7) {
							countDay = 1;
						} else {
							countDay += 1;
						}
					}
				}
				//update the reducer year param
				copyYears = {
					...copyYears,
					[year]: {
						...copyYears[year],
						[month]: {
							days
						}
					}
				};
			}

			//return the state.
			return {
				...state,
				years: { ...copyYears }
			};
		}
		case SELECT_DAY: {
			return {
				...state,
				dateSelected: action.date
			};
		}
		case CREATE_REMINDER: {
			let { date } = action.params;
			let month = moment(date).month() + 1;
			let year = moment(date).year();
			let day = moment(date, 'YYYY-MM-DDTHH:mm:ss').format('DD');
			day = Number(day);
			let copyMonthDays = [ ...state.years[year][month].days ];
			let findDay = copyMonthDays.findIndex((d) => d.dayNumber === day);

			if (findDay !== -1) {
				copyMonthDays[findDay] = {
					...copyMonthDays[findDay],
					hasReminder: true
				};
			}

			return {
				...state,
				years: {
					...state.years,
					[year]: {
						...state.years[year],
						[month]: {
							...state.years[year][month],
							days: [ ...copyMonthDays ]
						}
					}
				}
			};
		}

		case UPDATE_GENERAL_PARAM: {
			const { key, value, red_name } = action;
			let copyState = { ...state };
			if (red_name === 'calendar') {
				copyState = {
					...copyState,
					[key]: value
				};
			}
			return copyState;
		}
		default:
			return state;
	}
};
