import React, { Fragment } from "react";
import NoImg from "../images/no-img.png";
import PropTypes from "prop-types";

//MUI Stuff
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import withStyles from "@material-ui/core/styles/withStyles";

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
		width: 60,
		height: 18,
		backgroundColor: theme.palette.primary.main,
		marginBottom: 7,
	},
	date: {
		height: 14,
		width: 100,
		backgroundColor: "rgba(0,0,0,0.3)",
		marginBottom: 10,
	},
	fullLine: {
		height: 15,
		width: "90%",
		backgroundColor: "rgba(0,0,0,0.6)",
		marginBottom: 10,
	},
	halfLine: {
		height: 15,
		width: "50%",
		backgroundColor: "rgba(0,0,0,0.6)",
		marginBottom: 10,
	},
});

const ScreamSkeleton = (props) => {
	const { classes } = props;

	const content = Array.from({ length: 5 }).map((item, index) => (
		<Card className={classes.card} key={index}>
			<CardMedia className={classes.cover} image={NoImg} />
			<CardContent className={classes.cardContent}>
				<div className={classes.handle} />
				<div className={classes.date} />
				<div className={classes.fullLine} />
				<div className={classes.fullLine} />
				<div className={classes.halfLine} />
			</CardContent>
		</Card>
	));

	return <Fragment>{content}</Fragment>;
};

ScreamSkeleton.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScreamSkeleton);
