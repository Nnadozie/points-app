// interface IHouse {
//   name: string;
//   addMember: (name: string, house: string) => HouseMember;
//   removeMember: (name: string, house: string) => void;
// }

// interface HouseDetails extends Pick<IHouse, 'name'> {
//   points: number; //sum of points of house members
//   members: Pick<IHouseMember, 'house' | 'name' | 'points'>[];
// }

// interface IHouseMember {
//   house: IHouse['name'];
//   name: string;
//   points: number;
//   givePoints: (action: GivePoints) => void;
//   deductPoints: (action: DeductPoints) => void;
// }

// interface Point {
//   amount: number;
//   reason: string;
//   recipient: Pick<IHouseMember, 'name' | 'house'>;
// }

// interface GivePoints {
//   type: 'Give';
//   point: Point;
// }

// interface DeductPoints {
//   type: 'Deduct';
//   point: Point;
// }

// /**
//  * Each house is an instance
//  * Can add and remove house members at any time
//  * Each house member is an instance
//  * Parent app keeps track of number of houses and house members
//  */

// interface IApp {
//   createHouse: (name: string) => House;
//   listHouses: () => string[];
//   getHouse: (name: string) => HouseDetails | null;
// }

// interface AppDataStore {
//   Houses: string[];
//   HouseMembers: Pick<IHouseMember, 'house' | 'name' | 'points'>[];
// }

// const DataStore: AppDataStore = {
//   Houses: [],
//   HouseMembers: [],
// };

// class HouseMember implements IHouseMember {
//   house = '';
//   name = '';
//   points = 0;

//   constructor(name: string, house: string) {
//     this.house = house;
//     this.name = name;
//   }

//   givePoints(action: GivePoints) {
//     const memIndex = DataStore.HouseMembers.findIndex(
//       (member) => member.name === action.point.recipient.name && member.house === action.point.recipient.house,
//     );
//     const recep = DataStore.HouseMembers[memIndex];
//     DataStore.HouseMembers[memIndex] = { ...action.point.recipient, points: recep.points + action.point.amount };
//   }

//   deductPoints(action: DeductPoints) {
//     const memIndex = DataStore.HouseMembers.findIndex(
//       (member) => member.name === action.point.recipient.name && member.house === action.point.recipient.house,
//     );
//     const recep = DataStore.HouseMembers[memIndex];
//     DataStore.HouseMembers[memIndex] = { ...action.point.recipient, points: recep.points - action.point.amount };
//   }
// }

// class House implements IHouse {
//   name = '';

//   constructor(name: string) {
//     this.name = name;
//   }

//   addMember(name: string) {
//     const newMember = new HouseMember(name, this.name);
//     DataStore.HouseMembers.push(newMember);
//     return newMember;
//   }
//   removeMember(name: string, house: string) {
//     const toRem = DataStore.HouseMembers.findIndex((val) => val.name === name && val.house === house);
//     DataStore.HouseMembers.splice(toRem);
//   }
// }

// class App implements IApp {
//   // _house: House
//   // _houseMember: HouseMember

//   constructor() {
//     // this._house = house;
//     // this._houseMember = houseMember;
//   }

//   createHouse(name: string) {
//     const newHouse = new House(name);
//     DataStore.Houses.push(name);
//     return newHouse;
//   }

//   listHouses() {
//     return DataStore.Houses;
//   }

//   getHouse(name: string) {
//     return DataStore.Houses.includes(name)
//       ? {
//           name: name,
//           points: DataStore.HouseMembers.filter((member) => member.house === name).reduce((prev, curr) => {
//             return prev + curr.points;
//           }, 0),
//           members: DataStore.HouseMembers.filter((member) => member.house === name),
//         }
//       : null;
//   }
// }

// const app = new App();

// const gryf = app.createHouse('Gryfindor');
// debugger;

// const dozie = gryf.addMember('Dozie');
// debugger;

// const ravenclaw = app.createHouse('ravenclaw');
// debugger;

// const seyi = ravenclaw.addMember('Seyi');
// debugger;

// seyi.givePoints({
//   type: 'Give',
//   point: { amount: 50, reason: 'just because', recipient: { name: 'Dozie', house: 'Gryfindor' } },
// });
// debugger;
// seyi.givePoints({
//   type: 'Give',
//   point: { amount: 150, reason: 'just because some more', recipient: { name: 'Dozie', house: 'Gryfindor' } },
// });

// debugger;
// dozie.givePoints({
//   type: 'Give',
//   point: { amount: 400, reason: 'reciprocate', recipient: { name: 'Seyi', house: 'ravenclaw' } },
// });
// debugger;

// const houseGryf = app.getHouse('Gryfindor');
// debugger;

console.log('hello');
