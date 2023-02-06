import {
    makeStyles
} from "@material-ui/styles";

export default makeStyles(theme => ({
    baseInput: {
        border: "1px solid #DDDDDD",
        borderRadius: "4px",
        width: "100%",
        fontFamily: "Lato",
        backgroundColor: "#F4F4F4",
        minHeight: "35.63px",
        maxHeight: "35.63px",
        marginBottom: 4,
        "& .MuiInputBase-input": {
            padding: "0px 12px",
            minHeight: "35.63px",
            maxHeight: "35.63px",
            fontSize: "14px",
            color: "#4A4A4A",
            '&:focus': {
                border: "1px solid #00b2e3",
                borderRadius: "4px",
                outline: 0,
            },
        },
        "& .MuiInputBase-root": {
            '&:hover': {
                border: 'none',
                border: "1px solid #00b2e3",
                borderRadius: "4px",
                outline: 0,
            },
        },
        "& .Mui-disabled": {
            backgroundColor: "#f3f3f3",
            color: "#4A4A4A"
        },
        "& input::-webkit-outer-spin-button": {
            appearance: "none",
            margin: 0
        },
        "& input::-webkit-inner-spin-button": {
            appearance: "none",
            margin: 0
        },
        "& input[type=number]": {
            appearance: "textfield"
        },
        "& .MuiFormHelperText-root.Mui-error": {
            display: "none",
            "&:after": {
                border: 'none'
            }
        },
        "& .MuiInput-underline:before": {
            border: 'none'
        },
        "& .MuiInput-underline.Mui-error:after": {
            transform: 'none',
            border: "none",
        }
    }
}));
