const insert = (props) => {
    document.form.textview.value = document.form.textview.value 
    + props;
}

const equals = () => {
    let exp = document.form.textview.value;
    
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}
const clean = () => {
    document.form.textview.value = "";
}
