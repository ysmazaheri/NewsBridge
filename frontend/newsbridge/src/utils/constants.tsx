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

  //Dropdown options for category, sorting, posted at and bias rating
export const categoriesSearch = [
  { label: "US News", value: "usnews" },
  { label: "World", value: "world" },
  { label: "Business", value: "business" },
  { label: "Politics", value: "politics" },
  { label: "Other", value: "other" },
];
export const sortingOptionsSearch = [
  { label: "Relevance", value: "relevance" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];
  //(str is used to dynamically adjust text based on the selected option)
  //For example, "posted in the last 7 days" vs "posted today"
export const postedAtOptionsSearch = [ 
  { label: "Today", value: "today", str:"posted"},
  { label: "Yesterday", value: "yesterday", str:"posted"},
  { label: "Last 7 days", value: "last7days", str: "posted in the"},
  { label: "Last 30 days", value: "last30days", str: "posted in the"},
  { label: "Anytime", value: "anytime", str: "posted"},
]
export const biasRatingOptionsSearch = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
]