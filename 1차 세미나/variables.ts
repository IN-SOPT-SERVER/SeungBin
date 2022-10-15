// const test1: string = "hello";
// console.log(typeof test1, test1);

// const test2: number = 3;
// console.log(typeof test2, test2);

// const test3: boolean = true;
// console.log(typeof test3, test3);

// const test4: number = 5;

// let aaa: number[] = [1, 2];

// const arr3: Array<string> = ["n", "b", "a"];

// const foo1 = (a: Object) => {
//   console.log(a);
// };

// const foo2 = (a: object) => {
//   console.log(a);
// };

// foo1("hello");
// foo2("hello");

const hello1 = (name: string): void => {
  console.log(`${name}아 안녕`);
};

const sum1 = (a: number, b: number): number => {
  return a + b;
};

//*as 타입 단언
// const test11: any = "이종현";
// const nameLength = (test11 as string).length;
// console.log(nameLength);

// const test12: any = "남라인";
// const nameLength2 = (<string>test12).length;
// console.log(nameLength2);

interface SOPT {
  name: string;
  age: number;
  isSOPT?: boolean;
}

const arr: SOPT[] = [
  {
    name: "최승빈",
    age: 24,
    isSOPT: true,
  },
  {
    name: "권세훈",
    age: 18,
    isSOPT: true,
  },
  {
    name: "남지윤",
    age: 23,
    isSOPT: true,
  },
];

const introduces: SOPT = {
  name: "최승빈",
  age: 24,
  isSOPT: true,
};
