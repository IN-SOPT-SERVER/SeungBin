interface member {
  name: string;
  age: number;
  home: string;
  like: string;
}

const members = [
  {
    name: "이용택",
    age: 25,
    home: "역곡",
    like: "피자",
  },
  {
    name: "전희선",
    age: 24,
    home: "역곡",
    like: "피자",
  },
  {
    name: "남지윤",
    age: 23,
    home: "역곡",
    like: "피자",
  },
];

members.map((member) =>
  console.log(
    `${member.name}는 ${member.age}살이고 ${member.home}에 살고있고 ${member.like}를 좋아합니다.`
  )
);
