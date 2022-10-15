/* 
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/

interface Member {
  name: string;
  group: string;
}

interface Dinner {
  member: Member[];
  shuffle(array: Member[]): Member[];
  organize(array: Member[]): void;
}

const dinner: Dinner = {
  member: [
    {
      name: "권세훈",
      group: "ob",
    },
    {
      name: "최승빈",
      group: "ob",
    },
    {
      name: "소예원",
      group: "yb",
    },
    {
      name: "조예슬",
      group: "yb",
    },
    {
      name: "김민욱",
      group: "ob",
    },
    {
      name: "김소현",
      group: "ob",
    },
    // 더 추가해주세요.
  ],
  shuffle(array): Member[] {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array): any {
    this.shuffle(array);

    const randomMember1: string = array[0].name;
    const randomMember2: string = array[1].name;
    const dinnerMember: string[] = [randomMember1, randomMember2];

    console.log(`결과 ${dinnerMember[0]}, ${dinnerMember[1]}`);
  },
};

dinner.organize(dinner.member);
