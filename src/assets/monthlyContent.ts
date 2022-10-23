interface MonthlyContent {
  year: number;
  month: number;
  category: MonthlyCategory;
  title: string;
  purpose: string;
  content: string;
}

interface MonthlyCategory {
  code: string;
  name: string;
}

export const monthlyCategories: Array<MonthlyCategory> = [
  {
    code: "0001",
    name: "idea",
  },
  { code: "0002", name: "result" },
];

export const monthlyContents: Array<MonthlyContent> = [
  {
    year: 2022,
    month: 10,
    category: { code: "0001", name: "idea" },
    title: "test idea",
    purpose: "test purpose",
    content: "test content",
  },
  {
    year: 2022,
    month: 10,
    category: { code: "0002", name: "result" },
    title: "test result",
    purpose: "test purpose",
    content: "test content",
  },
];
