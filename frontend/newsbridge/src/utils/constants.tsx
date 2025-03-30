export const fixedWidth = 546;

const today: string = new Date().toISOString().split("T")[0];

export const inputFieldsProfile = [
    {
      label: "First Name",
      field: "firstName",
      defaultValue: "Your First Name",
      type: "text",
    },
    {
      label: "Last Name",
      field: "lastName",
      defaultValue: "Your Last Name",
      type: "text",
    },
    {
      label: "Email",
      field: "email",
      defaultValue: "Your Email Address",
      type: "email",
    },
    {
      label: "Date of Birth",
      field: "date_of_birth",
      defaultValue: "Your DOB",
      type: "date",
      min: "1900-01-01",
      max: today,
    },
  ];