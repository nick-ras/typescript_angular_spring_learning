//tsc --target ES5 -noEmitOnError test.ts

export abstract class Test1 {
		constructor(private radius : number) {
		}
		abstract getInfo(): string;
		getRadius(): number {
				return this.radius
		}
}
