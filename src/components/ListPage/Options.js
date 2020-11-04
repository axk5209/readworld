import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from "@material-ui/pickers";
import { InputLabel, MenuItem, FormControl, Select, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	message: {
		flexGrow: 1,
		fontWeight: "bold",
		color: "indigo"
	},
	subheading: {
		flexGrow: 1,
		color: "indigo",
	},
	buttons: {
		color: "indigo",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));
export default function MaterialUIPickers() {
	const classes = useStyles();
	const todayDate = new Date();
	const twoYearsAgoDate = new Date(new Date().setFullYear(new Date().getFullYear() - 2))

	const [fromDate, setFromDate] = React.useState(twoYearsAgoDate);
	const [toDate, setToDate] = React.useState(todayDate);

	const [keyword, setKeyWord] = React.useState("");

	const [sortBy, setSortBy] = React.useState("publishedAt");

	const handleFromDateChange = (newFromDate) => { setFromDate(newFromDate) }
	const handleToDateChange = (newToDate) => { setToDate(newToDate) }
	const handleKeywordChange = (newKeyword) => { setKeyWord(newKeyword) }
	const handleSortByChange = (event) => {
		let newSortBy = event.target.value
		setSortBy(newSortBy);
	}

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around" >
				<KeyboardDatePicker
					disableToolbar
					variant="inline"
					format="MM/dd/yyyy"
					margin="normal"
					id="date-picker-inline"
					label="Publish Dates Starting From:"
					value={fromDate}
					onChange={handleFromDateChange}
					KeyboardButtonProps={{
						"aria-label": "change from date"
					}}
				/>
				<KeyboardDatePicker
					disableToolbar
					variant="inline"
					format="MM/dd/yyyy"
					margin="normal"
					id="date-picker-inline"
					label="Publish Dates Up Until:"
					value={toDate}
					onChange={handleToDateChange}
					KeyboardButtonProps={{
						"aria-label": "change to date"
					}}
				/>
				<FormControl variant="outlined" className={classes.formControl} >
					<InputLabel id="demo-simple-select-outlined-label">Sort By: </InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={sortBy}
						onChange={handleSortByChange}
						label="Sort By"
					>
						<MenuItem value="relevancy">Relevance</MenuItem>
						<MenuItem value="publishedAt">Recency</MenuItem>
						<MenuItem value="popularity">Popularity</MenuItem>
					</Select>
				</FormControl>
			</Grid>


		</MuiPickersUtilsProvider>
	);
}
