export const validate = (data, type) => {
  const errors = {};
  if (type === "Register") {
    if (!data.name.trim()) {
      errors.name = "Name Required";
    } else {
      delete errors.name;
    }

    if (!data.email) {
      errors.email = "Email Required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email Address is invalid";
    } else {
      delete errors.email;
    }

    if (!data.password) {
      errors.password = "Password is Required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\&])(?=.{8,})/.test(
        data.password
      )
    ) {
      errors.password = "Password must be complex";
    } else {
      delete errors.password;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm Password is Required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password do not match";
    }

    if (data.isAccept) {
      delete errors.isAccept;
    } else {
      errors.isAccept = "Accept our regulation";
    }
  } else if (type === "Login") {
    if (!data.email) {
      errors.email = "Email Required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email Address is invalid";
    } else {
      delete errors.email;
    }

    if (!data.password) {
      errors.password = "Password is Required";
    } else {
      delete errors.password;
    }
  } else if (type === "Recovery") {
    if (!data.email) {
      errors.email = "Email Required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email Address is invalid";
    } else {
      delete errors.email;
    }
  }
  return errors;
};
