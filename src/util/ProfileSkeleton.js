import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import NoImg from "../images/no-img.png";

//MUI Stuff
import Paper from "@material-ui/core/Paper";

//Icons
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";

const styles = (theme) => ({
	palette: {
		primary: {
			light: "#33c9dc",
			main: "#00bcd4",
			dark: "#008394",
			contrastText: "#fff",
		},
		secondary: {
			light: "#33c9dc",
			main: "#ff3d00",
			dark: "#008394",
			contrastText: "#fff",
		},
	},
	typography: {
		useNextVariants: true,
	},
	form: {
		textAlign: "center",
	},
	image: {
		margin: "20px auto 20px auto",
	},
	pageTitle: {
		margin: "10px auto 10px auto",
	},
	textField: {
		margin: "10px auto 10px auto",
	},
	button: {
		marginTop: 20,
		position: "relative",
	},
	customError: {
		color: "red",
		fontSize: "0.8rem",
		marginTop: 10,
	},
	progress: {
		position: "absolute",
	},
	invisibleSeparator: {
		border: "none",
		margin: 4,
	},
	visibleSeparator: {
		width: "100%",
		borderBottom: "1px solid rgba(0,0,0,0.1)",
		marginBottm: "20px",
	},
	card: {
		display: "flex",
		marginBottom: 20,
	},
	cardContent: {
		width: "100",
		flexDirection: "column",
		padding: 25,
	},
	cover: {
		minWidth: 200,
		objectFit: "cover",
	},
	handle: {
		height: 20,
		backgroundColor: theme.palette.primary.main,
		width: 60,
		margin: "0 auto 7px auto",
	},
	date: {
		height: 14,
		width: 100,
		backgroundColor: "rgba(0,0,0,0.3)",
		marginBottom: 10,
	},
	fullLine: {
		height: 15,
		width: "100%",
		backgroundColor: "rgba(0,0,0,0.6)",
		marginBottom: 10,
	},
	halfLine: {
		height: 15,
		width: "50%",
		backgroundColor: "rgba(0,0,0,0.6)",
		marginBottom: 10,
	},
	profile: {
		"& .image-wrapper": {
			textAlign: "center",
			position: "relative",
			"& button": {
				position: "absolute",
				top: "80%",
				left: "70%",
			},
		},
		"& .profile-image": {
			width: 200,
			height: 200,
			objectFit: "cover",
			maxWidth: "100%",
			borderRadius: "50%",
		},
		"& .profile-details": {
			textAlign: "center",
			"& span, svg": {
				verticalAlign: "middle",
			},
			"& a": {
				color: "#00bcd4",
			},
		},
		"& hr": {
			border: "none",
			margin: "0 0 10px 0",
		},
		"& svg.button": {
			"&:hover": {
				cursor: "pointer",
			},
		},
	},
});

const ProfileSkeleton = (props) => {
	const { classes } = props;
	return (
		<Paper className={classes.paper}>
			<div className={classes.profile}>
				<div className='image-wrapper'>
					<img src={NoImg} alt='profile' className='profile-image' />
				</div>
				<hr />
				<div className='profile-details'>
					<div className={classes.handle} />
					<hr />
					<div className={classes.fullLine} />
					<div className={classes.fullLine} />
					<hr />
					<LocationOn color='primary' /> <span>Location</span>
					<hr />
					<LinkIcon color='primary' /> https://website.com
					<hr />
					<CalendarToday color='primary' /> Joined date
				</div>
			</div>
		</Paper>
	);
};

ProfileSkeleton.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileSkeleton);
