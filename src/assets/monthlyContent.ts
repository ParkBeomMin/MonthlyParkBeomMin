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
    category: "test category",
    title: "test",
    purpose: "test purpose",
    content: "test content",
  },
];
