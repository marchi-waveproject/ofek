import validator from "validator";

export function ValidateData(data, rules) {
    let errors = {};
    Object.keys(data).forEach(field => {
        if (rules.hasOwnProperty(field)) {
            let fielderrors = [];
            let val = data[field];
            if (rules[field].true) {
                if (!val) {
                    fielderrors.push("חייב לסמן");
                }
            } else {
                if (rules[field].required && validator.isEmpty(val)) {
                    fielderrors.push("חובה להזין מידע");
                }
                if (!validator.isEmpty(data[field])) {
                    if (rules[field].minlength 
                            && !validator.isLength(val, rules[field].minlength)) {
                        fielderrors.push(`נא להזין לפחות ${rules[field].minlength}` 
                            + " תווים");
                    }

                    /* https://www.npmjs.com/package/validator */


                    if (rules[field].alpha && !validator.isAlpha(val)) {
                        fielderrors.push("נא להזין רק אותיות");
                    }

                    if (rules[field].numbers && !validator.isNumeric(val)) {
                        fielderrors.push("נא להזין רק מספרים");
                    }

                    if (rules[field].alphanumeric && !validator.isAlphanumeric(val)) {
                        fielderrors.push("Enter only letters and Numbers");
                    }

                    if (rules[field].email && !validator.isEmail(val)) {
                        fielderrors.push("נא להזין כתובת מייל חוקית");                        
                    }
                    if (rules[field].equals 
                            && !validator.equals(val, data[rules[field].equals])) {
                        fielderrors.push("Values don't match");                                                
                    }
                }
            }
            if (fielderrors.length > 0) {
                errors[field] = fielderrors;
            }
        }
    })
    return errors;
}
