
import {Test1} from "./test_copy"
//tsc --target ES5 -noEmitOnError test.ts

class Test extends Test1
{
		constructor(private _name: string, private _age: number, radius: number) {
			super(radius)
		}
		public set setName(name: string) {
				this._name = name
		}

		public set setAge(age: number) {
				this._age = age
		}

		public get getName(): string {
				return this._name
		}
		public get getAge(): number {
				return this._age
		}
		getInfo(): string {
				return this._name + " " + this._age + " " + this.getRadius()
		}
}

var obj = new Test("test", 1, 5)
obj.setAge = 2
console.log(obj.getInfo())