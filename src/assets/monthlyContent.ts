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
    month: 11,
    category: { code: "0001", name: "idea" },
    title: "직딩",
    purpose: "직장인들에게 필요한 기능들을 모아놓은 서비스",
    content: `직장 생활을 하며, 지친 직장인들을 위해 소소한 재미를 느낄 수 있고 유용한 기능들을 가진 서비스입니다.<br>
    <br>
    <기능 소개><br>
    1. 실시간 월급 계산 : 자신의 연봉과 업무시간을 입력하면 매 달/년마다 현재 시점에서 얼마만큼의 돈을 벌고 있는지를 보여준다.<br>
    2. 일한 시간 : 입사날짜를 입력하면 현재까지 얼마나 일했는지 일/시간 단위로 변환해서 보여준다.<br>
    3. 대숲(대나무숲) : 커뮤니케이션을 할 수 있는 공간이다.<br>
    <br>
    <확장 가능성><br>
    1. 타겟층이 직장인으로 확실하기때문에 이와 관련된 이직/채용 서비스와의 접점을 만들 수 있을 것이다.<br>
    2. 연봉, 입사날짜 등 데이터를 활용해 다양한 지표(ex. 나이대별 평균 연봉 등)를 만들어낼 수 있을 것이다.<br>
    `,
  },
];
