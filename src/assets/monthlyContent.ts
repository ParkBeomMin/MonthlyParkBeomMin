interface MonthlyContent {
  year: number;
  month: number;
  category: string;
  title: string;
  purpose: string;
  content: string;
}

export const monthlyContents: Array<MonthlyContent> = [
  {
    year: 2022,
    month: 10,
    category: "idea",
    title: "test idea",
    purpose: "test purpose",
    content: "test content",
  },
  {
    year: 2022,
    month: 10,
    category: "result",
    title: "test result",
    purpose: "test purpose",
    content: "test content",
  },
];
