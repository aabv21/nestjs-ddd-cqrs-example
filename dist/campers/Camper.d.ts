import { AggregateRoot } from '@nestjs/cqrs';
export declare class Camper extends AggregateRoot {
    private readonly id;
    private readonly name;
    private readonly age;
    private readonly allergies;
    constructor(id: string, name: string, age: number, allergies: string[]);
    getId(): string;
    getName(): string;
    getAge(): number;
    getAllergies(): string[];
}
