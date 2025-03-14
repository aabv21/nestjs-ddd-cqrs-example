// Dependencies
import { AggregateRoot } from '@nestjs/cqrs';

// Domain Model (DDD)
export class Camper extends AggregateRoot {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly age: number,
    private allergies: string[],
  ) {
    super();
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getAllergies(): string[] {
    return [...this.allergies];
  }

  updateAllergies(allergies: string[]): void {
    const allergiesLower = allergies.map((allergy) => allergy.toLowerCase());
    if (allergiesLower.includes('chocolate')) {
      throw new Error('Allergy may not be chocolate');
    }
    this.allergies = [...allergies];
  }
}
