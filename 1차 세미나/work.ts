interface SoptMember {
  name: string;
  age: number;
  home: string;
  like: string;
}

const members: SoptMember[] = [
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

members.map((SoptMember) =>
  console.log(
    `${SoptMember.name}는 ${SoptMember.age}살이고 ${SoptMember.home}에 살고있고 ${SoptMember.like}를 좋아합니다.`
  )
);
