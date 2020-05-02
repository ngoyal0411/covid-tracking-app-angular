import { IDelta } from './IDelta';

export class IDistrictWiseDetail {
    notes: string;
    active: number;
    confirmed: number;
    deceased: number;
    recovered: number;
    delta: IDelta;
}