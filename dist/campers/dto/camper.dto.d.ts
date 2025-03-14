import { ObjectId } from 'mongodb';
export declare class CamperDto {
    readonly _id: ObjectId;
    readonly name: string;
    readonly age: number;
    readonly allergies: string[];
    readonly isAllergicToPeanuts: boolean;
}
